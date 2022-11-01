import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/Utilities/auth";

export default validateRoute( async(req:any,res:any,user:any)=>{
    const post= await prisma.post.findMany({
    
        where:{
            userId:user.id
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
    res.json(post)
})