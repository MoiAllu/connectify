import { NextApiRequest,NextApiResponse } from "next";
import prisma from "../../lib/prisma";
export default async(req:NextApiRequest,res:NextApiResponse)=>{
    const {content,user}=req.body;
    console.log(user);
        await prisma.post.create({
            data:{
                content:content,
                title:content,
                author:user,
                published:true
            }
        })
    
}