import prisma from "../../lib/prisma";

export default async (req: any, res: any) => {
    try{
        const users= await prisma.user.findMany({
            select:{
                id:true,
                name:true,
                email:true,
                profilePicture:true,
                friends:true
            }
        })
        res.json(users)
    }catch{
        res.status(500).json({error:"Something went wrong"})

    
    }
}