import prisma from "../../../lib/prisma";

export default async (req: any, res: any) => {

    const { userId } = req.body;
    try{
        if (!userId) return res.status(400).json({error:"UnAuthorized"});   
        const conversations= await prisma.conversation.findMany({
            where:{ 
               usersIds:{
                     has:userId
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