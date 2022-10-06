import { NextApiRequest,NextApiResponse } from "next";
import prisma from "../../lib/prisma";
export default async(req:NextApiRequest,res:NextApiResponse)=>{
    const {userId,postId,parentId,message}=await req.body;
    try{
        await prisma.comment.create({
            data:{
                userId,
                message,
                postId,
                parentId,
            }
        })
    }catch(e){
        res.json({error:"something went wrong"})
        res.send(e)
        return
    }
    res.send("successfully commented")
}