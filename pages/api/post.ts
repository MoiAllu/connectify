import { NextApiRequest,NextApiResponse } from "next";
import prisma from "../../lib/prisma";
export default async(req:NextApiRequest,res:NextApiResponse)=>{
    const {content,userId}=await req.body;
    console.log(req.method)
    try{ 
        if( content!=""){

            await prisma.post.create({
                data:{
                    content,
                    title:content,
                    userId,
                    published:true
                }
            })
        }else{
            res.status(403)
            res.json({ error: 'Post is empty'})
        }
    }catch(e){
        res.status(501)
        res.json({ error: 'Opps something went wrong'})
        return
    }
    res.status(200)
    res.send({success:"successfully posted"});
}