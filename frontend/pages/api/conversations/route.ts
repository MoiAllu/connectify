import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
export default async (req :NextApiRequest, res:NextApiResponse) => {
    try{
        const {currentUserId,userId, members, isGroup, name} = req.body;
        if(!currentUserId || !userId || !members || !name){
            return res.status(400).json({error:"Invalid request"});
        }
        if(isGroup && (!members || members.length<2 || !name)){
            return res.status(400).json({error:"Invalid Data"});
        }
        if(isGroup){
            const newConversation = await prisma.conversation.create({
                data:{
                    name,
                    isGroup,
                    users:{
                        connect:[
                            ...members.map((member:any)=>({id:member.id}))
                            ,
                            {
                                id:currentUserId
                            }
                        ]

                    }
                },
                include:{
                    users:true
                }
            });
            return res.json(newConversation);
        }

        const existingConversations = await prisma.conversation.findMany({
            where: {
              OR: [
                {
                  usersIds: {
                    equals: [currentUserId, userId]
                  }
                },
                {
                  usersIds: {
                    equals: [userId, currentUserId]
                  }
                }
              ]
            }
          });
      
          const singleConversation = existingConversations[0];
      
          if (singleConversation) {
            return res.json(singleConversation);
          }
      
          const newConversation = await prisma.conversation.create({
            data: {
              users: {
                connect: [
                  {
                    id: currentUserId
                  },
                  {
                    id: userId
                  }
                ]
              },
                usersIds: [currentUserId, userId]
            },
            include: {
              users: true,
            }
          });
        return res.json(newConversation);

    }catch{
        return res.status(500).json({error:"Something went wrong"});
    } 
};