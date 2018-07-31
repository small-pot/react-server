require('./tools/serverTools')()
const path = require("path")
const express = require("express")
const proxy = require('http-proxy-middleware');
const reactToString=require('./tools/reactToString')
const app = express(),
    PORT = 8888 // 设置启动端口
const fs=require('fs');
const tpl=fs.readFileSync('./dist/template.html','utf-8')
app.use(express.static(path.join(__dirname,'dist')))
app.use(proxy('/mnst', { target: `http://localhost:8002` }));
app.use((req, res) => {
    reactToString(req,res,tpl)
})

app.listen(PORT,function(){
    console.log("成功启动：localhost:"+ PORT)
})