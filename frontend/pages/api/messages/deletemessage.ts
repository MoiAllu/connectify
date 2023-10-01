import prisma from "../../../lib/prisma"; 
import { NextApiRequest,NextApiResponse } from "next";
import { pusherServer } from "../../../lib/pusher";

export default async(req:NextApiRequest,res:NextApiResponse)=>{
    try{
        const {messageId,userId,conversationId} = req.body;
        if(!messageId || !userId || !conversationId) return res.status(400).json({error:"Invalid Data"});
        const message = await prisma.message.findUnique({
            where:{
                id:messageId
            },
            include:{
                sender:true,
                users:true
            }
        });
        if(!message) return res.status(400).json({error:"Invalid Id"});
        if(message.senderId !== userId) return res.status(400).json({error:"UnAuthorized"});
        const deletedMessage = await prisma.message.delete({
            where:{
                id:messageId
            }
        });
        // const id= "deleteChat"+ conversationId;
        const id = "chat"+ conversationId;
         await pusherServer.trigger(id, 'deleteChat', deletedMessage);
        return res.json(deletedMessage);

    }catch{
        return res.status(500).json({error:"Something went wrong"});
    }


}