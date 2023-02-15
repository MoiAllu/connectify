import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
export default async (req:NextApiRequest,res:NextApiResponse) => {
    const {postId,userId}= await req.body;
    const data={
        postId,userId
    }
    const like =await prisma.postLike.findUnique({
        where:{
            userId_postId:data
        }
    })
    if(like ===null){
        await prisma.postLike.create({data})
        res.status(200)
        res.json({addLike:true}) 
        return 
    }else{
        await prisma.postLike.delete({
            where:{
               userId_postId:data
            }
        })
        res.status(200)
        return res.json({addLike:false})
    }
}