import express from 'express'
import respond from 'express-respond'
import body from 'body-parser'
import cookie from 'cookie-parser'

export const app = express()
  .use(respond)
  .use(body)
  .use(cookie)
