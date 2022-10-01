import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/Utilities/auth";

export default validateRoute( async(req:any,res:any,user:any)=>{
    const posts= await prisma.post.findMany({
        include:{
            author:true,
            comments:true,
        }
    })
    res.json(posts)
})