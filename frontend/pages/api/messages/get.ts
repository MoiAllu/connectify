import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
export default async (req :NextApiRequest, res:NextApiResponse) => {
    try{
        const {user,userId,conversationId} = req.body;
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
        const updateMessage = await prisma.message.update({
            where:{
                id:lastMessage.id
            },
            data:{
                users:{
                    connect:{
                        id:user.id
                    }
                }
            }
        })

        return res.json(conversation)
        
    }catch{
        return res.status(500).json({error:"Something went wrong"});
    } 
};