const mysql1 = require('mysql');
const config = require('config')

const pool = mysql1.createPool({
  connectionLimit:10,
  host:config.get('mysql.host'),
  port:config.get('mysql.port'),
  user:config.get('mysql.userName'),
  password:config.get('mysql.passWord'),
  database:config.get('mysql.dbName')
})

const db={
  query:function(sql,cb){
    if(!sql) return cb;
    pool.query(sql,function(err,rows,fields){
      if(err){
        console.log(err);
        return  cb(err,null,null)
      }
      cb(null,rows,fields)
    })
  }
}
