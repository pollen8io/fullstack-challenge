import express from 'express'
import respond from 'express-respond'
import bp from 'body-parser'
import cookie from 'cookie-parser'
import nunjucks from 'nunjucks'
import router from './router.mjs'

export const app = express()
  .set('view engine', 'njk.html')
  .set('views', 'app/views')
  .set('trust proxy', true)
  .set('x-powered-by', false)
  .use(respond)
  .use(bp.json())
  .use(bp.urlencoded({ extended: true }))
  .use(cookie)
  .use(router)
  .use(({ res }) => res.notFound())
  .use((_req, res, _next, e) => res.error(e))

// In case you decide to add server side rendered pages, such as
// a login page.
nunjucks.configure('views', {
  autoescape: true,
  express: app
})
