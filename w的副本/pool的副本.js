/**
 * Created by dllo on 2017/4/25.
 */

var mysql = require('mysql');
var handler = require('./routes/handlerSQLError');
var options = {
    connectionLimit:1,
    host:'localhost',
    port:3306,
    user:'root',
    password:'123456',
    database:'html5',
    charset:'utf8'
};
//通过options来创建链接池
var pool = mysql.createPool(options);

//连接池可以直接执行SQL语句
//与connection.query执行相同
// pool.query('select * from h161217',function (error,results) {
//     handler(error,'查询',results);
//     //关闭连接池
//
//     // pool.end(function (error) {
//     //     handler(error,'关闭');
//     // });
// });

//获取链接
//通过连接执行查询
pool.getConnection(function (error,connection) {
    connection.query('select * from h161217',function (error,results) {
       handler(error,'查询',results);
      connection.release();
    });
});
pool.getConnection(function (error,connection) {
    connection.query('select * from h161217',function (error,results) {
        handler(error,'查询',results);
         connection.release();
    });
});
pool.getConnection(function (error,connection) {
    connection.query('select * from h161217',function (error,results) {
        handler(error,'查询',results);
         connection.release();
    });
});

