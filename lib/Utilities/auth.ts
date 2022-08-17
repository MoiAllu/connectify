import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import prisma from "../../lib/prisma";
const jwt = require('jsonwebtoken');

export const validateRoute=(hanlder:any)=>{
    return async (req : NextApiRequest, res:NextApiResponse) => {
        
        const token =req.cookies.ACCESS_TOKEN;
        if(token){

            
            let user;
            try{
                const {id}=jwt.verify(token,process.env.JWT_SECRET)
                user = prisma.user.findUnique({
                    where:{
                        id  
                    }
                })
                if(!user){
                    throw new Error("Invalid Credentials");
                }
            }catch(error){
                res.status(401)
                res.json({error:"Unauthorized"})
            }
            return hanlder(req,res,user)
        }
        res.status(401)
        res.json({error:"Unauthorized"})
    }
}