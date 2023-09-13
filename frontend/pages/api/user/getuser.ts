import prisma from "../../../lib/prisma";
import { validateRoute } from "../../../lib/Utilities/auth";

export default validateRoute( async(req:any,res:any,user:any)=>{
    try{
        const userId=req.body;
        if(!userId) return res.status(400).json({error:"UnAuthorized"});
        const user= await prisma.user.findUnique({
            where:{
                id:userId
            },
            include:{
                posts:{

                    include:{
                    postlikes:true,
                    author:true,
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
                                    name:true,
                                    profilePicture:true,
                                }
                            },
                            _count:{
                                select:{
                                    likes:true
                                }
                            }
                        }
                    },
                    },
                },
            }
        })
        if(!user) return res.status(400).json({error:"Invalid Id"});
        return res.json(user);

    }catch{
        return res.status(500).json({error:"Something went wrong"});
    }
})



    