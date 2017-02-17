module.exports = {
    entry: './source/index.js',
    output: {
        path: '/public/',
        filename: "index.js" 
    },
    module: {
        loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: { presets:['react'] }
        },
        {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }
        ]
    }
};
