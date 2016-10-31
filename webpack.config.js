module.exports = {
    entry: "./build/scripts/app.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx', '']
    },
    devtool: 'source-map',
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'source-map-loader'
        }],
        loaders: [{
            test: /\.ts(x?)$/,
            loader: 'ts-loader'
        }]
    }
};