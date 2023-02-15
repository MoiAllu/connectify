import { FastifyReply } from 'fastify'
import { IUserRequest } from '../interfaces'
import { prisma } from '../helpers/utils'
import { ERRORS, handleServerError } from '../helpers/errors'
import * as JWT from 'jsonwebtoken'
import { utils } from '../helpers/utils'
import { ERROR400, STANDARD } from '../helpers/constants'
const bcrypt = require('bcrypt')
const cookie =require("cookie");

export const login = async (request: IUserRequest, reply: FastifyReply) => {
  try {
    const { email, password } = request.body
    const user = await prisma.user.findUnique({ where: { email: email } })
    if (!user) {
        reply.code(ERROR400.statusCode).send(ERRORS.userNotExists)
    }
    const checkPass = await utils.compareHash(user.password, password)
    if (user && checkPass) {
      const token = JWT.sign(
        {
          id: user.id,
          email: user.email,
          time: Date.now(),
        },
        process.env.JWT_SECRET,
        { expiresIn: '8h' },
      )
      delete user.password
      reply
      .setCookie(process.env.ACCESS_TOKEN, token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      })
      .code(STANDARD.SUCCESS).send({
        token,
        user,
      })
    
    }
      reply.code(ERROR400.statusCode).send(ERRORS.userCredError)
  } catch (err) {
    handleServerError(reply, err)
  }
}

export const signUp = async (request: IUserRequest, reply: FastifyReply) => {
  try {
    const salt = bcrypt.genSaltSync()
    const { name, email, password } = request.body

    // Checks
    const user = await prisma.user.findUnique({ where: { email: email } })
    if (user) {
      reply.code(409).send(ERRORS.userExists)
    }

    if (password.length < 7) {
      reply.code(400).send(ERRORS.passwordLength)
    }

    // Create
    const hashPass = await utils.genSalt(10, password)
    const createUser = await prisma.user.create({
      data: {
        name,
        email,
        password: String(hashPass),
      },
    })
    const token = JWT.sign(
      {
        id: createUser.id,
        email: createUser.email,
        time: Date.now(),
      },
      process.env.JWT_SECRET,
      { expiresIn: '8h' },
    )
    delete createUser.password
    // set cookie header

    reply
      .setCookie(process.env.ACCESS_TOKEN, token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      })
      .code(STANDARD.SUCCESS)
      .send({
        token,
        user: createUser,
      })
  } catch (err) {
    handleServerError(reply, err)
  }
}
export const logout=async(request:IUserRequest,reply:FastifyReply)=>{
  reply.header('Set-Cookie', [
    cookie.serialize(process.env.ACCESS_TOKEN, "", {
      maxAge: -1,
      path: '/',
    }),
   cookie.serialize(process.env.ACCESS_TOKEN, "", {
      maxAge: -1,
      path: '/',
    }),
  ]);
  reply.status(STANDARD.SUCCESS).send({logout:"Successfully"})
  reply.redirect("/")
  return
}