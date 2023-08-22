
import {NextApiRequest,NextApiResponse} from 'next'
import prisma from '../../../lib/prisma'

export default async(req:NextApiRequest,res:NextApiResponse)=>{
    try{
        const {userId,friendId}=req.body
        console.log(userId,friendId)
        if(userId===friendId){
            res.status(403)
            res.json({ error: 'You cannot add yourself'})
            return
        }
        const user= await prisma.friends.findUnique({
            where:{
                userId_friendId:{
                    userId,
                    friendId
                }
            }
        })
        if(user){
            res.status(403)
            res.json({ error: 'You are already friends'})
            return
        }

        const friend=await prisma.friends.create({
            data:{
                userId,
                friendId
            }
        })
        if(friend){
            res.status(200)
            res.json({success:"successfully added",friend})
            return
        }else{
            res.status(403)
            res.json({ error: 'friend is empty'})
        }
    }catch(e){
        res.status(501)
        res.json({ error: 'Opps something went wrong'})
        return
    }
}