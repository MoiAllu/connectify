
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookie =require("cookie");

export default async (req:NextApiRequest,res:NextApiResponse) => {
    const salt = bcrypt.genSaltSync()
    const {name,email,password}=req.body;

 let user;
 if(password.length < 7){
  return res.json({passError:"Password is too short"});
 }else{
   try{
     user= await prisma.user.create({
       data:{
         name,
         email,
         password:bcrypt.hashSync(password,salt)
        },
      })
    }catch(e){
      res.status(401)
      res.json({ error: 'User already exists'})
      return
    }
  }
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
}