require('./tools/serverTools')()
const path = require("path")
const express = require("express")
const webpack = require("webpack")
const proxy = require('http-proxy-middleware');
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackConfig = require('./webpack.dev.js')
const {routes,mockTpl,port}=require('./nei.11000.73eeeb4a6af8870d920acf3fb2f1de98/server.config');
const reactToString=require('./tools/reactToString')
const app = express(),
    PORT = 9999, // 设置启动端口
    compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, {
    serverSideRender:true,
    //绑定中间件的公共路径,与webpack配置的路径相同
    publicPath: webpackConfig.output.publicPath,
}))
app.use(proxy('/mnst', { target: `http://localhost:${port}` }))
app.use('/static',express.static(path.join(__dirname,'source/static')))
app.use((req, res) => {
    const tpl=compiler.outputFileSystem.readFileSync(path.join(compiler.outputPath,'template.html'),'utf-8')
    reactToString(req,res,tpl)
})
app.listen(PORT,function(){
    console.log("成功启动：localhost:"+ PORT)
})