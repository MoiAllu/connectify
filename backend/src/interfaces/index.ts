
import { FastifyRequest } from 'fastify';
import { Comment, Post, Prisma, User } from '@prisma/client';

export interface IUserRequest extends FastifyRequest {
    body: Prisma.UserCreateInput
    authUser: User
}
export interface IPostRequest extends FastifyRequest {
    body:Prisma.PostCreateInput
    authUser: User
}
export interface DPostRequest extends FastifyRequest {
    body:Post
    authUser: User
}
export interface ICommentRequest extends FastifyRequest {
    body:Comment
    authUser: User
}
export interface IUserAuthToken {
    id: number;
    email: string;
}
export interface IGetPresign {
    fileName: string;
}
export interface IPutPresign {
    userId: number;
    fileName: string;
}