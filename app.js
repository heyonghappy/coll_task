'use strict'

const Koa = require('koa'),
      Router = require('koa-router'),
      logger = require('koa-logger'),
      onError= require('koa-onerror');

const routerConfig= require('./router-config')


const app = module.exports = new Koa()
console.log('start coll_task')

app.use(routerConfig.collTask.routes())
app.use(routerConfig.collTask.allowedMethods())

onError(app);//koa统一监听错误
app.listen(3000)
