import { FastifyInstance } from 'fastify'
import { createPostSchema,getAllPostsSchema, getUserPostsSchema,deletePostSchema, likePost } from '../schema'
import * as controllers from '../controllers'
import { checkValidRequest, checkValidUser } from '../helpers/auth'

async function postRouter(fastify: FastifyInstance) {
    fastify.decorateRequest('authUser', '')
    fastify.route({
        method: 'POST',
        url: '/create',
        schema: createPostSchema,
        preHandler: [checkValidRequest],
        // preHandler: [checkValidRequest, checkValidUser],
        handler: controllers.createPost
    })
    fastify.route({
        method: 'POST',
        url: '/delete',
        schema: deletePostSchema,
        preHandler: [checkValidRequest],
        // preHandler: [checkValidRequest, checkValidUser],
        handler: controllers.deletePost
    })
    fastify.route({
        method: 'POST',
        url: '/allposts',
        schema: getAllPostsSchema,
        preHandler: [checkValidRequest],
        // preHandler: [checkValidRequest, checkValidUser],
        handler: controllers.getAllPosts
    })
    fastify.route({
        method: 'POST',
        url: '/userposts',
        schema: getUserPostsSchema,
        preHandler: [checkValidRequest],
        // preHandler: [checkValidRequest, checkValidUser],
        handler: controllers.getUserPost
    })
    fastify.route({
        method: 'POST',
        url: '/like',
        schema: likePost,
        preHandler: [checkValidRequest],
        // preHandler: [checkValidRequest, checkValidUser],
        handler: controllers.postLike
    })
}

export default postRouter
