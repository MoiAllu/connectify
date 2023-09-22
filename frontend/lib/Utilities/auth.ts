import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../lib/prisma";
const jwt = require('jsonwebtoken');

export const validateRoute = (handler:any) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
      const token = req.cookies.CONNECTIFY_ACCESS_TOKEN;
      if (token) {
        let user
        try {
          const { id } = jwt.verify(token, process.env.JWT_SECRET)
          user = await prisma.user.findUnique({
            where: { id },
            include:
            {
              friends: {
                include: {
                  friend: true,
                  user: true
                }
              },
              friendsrequests: {
                include: {
                  friend: true,
                  user: true
                }
              },
              conversations:{
                include:{
                  message:{
                    include:{
                      seen:true,
                      sender:true,
                      users:true  
                    }
                  }
                },
                
              }
            }     
          })
          if (!user) {
            throw new Error('Not real user')
          }
        } catch (error) {
          res.status(401)
          res.json({ error: 'Not Authorizied' })
          return
        }
        //delete user password
        user.password = ""
        return handler(req, res, user)
      }
  
      res.status(401)
      res.json({ error: 'Not Authorizied' })
    }
  }
  
  export const validateToken = (token:any) => {
    const user =  jwt.verify(token, process.env.JWT_SECRET)
    return user
  }