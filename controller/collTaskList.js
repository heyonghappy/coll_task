'use strict'

module.exports = class collTaskListController{

  static async getList(ctx){
    ctx.render('index',{title:'首页'})
  }

  static async getDetails(ctx){
    ctx.body='getDetails'
  }
}
