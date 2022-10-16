import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/Utilities/auth";

export default validateRoute( async(req:any,res:any,user:any)=>{
    const posts= await prisma.post.findMany({
        include:{
            author:true,
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
                    user:{
                        select:{
                            id:true,
                            name:true
                        }
                    }
                }
            },
        }
    })
    res.json(posts)
})