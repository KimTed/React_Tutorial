module.exports = {
    entry: './jsx/app.jsx',
    output: {
        path: __dirname + '/js/',
        filename: 'bundle.js'
    },
    stats: {
        colors: true,
        reasons: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_module)/,
                loader: 'babel-loader'
            }
        ]
    }
}