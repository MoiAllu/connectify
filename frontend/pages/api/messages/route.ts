import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { pusherServer } from "../../../lib/pusher";
export default async (req :NextApiRequest, res:NextApiResponse) => {
    try{
        const {userId,conversationId,message, image} = req.body;
        if(!conversationId){
            return res.status(400).json({error:"UnAuthorized"});
        }
        if(!message && !image){
            return res.status(400).json({error:"Invalid Data"});
        }
        const newMessage = await prisma.message.create({
            include: {
              seen: true,
              sender: true
            },
            data: {
              body: message,
              image: image,
              conversation: {
                connect: { id: conversationId }
              },
              sender: {
                connect: { id: userId }
              },
            }
          });
        

        const updateConversation= await prisma.conversation.update({
            where:{
                id:conversationId
            },
            data:{
                lastMessage: new Date(),
                message:{
                    connect:{
                        id:newMessage.id
                    }
                }
            },
            include:{
                users:true,
                message:{
                    include:{
                        seen:true
                    }
                }
            }
        })
        const id= "chat"+ conversationId;
        pusherServer.trigger(id, 'chat', newMessage);
    //  const lastMessage = updateConversation.message[updateConversation.message.length - 1];
    //   updateConversation.users.map((user) => {
    //      pusherServer.trigger(user.email!, 'conversation:update', {
    //     id: conversationId,
    //     messages: [lastMessage]
    //   });
    //   });

        return res.json(newMessage)

      
    }catch{
        return res.status(500).json({error:"Something went wrong"});
    } 
};