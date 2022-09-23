import { NextApiRequest,NextApiResponse } from "next";
import prisma from "../../lib/prisma";
export default async(req:NextApiRequest,res:NextApiResponse)=>{
    const {content,title}=req.body;
    const post = prisma.post.create({
        data:{
            content:content,
            title:title,
            comments:title,
            author:title
        }
    })
}