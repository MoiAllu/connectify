import { FastifyReply } from 'fastify'
import { ERROR500 } from './constants'

export const ERRORS = {
  invalidToken: new Error('Token is invalid.'),
  userExists: new Error('User already exists'),
  userNotExists: new Error('User not exists'),
  userCredError: new Error('Invalid credential'),
  tokenError: new Error('Invalid Token'),
  passwordLength: new Error('Password must be at least 7 characters'),
}

export function handleServerError(reply: FastifyReply, error: any) {
  return reply.status(ERROR500.statusCode).send(ERROR500)
}
