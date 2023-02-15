import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async(req:NextApiRequest,res:NextApiResponse)=>{
    const {user,pictureUrl}= await req.body;
        if(user && pictureUrl){
            await prisma.user.update({where:{
                email:user.email,
            },
            data:{
                profilePicture:pictureUrl.secure_url,
            }
          })
            res.status(200);
            res.json({success:"Updated Profile Picture"})
            return
        } else if(!user && !pictureUrl){
            res.status(400)
            res.json({error:"User not Authenticated"})
            return
        }else{
            res.status(500)
            res.json({error:"Unreachable Server"})
        }
}