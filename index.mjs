import { createServer } from 'http'
import { app } from './app/app.mjs'

const {
  HOST = 'localhost',
  PORT = 3000
} = process.env

createServer(app).listen(PORT, HOST)
