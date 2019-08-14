const path = require('path');

module.exports = {
    entry: ['./Scripts/es6/main.js'],
    output: {
        path: path.resolve(__dirname, './Scripts/build'),
        filename: 'bundle.js'
    },
    // IMPORTANT NOTE: If you are using Webpack 2 or above, replace "loaders" with "rules"
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}