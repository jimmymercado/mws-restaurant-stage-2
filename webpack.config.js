
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry:{
        main:['./js/main.js', './js/app.js'],
        restaurant: ['./js/restaurant_info.js', './js/app.js'],
        styles:['./css/styles.css', './css/media-queries.css']
    },
    output: {
        path: path.resolve(__dirname, 'pub'),
        filename: 'js/[name].bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js?$/,
                loader: 'babel-loader',
                exclude:[path.resolve(__dirname, 'node_modules')],
                options: {
                    presets: ["env"]
                }

            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: path.resolve(__dirname, 'css/pub')}
                    },
                    'css-loader'
                ]
            }
        ]
    },
    optimization:{
        minimizer: [
            new UglifyJsPlugin({
              cache: true,
              parallel: true,
              sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCssAssetsPlugin({})
          ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: "css/[name].bundle.css"
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\styles.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
            canPrint: true
          })
    ]

    
    
}