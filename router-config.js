const mySequelize = require('./db/ormconfig')
const Router = require('koa-router')

const {collTaskList} = require('./controller')

const apiRouter = new Router({ prefix: '/api' })



exports.collTask = apiRouter
   .get('/index',collTaskList.getList)
