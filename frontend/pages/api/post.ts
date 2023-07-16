import { NextApiRequest,NextApiResponse } from "next";
import prisma from "../../lib/prisma";
export default async(req:NextApiRequest,res:NextApiResponse)=>{
    try{
    const {content,userId,url}=await req.body;
    try{ 
        if( content!=""){

            await prisma.post.create({
                data:{
                    title:content,
                    userId,
                    published:true,
                    content:url,
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
    res.json({success:"successfully posted"});
}catch{
    res.status(500).json({error:"Something went wrong"})
}
}