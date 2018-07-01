'use strict'

module.exports = class collTaskListController{

  static async getList(ctx){
    ctx.body='collTaskListController'
  }

  static async getDetails(ctx){
    ctx.body='getDetails'
  }
}
