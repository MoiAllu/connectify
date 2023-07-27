import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async(req:NextApiRequest,res:NextApiResponse)=>{
    try{
    const {user,pictureUrl}= await req.body;
        if(user && pictureUrl){
            await prisma.user.update({where:{
                email:user.email,
            },
            data:{
                bgPicture:pictureUrl.secure_url,
            }
          })
            res.status(200)
            res.json({success:"Updated Background Picture"})
            return
        } else if(!user && !pictureUrl){
            res.status(400)
            res.json({error:"User not Authenticated"})
            return
        }else if(!pictureUrl){
            res.status(400)
            res.json({error:"No Picture Provided"})
            return
        }else if(!user){
            res.status(400)
            res.json({error:"User not Authenticated"})
            return
        }
        else{
            res.status(500)
            res.json({error:"Unreachable Server"})
        }
    }catch{
        res.status(500).json({error:"Something went wrong"})
    }
}