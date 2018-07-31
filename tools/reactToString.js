const {renderToStaticMarkup} =require('react-dom/server')
const React =require('react')
const { match, RouterContext } =require('react-router')
const routes=require('../source/router/routes')
const pathList=require('../source/router/path')
const url=require('url')
const Provider=require('../source/js/components/common/provider')

module.exports=function (req,res,tpl) {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            res.status(200)
            const item=pathList[url.parse(req.url).pathname]
            const data=require('./getSyncData.js')(item.path)
            tpl =  tpl
                .replace('{{title}}',item.title)
                .replace('{{description}}',item.description)
                .replace('{{keywords}}',item.keywords)
                .replace('</head>',`<script>window.INIT=${JSON.stringify(data)}</script></head>`)
                .replace('<!--react-entry-->', renderToStaticMarkup(
                    <Provider data={data}><RouterContext {...renderProps} /></Provider>
                ))
            console.log(tpl)
            res.send(tpl);
        } else {
            res.status(404).send('not found');
        }
    })
}