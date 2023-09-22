import prisma from "../../../lib/prisma";

export default async (req: any, res: any) => {

    try{
        if (!req.body) return res.status(400).json({error:"UnAuthorized"});   
        const conversations= await prisma.conversation.findMany({
            where:{ 
               usersIds:{
                     has:req.body
               }
            },
            include:{
                users:true,
                message:{
                    include:{
                        seen:true,
                        users: true,
            
                    }
                }
            }
        })
        res.json(conversations)
    }
    catch{
        res.status(500).json({error:"Something went wrong"})
    }

};