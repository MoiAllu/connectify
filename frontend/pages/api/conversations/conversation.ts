import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { pusherServer } from "../../../lib/pusher";
export default async (req :NextApiRequest, res:NextApiResponse) => {
    try{
        const {userId,conversationId}=req.body;
        if(!userId&& !conversationId) return res.status(400).json({error:"UnAuthorized"});
        if(!conversationId) return res.status(400).json({error:"Invalid Data"});
        const conversation = await prisma.conversation.findUnique({
            where:{
                id:conversationId
            },
            include:{
                message:{
                    include:{
                        seen:true
                        
                    }
                },
                users:true
            }
        })
        if(!conversation) return res.status(400).json({error:"Invalid Id"});
        const lastMessage = conversation.message[conversation.message.length-1];
        if(!lastMessage) return res.json(conversation);
        const updateMessage = await prisma.message.update({
            where:{
                id:lastMessage.id
            },
            include:{
                seen:true,
                sender:true
            },
            data:{
                seen:{
                    connect:{
                        id:userId
                    }
                }
            }
        })
        return res.json({conversation});


    }catch{
        return res.status(500).json({error:"Something went wrong"});
    } 
};