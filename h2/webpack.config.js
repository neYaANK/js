const path = require('path')
const HtmlWebpackplugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist'),
    },
    plugins: [
        new HtmlWebpackplugin({
            title: 'Output Management',
            template: './src/index.html'
        })
    ],
    module:{
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],

            },
        ],
    },
};
