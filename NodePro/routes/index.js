var express = require('express');
var router = express.Router();





//这个写在app.js还是index.js里面 ..都可以
var users = [
    {name: 'tobi', email: 'tobi@learnboost.com'},
    {name: 'loki', email: 'loki@learnboost.com'},
    {name: 'jane', email: 'jane@learnboost.com'}
];
// router.get('/', function(req, res, next) {
//   console.log("a.html渲染ing");
//   res.render('a', {
//         users: users,
//         title: "aa",
//         header: "wtf"
//     });
//   console.log("a.html渲染成功");
// });

router.get('/', function(req, res, next) {
   if(!req.session.user){ 
        res.locals.user = {"name":""};      
    }
  res.render('index', { title: 'index.html-title' });
});

router.get('/login', function(req, res, next) {
  console.log("登录页渲染ing");
  res.render('login', { title: 'Login.html-title'});
  console.log("登录页渲染成功");
});

router.get('/register', function(req, res, next) {
  console.log("注册页渲染ing");
  res.render('register', { title: 'Register.html-title'});
  console.log("注册页渲染成功");
});
router.get('/PuBu', function(req, res, next) {
  res.render('PuBu', { title: 'PuBu.html-title'});
});

router.get('/Single', function(req, res, next) {
  res.render('Single', { title: 'Single.html-title'});
});

// router.get('/b', function(req, res, next) {
//   console.log("b渲染ing");
//   res.render('b',{title:"bb"});
//   console.log("b渲染成功");
// });
// router.get('/c', function(req, res, next) {
//   console.log("c渲染ing");
//   res.render('c',{title: "cc"});
//   console.log("c渲染成功");
// });
// router.get('/d', function(req, res, next) {
//   console.log("d渲染ing");
//   res.render('d',{title:"dd"});
//   console.log("d渲染成功");
// });

module.exports = router;







var session = require('express-session');//不确定是否安好
var multer = require('multer');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;




// mongoose.connection.on('open',function(){
//   mongoose.connection.db.listCollections().toArray(function(err, names) {
//     console.log("Enter the toArrayFunction!!");
//       if (err) {
//           console.log("wrong！！！！！");
//           console.log(err);
//       }
//       else {
//          console.log("loading");
//           names.forEach(function(e,i,a) {
//               console.log("--->>", e.name);//输出db2数据库下的所有结果
//           });
//       }
//   });
// });

 var chuschema = new Schema({
  name:{type:String,index:1,required:true,unique:true},
  password:{type:String,index:1}
  },{collection:'users2'});

 exports.chuschema = chuschema;
 var mod = mongoose.model("mod",chuschema);//Schema编译成可用的model
 var mod2 = mongoose.model("mod");//具有必要的模块
 mongoose.connection.once("open",function(){
 console.log("open 状态！！！");
    
//     增加
//     var newmod1 = mod2({name:"TestNam",password:"TestPsw"});//模块式的插入
//     var newmod2 = {
//       name:"TstNam1",
//       password:"TstPsw1"
//     };
//     mod2.create([newmod2],function(err,arguments){
//       if(err){
//         console.log("添加失败！！！！");
//       }
//       else{
//         console.log("新增加的元素是");
//         for(var i = 0 ;i <arguments.length;i++){
//           console.log(arguments[i]);
//         }
//       }
//     });

// 查找
//     var query = mod2.count();
//     query.where("usernam").in(["unam"]);//不加in 不报错
//     query.exec(function(err,count){
//       console.log("查询到结果的数量是");
//       console.log(count);//1
//     });
//     query.find().sort({usernam:1,password:-1});
//     query.exec(function(err,docs){
//       console.log("上述结果的结果集对象是");
//       for(var i in docs){
//         console.log(JSON.stringify(docs[i]));//指ajax json过来的数据吗 ？
//       }
//     });

 });

//login路径
router.route("/login").get(function(req,res){    // 到达此路径则渲染login文件，并传出title值供 login.html使用
    res.render("login",{title:'User Login'});
}).post(function(req,res){   
    console.log("login页面渲染完毕");
                     // 从此路径检测到post方式则进行post数据的处理操作
    //get User info
     //这里的User就是从model中获取user对象，通过global.dbHandel全局方法（这个方法在app.js中已经实现)
     
    var uname = req.body.uname;                //获取post上来的 data数据中 uname的值
    mod2.findOne({name:uname},function(err,doc){   //通过此model以用户名的条件 查询数据库中的匹配信息
        if(err){                                         //错误就返回给原post处（login.html) 状态码为500的错误
            res.send(500);
            console.log(err);
        }else if(!doc){
            console.log("chu-用户名不存在");                                //查询不到用户名匹配信息，则用户名不存在
            req.session.error = '用户名不存在';
            res.send(404);                            //    状态码返回404
           // res.redirect("/");
        }else{ 
            if(req.body.upwd != doc.password){    
            console.log("chu-密码错误") //查询到匹配用户名的信息，但相应的password属性不匹配
                req.session.error = "密码错误";
                res.send(404);
                // res.redirect("/login");
            }else{                                     //信息匹配成功，则将此对象（匹配到的user) 赋给session.user  并返回成功
                req.session.user = doc;
                res.send(200);
                // res.redirect("/");
            }
        }
    });
});


//register
router.route("/register").get(function(req,res){   
    res.render("register",{title:'Chu register'});
}).post(function(req,res){ 
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    mod2.findOne({name: uname},function(err,doc){ 
        console.log("register渲染成功");
        if(err){ 
            res.send(500);
            req.session.error =  '网络异常错误！';
            console.log(err);
        }else if(doc){ 
            req.session.error = '用户名已存在！';
            res.send(500);
        }else{ 
            mod2.create({                             
                name: uname,
                password: upwd
            },function(err,doc){ 
                 if (err) {
                        res.send(500);
                        console.log(err);
                    } else {
                        req.session.error = '用户名创建成功！';
                        res.send(200);
                    }
                  });
        }
    });
});


//home
router.get("/home",function(req,res){ 
    if(!req.session.user){ 
        res.locals.user = {"name":""};         //到达/home路径首先判断是否已经登录
    }
    res.render("home",{title:'Home'});         //已登录则渲染home页面
});
//logout
router.get("/logout",function(req,res){    
    req.session.user = null;
    req.session.error = null;
    res.redirect("/");
});

