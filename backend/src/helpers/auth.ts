import { FastifyReply } from 'fastify'
import { prisma} from '../helpers/utils'
import { ERROR400, ERROR401 } from './constants'
import {IUserRequest } from 'interfaces'
import * as JWT from 'jsonwebtoken'
const jwt =require("jsonwebtoken")

// export const checkValidRequest = (
//   request: FastifyRequest,
//   reply: FastifyReply,
//   done,
// ) => {
//   try {
//     let token = request.headers.authorization
//     token = token.replace('Bearer ', '')
//     if (token) {
//       JWT.verify(token, process.env.APP_JWT_SECRET, (err, decoded) => {
//         if (err) {
//           return reply.code(ERROR400.statusCode).send(ERROR400)
//         }
//         done()
//       })
//     } else {
//       return reply.code(ERROR400.statusCode).send(ERROR400)
//     }
//   } catch (e) {
//     return reply.code(ERROR400.statusCode).send(ERROR400)
//   }
// }
export const checkValidRequest = async(
  request: IUserRequest,
  reply: FastifyReply,
) => {
  try {
    const token = request.cookies.CONNECTIFY_ACCESS_TOKEN;
    if (token) {
      const { id } = await jwt.verify(token, process.env.JWT_SECRET)
      const user=await prisma.user.findUnique({
        where:{
          id
        }
      })
      if(!user){
        return reply.code(ERROR401.statusCode).send(ERROR401);
      }
      return
    } else {
      return reply.code(ERROR400.statusCode).send(ERROR400)
    }
  } catch (e) {
    console.log(e)
    return reply.code(ERROR400.statusCode).send(ERROR400)
  }
}

export const checkValidUser = async (
  request: IUserRequest,
  reply: FastifyReply,
) => {
  try {
    let token = request.headers.authorization
    token = token.replace('Bearer ', '')

    if (!token) {
      return reply.code(ERROR401.statusCode).send(ERROR401)
    }

    const user: any = JWT.verify(token, process.env.APP_JWT_SECRET)

    if (!user.id) {
      return reply.code(ERROR401.statusCode).send(ERROR401)
    }

    const userData = await prisma.user.findUnique({ where: { id: user.id } })

    if (!userData) {
      return reply.code(ERROR401.statusCode).send(ERROR401)
    }
    request.authUser = userData;
    return
  } catch (e) {
    return reply.code(ERROR401.statusCode).send(e)
  }
}

