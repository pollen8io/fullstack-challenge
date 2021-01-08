import express from 'express'

export default express.Router()
  .get('/login', ({ res }) => res.render('login'))
