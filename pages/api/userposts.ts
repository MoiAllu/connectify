import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/Utilities/auth";

export default validateRoute( async(req:any,res:any,user:any)=>{
    const post= await prisma.post.findMany({
        where:{
            userId:user.id
        },
        include:{
            author:true,
            comments:true,
        }
    })
    res.json(post)
})