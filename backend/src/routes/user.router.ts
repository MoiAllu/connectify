import { FastifyInstance } from 'fastify'
import { loginSchema, logoutSchema, signupSchema } from '../schema'
import * as controllers from '../controllers'
import { checkValidRequest, checkValidUser } from '../helpers/auth'
async function userRouter(fastify: FastifyInstance) {
  fastify.decorateRequest('authUser', '')

  fastify.route({
    method: 'POST',
    url: '/login',
    schema: loginSchema,
    handler: controllers.login,
  })

  fastify.route({
    method: 'POST',
    url: '/signup',
    schema: signupSchema,
    handler: controllers.signUp,
  })
  fastify.route({
    method: 'POST',
    url: '/logout',
    schema: logoutSchema,
    preHandler: [checkValidRequest],
    handler: controllers.logout,
  })
}

export default userRouter
