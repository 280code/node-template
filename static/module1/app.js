/*
 * @Author: your name
 * @Date: 2021-10-14 13:13:47
 * @LastEditTime: 2021-10-14 13:23:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \static\app.js
 */
const Koa = require('koa2');
const app = new Koa();
const port = 5050;
const static = require('koa-static');
const path = require('path');
app.use(static(path.join(__dirname+'/static')))
app.listen(port,()=>{
    console.log("server is runing")
})