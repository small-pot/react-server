const {routes,mockTpl,port}=require('../nei.11000.73eeeb4a6af8870d920acf3fb2f1de98/server.config');
const fs=require('fs')

module.exports=function (url) {
    const u=`${mockTpl+url}.json`
    if(fs.existsSync(u)){
        return require(u)
    }
    return {}
}