/**
 * Created by dllo on 2017/4/24.
 */
//创建路由的步骤
//    引入express
var express = require('express');
//创建路由
// 通过express创建路由
var router = express.Router();
//3.路由访问,回调函数
router.post('/',function (req,res) {
    var  use = req.body.username;
    var passwd =  req.body.password;

    console.info(use);
    console.info(passwd);


    pool.getConnection(function (error,connection) {
        connection.query("select * from user where username ='" + use +"' and password = '"+passwd+"'",function (error,results) {
            handler(error,'查询',results);
            if (results.length){
                if(passwd == results[0].password){
                    res.render('loginSuccess',{re:'登录成功'});
                }else {
                    res.render('loginSuccess',{re:'密码错误'});
                }

            }else {
                res.send('登录失败');
            }
            connection.release();
        });
    });


});