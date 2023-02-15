import { FastifyInstance } from 'fastify'
import * as controllers from '../controllers'
import { checkValidRequest, checkValidUser } from '../helpers/auth'
import { createCommentSchema, deleteCommentSchema, getAllCommentSchema, getUserCommentSchema, likeComment } from '../schema'

async function commentRouter(fastify: FastifyInstance) {
    fastify.decorateRequest('authUser', '')
    fastify.route({
        method: 'POST',
        url: '/create',
        schema: createCommentSchema,
        preHandler: [checkValidRequest],
        // preHandler: [checkValidRequest, checkValidUser],
        handler: controllers.createComment
    })
    fastify.route({
        method: 'POST',
        url: '/delete',
        schema: deleteCommentSchema,
        preHandler: [checkValidRequest],
        // preHandler: [checkValidRequest, checkValidUser],
        handler: controllers.deleteComment
    })
    fastify.route({
        method: 'POST',
        url: '/like',
        schema: likeComment,
        preHandler: [checkValidRequest],
        // preHandler: [checkValidRequest, checkValidUser],
        handler: controllers.commentLike
    })
}

export default commentRouter
