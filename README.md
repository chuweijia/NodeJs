#NodeJs 安装篇
## 安装环境(Linux)
GCC 4.2 +  
G++ 4.2 +  
Python 2.6 / 2.7  
GUN MAKE 3.81 +  

## EXPRESS 
`npm install -g express-generator`或者`npm install express`  
`npm init`  

## EXPRESS 初始化项目  
`express -e myproject`  
![image](http://7xsk2q.com1.z0.glb.clouddn.com/N-5.png)  
管理员权限 是在win10的搜索下（ctrl+s）再ctrl和shift同时按下后再enter后运行的  

## NPM START  
`npm start`  
>当即使安装了ejs 模块依旧报错,则在当前目录下  `npm install`  
  
`localhost://3000`  
## MongoDB  
![image](http://7xsk2q.com1.z0.glb.clouddn.com/M-1.png)  
>安装mongo的时候 需要在这里新建一个`data包` 否则会出现`运行时闪退`的情况  

![image](http://7xsk2q.com1.z0.glb.clouddn.com/M-1.png)  
`mongod.exe`先连接  
`mongo.exe`后运行 `user admin`数据库admin 隐藏的默认的  
## Mongo的常用操作  
![image](http://7xsk2q.com1.z0.glb.clouddn.com/M-4.png)  
建立数据库管理者...??数据库系统下`查找所有users`  
![image](http://7xsk2q.com1.z0.glb.clouddn.com/M-5.png)  
选择 数据库 同mysql..  
![image](http://7xsk2q.com1.z0.glb.clouddn.com/M-6.png)  
`略`  
![image](http://7xsk2q.com1.z0.glb.clouddn.com/M-01.png)  
数据表是以`collection集合`形式存储的  
![image](http://7xsk2q.com1.z0.glb.clouddn.com/M-02.png)  
`t2是某个数据库中的数据表 他们各自有规则建立数据表`  
![image](http://7xsk2q.com1.z0.glb.clouddn.com/M-03.png)  
`有一些有权限的属性不能乱加`  
![image](http://7xsk2q.com1.z0.glb.clouddn.com/M-04.png)  
`由于版本问题而更新的操作 坑..`  
![image](http://7xsk2q.com1.z0.glb.clouddn.com/M-7.png)  
相当于原生写法  
### multer bug
![image](http://7xsk2q.com1.z0.glb.clouddn.com/M-9.png)  
上图解决了 `multer`版本的问题 导致中间件`app.use(multer())`无法使用的问题  
![image](http://7xsk2q.com1.z0.glb.clouddn.com/M-10.png)  
问题解决  
### 以Mongoose (即mongodb的框架)连数据库  
![image](http://7xsk2q.com1.z0.glb.clouddn.com/M-8.png)  
相当于`字串`写法











