const api = module.exports = require('express').Router()
const presidents = require('./presidents');
// import products from './products';
api
  .use('/presidents', presidents)
// No routes matched? 404.
api.use((req, res) => res.status(404).end())
