import express from 'express'

export default express.Router()
  .post('/login', ({ res }) => res.ok())
