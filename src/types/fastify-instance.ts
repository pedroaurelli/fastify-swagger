import { FastifyBaseLogger, FastifyInstance as FastifyInstanceDefault, RawReplyDefaultExpression, RawRequestDefaultExpression, RawServerDefault } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'

export type FastifyInstance = FastifyInstanceDefault<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  FastifyBaseLogger,
  ZodTypeProvider
>
