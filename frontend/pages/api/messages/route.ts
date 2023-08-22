import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
export default async (req :NextApiRequest, res:NextApiResponse) => {
    try{
        const {userId,friendId,conversationId,message, image} = req.body;
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
              seen: {
                connect: {
                  id: userId
                }
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
        return res.json(newMessage)
            
    }catch{
        return res.status(500).json({error:"Something went wrong"});
    } 
};