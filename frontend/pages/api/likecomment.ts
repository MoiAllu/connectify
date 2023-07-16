import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
export default async (req:NextApiRequest,res:NextApiResponse) => {
    try{

    
    const {commentId,postId,userId}= await req.body;
    const data={
        commentId,postId,userId
    }
    const like =await prisma.like.findUnique({
        where:{
            userId_commentId_postId:data
        }
    })
    if(like ===null){
        await prisma.like.create({data})
        res.status(200)
        res.json({addLike:true}) 
        return 
    }else{
        await prisma.like.delete({
            where:{
               userId_commentId_postId:data
            }
        })
        res.status(200)
        return res.json({addLike:false})
    }
}catch{
    res.status(500).json({error:"Something went wrong"})
}
}