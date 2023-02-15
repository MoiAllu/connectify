import * as bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
import { DPostRequest, ICommentRequest, IPostRequest, IUserRequest } from 'interfaces';
export const prisma = new PrismaClient()
const jwt=require('jsonwebtoken')

export const utils = {
  isJSON: (data: string) => {
    try {
      JSON.parse(data)
    } catch (e) {
      return false
    }
    return true
  },
  getTime: () => {
    const date = new Date()
    const time = date.getTime()
    return time
  },
  genSalt: (saltRounds, value) => {
    return new Promise((resolve, reject) => {
      const salt = bcrypt.genSaltSync(saltRounds)
      bcrypt.hash(value, salt, (err, hash) => {
        if (err) reject(err)
        resolve(hash)
      })
    })
  },
  compareHash: (hash, value) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(value, hash, (err, result): boolean | any => {
        if (err) reject(err)
        resolve(result)
      })
    })
  },
  healthCheck: (): Promise<void> => {
    return new Promise((resolve, reject) => {
      prisma.$queryRaw`SELECT 1`
        .then(() => {
          resolve()
        })
        .catch((e) => {
          reject(e)
        })
    })
  },
  currUser:async(request:IUserRequest|IPostRequest|DPostRequest|ICommentRequest)=>{
    const token = request.cookies.CONNECTIFY_ACCESS_TOKEN;
    const { id } = await jwt.verify(token, process.env.JWT_SECRET)
    return id;
  }
}