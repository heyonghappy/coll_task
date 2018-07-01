const sequelize= require('sequelize');
const config = require('config')

const MySequelize = new sequelize(config.get('mysql.dbName'),config.get('mysql.userName'),config.get('mysql.passWord'),{
  host:config.get('mysql.host'),
  dialect:'mysql',
  pool:{
    max:10,
    min:0,
    idel:30000
  }
})

module.exports = MySequelize;
