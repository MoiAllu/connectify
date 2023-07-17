import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookie =require("cookie");

export default async (req:NextApiRequest,res:NextApiResponse) => {
  try{
const {email,password}=req.body;
    const user =await prisma.user.findUnique({
        where:{
            email,
        }
    }
    )
    if(user && bcrypt.compareSync(password,user.password)){
        const token = jwt.sign(
            {
              email: user.email,
              id: user.id,
              time: Date.now(),
            },
            process.env.JWT_SECRET,
            { expiresIn: '8h' }
          )
          res.setHeader(
            'Set-Cookie',
            cookie.serialize(process.env.ACCESS_TOKEN, token, {
              httpOnly: true,
              maxAge: 8 * 60 * 60,
              path: '/',
              sameSite: 'lax',
              secure: process.env.NODE_ENV === 'production',
            })
          )
          res.status(200)
          res.json({success:"Created successfully"})
    }else{
        res.status(401)
        res.json({error:"Invalid credentials"})
    }
  }catch{
    res.status(500).json({error:"Something went wrong"})
  }
  
}