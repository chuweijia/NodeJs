var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');//中间件的用法
var users = require('./routes/users');
var mongoose = require('mongoose');
var session = require('express-session');//不确定是否安好
var multer = require('multer');

global.dbHandel = require('./database/dbHandel');
global.db = mongoose.connect("mongodb://localhost:27017/db2",function(err,db){
  if(err){
    console.log("connection fail!!");
  }
  else{
    console.log("connecition ok!!!");
  }
});





var app = express();

app.use(session({ //基于express-session的..
    secret: 'secret',
    cookie:{ 
        maxAge: 1000*60*30
    }
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine("html",require("ejs").__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());  //这句有问题 已解决
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){ 
    res.locals.user = req.session.user;   // 从session 获取 user对象
    var err = req.session.error;   //获取错误信息
    delete req.session.error;
    res.locals.message = "";   // 展示的信息 message
    if(err){ 
        res.locals.message = '<div class="alert alert-danger" style="margin-bottom:20px;color:blue;">'+err+'</div>';
    }
    next();  //中间件传递
});



app.use('/', routes);//app.use是中间件的用法
// app.use('/c', routes);
app.use('/users', users);
app.use('/login',routes); 
app.use('/register',routes); // 即为为路径 /register 设置路由
app.use('/home',routes); // 即为为路径 /home 设置路由
app.use("/logout",routes); // 即为为路径 /logout 设置路由
app.use("/PuBu",routes);
app.use("/Single",routes);








// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});






//关于数据库1







module.exports = app;


// 连接数据库 
// var MongoClient = require('mongodb').MongoClient;
// MongoClient.connect("mongodb://chu1:123@localhost:27017/db1",{
//   db:{
//     w:1,native_parser:false
//   },
//   server:{
//     poolSize:5,
//     socketOptions:{
//       connectionTimeoutMS:500
//     },
//     auto_reconnect:true//超时重连
//   },
//   replSet:{},
//   mongos:{},
// },function(err,db){
//   if(err){
//     console.log("connection fail!!");
//   }
//   else{
//     console.log("connecition ok!!!");
//     db.logout(function(err,result){
//       if(!err){
//         console.log("Logout!!!");
//       }
//       db.close();
//       console.log("connection closed!!");
//     });
//   }

// });


// //关于数据库2
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(multer());
// app.use(cookieParser());

// var session = require('express-session');

// var app = express();
// app.use(session({ 
//     secret: 'secret',
//     cookie:{ 
//         maxAge: 1000*60*30;
//     }
// }));

// app.use(function(req,res,next){ 
//     res.locals.user = req.session.user;   // 从session 获取 user对象
//     var err = req.session.error;   //获取错误信息
//     delete req.session.error;
//     res.locals.message = "出错啦";   // 展示的信息 message
//     if(err){ 
//         res.locals.message = '<div class="alert alert-danger" style="margin-bottom:20px;color:red;">'+err+'</div>';
//     }
//     next();  //中间件传递
// });