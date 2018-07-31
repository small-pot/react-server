module.exports=function(){
    require('css-modules-require-hook')({
        extensions: ['.css','.less'],
        camelCase: true,
        generateScopedName: '[name]__[local]___[hash:base64:5]'
    })
    require('asset-require-hook')({
        extensions: ['jpg', 'png', 'gif'],
        limit: 8192
    })
}