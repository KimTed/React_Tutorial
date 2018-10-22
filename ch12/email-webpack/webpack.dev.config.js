const webpack = require('webpack');

module.exports={
    entry: [
        './jsx/app.jsx',
        'webpack-dev-server/client/?http://localhost:8080'
    ],
    output: {
        publicPath: 'js/',
        path: __dirname + '/js/',
        filename: 'bundle.js'
    },
    devtool: '#sourcemap',
    stats: {
        colors: true,
        reasons:true
    },
    module: {
        loaders: [
            {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
            },
            {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loaders: ['react-hot-loader','babel-loader']
            }
        ]
    },
    devServer: {
        hot: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
}