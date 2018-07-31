const path = require('path');
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer')
const isPro = process.env.NODE_ENV === 'production';


const cssLoader = [
    {
        loader: 'css-loader',
        options: {
            minimize: isPro
        }
    },
    {loader: "postcss-loader"}
];

function use(loaders) {
    return [isPro ? MiniCssExtractPlugin.loader : {loader: 'style-loader'}, ...loaders]
}

module.exports = {
    entry: {app:'./source/index.js'},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'source'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.join(__dirname, 'source')],
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                include: [path.join(__dirname, 'source')],
                use: use(cssLoader)
            },
            {
                test: /\.less$/,
                include: [path.join(__dirname, 'source')],
                use: use([...cssLoader, {loader: "less-loader"}])
            },
            {
                //文件加载器，处理文件静态资源
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=./fonts/[name].[ext]'
            },
            {
                //图片加载器，可以将较小的图片转成base64，减少http请求，将小于8192byte的图片转成base64码
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'img/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {postcss: [autoprefixer()]}
        }),
        new HtmlWebpackPlugin({
            filename: 'template.html',
            template: './source/template.html'
        })
    ]
};