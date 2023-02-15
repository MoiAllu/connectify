import { FastifyReply, FastifyRequest } from "fastify"
import { STANDARD } from "../helpers/constants"
import { handleServerError } from "../helpers/errors"
import { PrismaClient } from '@prisma/client'
import { DPostRequest, IPostRequest, IUserRequest } from "interfaces"
import { utils } from '../helpers/utils'
export const prisma = new PrismaClient()

export const createPost = async (request: IPostRequest, reply: FastifyReply) => {
    try {
        const id= await utils.currUser(request);
        const {content,title}= request.body;
        if(content&&id){

            const post = await prisma.post.create({
                data: {
                    content:content,
                    title:title,
                    userId:id,
                    published:true
                }
            })
            reply.status(STANDARD.SUCCESS).send({ data: post })
        }
    } catch (e) {
        handleServerError(reply, e)
    }
}
export const deletePost= async (request: DPostRequest, reply: FastifyReply) => {
    try {
        const {id}=request.body;
        const post = await prisma.post.delete({
            where: {
              id,
            },
          })  
        reply.status(STANDARD.SUCCESS).send({ post:"Deleted Successfully",data:post})
    } catch (e) {
        handleServerError(reply, e)
    }
}
export const getAllPosts = async (request:FastifyRequest,reply:any) => {
        const posts= await prisma.post.findMany({
            include:{
                author:true,
                postlikes:true,
                comments:{
                    orderBy:{
                        createdAt:"asc"
                    },
                    select:{
                        id:true,
                        message:true,
                        createdAt:true,
                        updatedAt:true,
                        postId:true,
                        parentId:true,
                        likes:true,
                        user:{
                            select:{
                                id:true,
                                name:true,
                            }
                        },
                        _count: { select: { likes: true } },
                    }
                },
            }
        })
        if(posts){
            console.log(posts);
            reply.status(STANDARD.SUCCESS).send({ data: posts })
            return 
        }else{
            reply.status(200)
            reply.send({error:"Not Have any post"})
            return
        }
}
export const getUserPost=async(request:IUserRequest,reply:FastifyReply)=>{
    // const token = request.cookies.CONNECTIFY_ACCESS_TOKEN;
    // const { id } = await jwt.verify(token, process.env.JWT_SECRET)
    const id= await utils.currUser(request);
    const posts= await prisma.post.findMany({
            where:{
                userId:id
            },
            include:{
                postlikes:true,
                comments:{
                    orderBy:{
                        createdAt:"asc",
                    },
                    select:{
                        id:true,
                        message:true,
                        createdAt:true,
                        updatedAt:true,
                        postId:true,
                        parentId:true,
                        likes:true,
                        user:{
                            select:{
                                id:true,
                                name:true
                            }
                        },
                        _count:{
                            select:{
                                likes:true
                            }
                        }
                    }
                },
            }
    })
    if(posts){
        reply.status(STANDARD.SUCCESS).send({ data: posts })
        return 
    }else{
        reply.status(200)
        reply.send({error:"Not Have any post"})
        return
    }
}
export const postLike= async(request:DPostRequest,reply:FastifyReply)=>{
    const postId=request.body.id;
    const userId=await utils.currUser(request);
    const data={postId,userId}
    const like =await prisma.postLike.findUnique({
        where:{
            userId_postId:data
        }
    })
    if(!like){
        await prisma.postLike.create({data})
        reply.status(STANDARD.SUCCESS).send({addLike:true})
        return 
    }else{
        await prisma.postLike.delete({
            where:{
               userId_postId:data
            }
        })
        reply.status(STANDARD.SUCCESS).send({addLike:false})
        return
    }

}