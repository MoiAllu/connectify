import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
export default async (req:NextApiRequest,res:NextApiResponse) => {
    try{
    const {postId,userId,postUserId}= await req.body;
    try {
        if(userId!=postUserId){
            res.status(403)
            res.json({ error: 'You are not authorized to delete this post'})
            return
        }
         const deletePost=  await prisma.post
        .delete({
            where:{
                id:postId,
            }
        })
        res.status(200)
        res.json({success:"Successfully Deleted",deletePost})
        return
    }catch(e){
        res.status(501)
        res.json({ error: 'Opps something went wrong'})
        return
    }
}catch{
    res.status(500).json({error:"Something went wrong"})
}
}