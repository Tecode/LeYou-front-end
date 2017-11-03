
# 基于vue的博客项目
![image](https://admin.soscoon.com/image/mysite-time1509679684444.png)
## [Demo](https://www.soscoon.com)
## 安装

``` bash

# 安装node模块
npm install # or yarn

# 在开发模式下运行项目 localhost:8080
npm run dev

# 发布正式环境构建项目
npm run build

# 在产品模式下运行项目
npm start

```

## 注意事项
###### 如果要报数据库的错误请将以下代码改为自己的配置，或者删除server.js文件中与数据库有关的代码！！！
```　bash
// 创建mysql数据库连接

const pool  = mysql.createPool({
	host: "你的主机ip地址",
	user: "用户名",
	password: "数据库密码",
	database: "数据库"
});

```
## 图片展示
> * 首页

![image](https://admin.soscoon.com/image/mysite-time1509680270977.png)
> * 用户留言反馈

![image](https://admin.soscoon.com/image/mysite-time1509680347293.png)
> * 小游戏

![image](https://admin.soscoon.com/image/mysite-time1509680388396.png)
> * 内容详情页

![image](https://admin.soscoon.com/image/mysite-time1509680434031.png)

## 技术栈

> 项目地址：http://www.soscoon.com

### 前端

> - vue
> - vue-router
> - vuex
> - axios
> - es6
> - Node(Express作为服务器启动应用)
> - webpack
> - element-ui 1.4.0


### 后端

> - PHP7
> - Laravel5.4
> - JWT(JSON WEB TOKEN)

### 数据库

> - Mysql

### Dillinger编辑器

> - angularJS 1.3.0
> - gulp 3.9.0

## 环境

### 本地开发

> - 操作系统：Windows10
> - 服务器：Apache
> - 代理服务器: nginx
> - 前端服务器：Express

### 线上正式

> - 操作系统：CentOS7
> - 服务器：nginx
> - 前端服务器：Express
