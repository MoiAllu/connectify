import { NextApiRequest,NextApiResponse } from "next";
import prisma from "../../lib/prisma";
export default async(req:NextApiRequest,res:NextApiResponse)=>{
    const {message,userId,postId,parentId}=await req.body;
    try{ 
        if( message!="" && userId!=null && postId!=null){
         await prisma.comment.create({
                data:{
                    userId,
                    message,
                    postId,
                    parentId,
                }
            })
        }else{
            res.status(403)
            res.json({ error: 'comment is empty'})
        }
        
    }catch(e){
        res.status(501)
        res.json({ error: 'Opps something went wrong'})
        return
    }
    res.status(200)
    res.json ({success:"successfully commented",});
}