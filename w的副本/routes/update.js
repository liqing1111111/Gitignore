/**
 * Created by dllo on 2017/4/25.
 */
var express = require('express');
//创建路由
// 通过express创建路由
var router = express.Router();
var mysql = require('mysql');
var handler = require('./handlerSQLError');
var options = {
    connectionLimit:1,
    host:'localhost',
    port:3306,
    user:'root',
    password:'123456',
    database:'html5',
    charset:'utf8'
};


var pool = mysql.createPool(options);

var router = express.Router();
//3.路由访问,回调函数
router.get('/',function (req,res) {

    var passwd =  req.body.password;

    console.info(passwd);


    pool.getConnection(function (error,connection) {
        connection.query("update h161217 set password = '"+passwd+"'",function (error,results) {
            handler(error,'修改',results);
            if (results.length){
                res.render('loginSuccess',{re:'登录成功'});
 }else {
                res.send('修改失败');
            }
            connection.release();
        });
    });


});
//模块导出 路由
module.exports = router;
