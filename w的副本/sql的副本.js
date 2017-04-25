/**
 * Created by dllo on 2017/4/25.
 */

//引入sql模块
var mysql = require('mysql');
//options创建连接的参数
var options = {
    user: 'root',//连接数据库的用户
    password: '123456',//用户的密码
    host: 'localhost',//链接数据库的主机名
    port: 3306,//端口号 默认为3306
    database: 'html5',//需要打开的数据库
    charset: 'utf8'//打开数据库的编码格式
};
//创建连接器

var connection = mysql.createConnection(options);

//链接器建立链接
connection.connect(function (error) {
    if (error) {
        console.log('链接失败');
        console.log(error);
    } else {
        console.log('链接成功');


    }
});

//格式化sql语句,通过node.js访问mysql时,编写正常的sql语句非常麻烦
//因此mysql定义了格式化sql语句的函数
//通过 sql语句和对象可以直接生成最终的sql

var formatSQL = 'select * from ?? where ?? = ?';
var name = '文冠龙';
var sets = ['h161217','name',name];
var final =    mysql.format(formatSQL,sets);
console.log(final);



//delete删除

var deleteSql = 'delete from h161217 where stuid = 4';
connection.query(deleteSql,function (error) {
    handleError(error,'删除');
});



//update 更新
var updateSQL = 'update h161217 set name = "小" where stuid = 5';
connection.query(updateSQL,function (error) {
    handleError(error,'更新');
});




var selectSQL = 'select * from h161217';
// var insert = 'insert into h161217 (name,age) values ("小秦",30)';
//集合的插入一条数据的方式 set ?
var insert1 = 'insert into h161217 set ?';

//
// var stu = {
//     name: '丁',
//     age: 18
// }
//一般查询为复数,results是个数组
connection.query(selectSQL, function (error, results) {
    handleError(error, '查询', results);
});

// connection.query(insert1, stu, function (error) {
//     handleError(error, '插入');
// });
//关闭连接的方式1
// connection.end(function (error) {
//     if(error){
//         console.log('关闭成功');
//         console.log(error);
//     }else {
//         console.log('关闭成功');
//     }
// });



//关闭连接的方式2
// connection.destroy();
//sql语句插入写法


function handleError(error, operation, results) {
    if (error) {
        console.log(operation + '失败');
        console.log(error);
    } else {
        console.log(operation + '成功');
        if (results) {
            console.log(results);
        }
    }
}

