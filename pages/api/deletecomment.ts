import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
export default async (req:NextApiRequest,res:NextApiResponse) => {
    const {commentId}= await req.body;
    try {
          await prisma.comment.delete({
          where:{
              id:commentId
            }
        })
        res.status(200)
        res.json({success:"Successfully Deleted"})
        return
    }catch(e){
        res.status(501)
        res.json({ error: 'Opps something went wrong'})
        return
    }
}