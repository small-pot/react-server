import pathList from './path'
if (typeof require.ensure !== 'function') {
    require.ensure = function(dependencies, callback) {
        callback(require)
    }
}
export default Object.keys(pathList).map((key)=>{
    const item=pathList[key];
    return {
        path:key,
        getComponents(location, callback) {
            require.ensure([], function (require) {
                callback(null, require(`../js/entry/${item.path}.js`))
            })
        }
    }
})