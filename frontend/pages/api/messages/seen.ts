import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { pusherServer } from "../../../lib/pusher";
export default async (req :NextApiRequest, res:NextApiResponse) => {
    try{
        const {userId,conversationId} = req.body;
        if(!conversationId ||!userId){
            return res.status(400).json({error:"UnAuthorized"});
        }
        const conversation = await prisma.conversation.findUnique({
            where:{
               id:conversationId,  
            },
            include:{
                message:{
                    include:{
                        seen:true,
                        sender:true,
                        users:true
                    }
                },
                users: {
                    include: {
                        conversations: true,
                        friends: true,
                    }
                },
                
            }
        })
        if (!conversation) {
            return res.status(400).json({error:"Invalid Id"});
        }
        const lastMessage = conversation.message[conversation.message.length-1];
        if(!lastMessage) return res.json(conversation)

        const updatedMessage = await prisma.message.update({
            where:{
                id:lastMessage.id
            },
            include:{
                seen:true,
                sender:true,
                users: true
            },
            data:{
                users:{
                    connect:{
                        id:userId
                    }
                }
            }
        })
        const id= "chat"+ conversationId;
        if (lastMessage.users.indexOf(userId) !== -1 ) {
            return res.json(conversation);
          }
        await pusherServer.trigger(id, 'seen', updatedMessage);
        return res.json(updatedMessage);        
    }catch{
        return res.status(500).json({error:"Something went wrong"});
    } 
};