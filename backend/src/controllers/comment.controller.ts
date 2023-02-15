import { FastifyReply, FastifyRequest } from "fastify"
import { ERROR500, STANDARD } from "../helpers/constants"
import { PrismaClient } from '@prisma/client'
import {ICommentRequest} from "interfaces"
import { utils } from '../helpers/utils'

const jwt=require('jsonwebtoken')
const prisma = new PrismaClient()

export const createComment = async (request: ICommentRequest, reply: FastifyReply) => {
    const {message,postId,parentId}=request.body;
    const userId=await utils.currUser(request);
    console.log(message,postId,parentId,userId);
    try{ 
        if(message && userId && postId){
        const comment= await prisma.comment.create({
                data:{
                    userId,
                    message,
                    postId,
                    parentId,
                }
            })
            reply.status(STANDARD.CREATED).send({success:"successfully commented",comment})
            return
        }else{
            reply.status(STANDARD.NOCONTENT).send({error:"comment is empty"})
            return
        }
    }catch(e){
        reply.send({ERROR500,e})
        return
    }
}
export const deleteComment=async(request:ICommentRequest,reply:FastifyReply)=>{
    const {id}= request.body;
    try {
         const deletedComment = await prisma.comment.delete({
          where:{
              id
            }
        })
        reply.status(STANDARD.SUCCESS).send({success:"successfully deleted comment",deletedComment})
        return
    }catch(e){
        reply.send({ERROR500,e})
        return
    }
}
export const commentLike= async(request:ICommentRequest,reply:FastifyReply)=>{
    const {id,postId}=  request.body;
    const commentId=id;
    const userId=await utils.currUser(request);
    const data={commentId,postId,userId}
    const likeComment =await prisma.like.findUnique({
        where:{
            userId_commentId_postId:data
        }
    })
    if(!likeComment){
        await prisma.like.create({data})
        reply.status(STANDARD.SUCCESS).send({addLike:true})
        return 
    }else{
        await prisma.like.delete({
            where:{
                userId_commentId_postId:data
            }
        })
        reply.status(STANDARD.SUCCESS).send({addLike:false})
        return
    }

}