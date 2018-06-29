
const path = require('path');

module.exports = {
    entry:{
        main:['./js/src/main.js', './js/src/app.js'],
        restaurant: ['./js/src/restaurant_info.js', './js/src/app.js']
    },
    output: {
        path: path.resolve(__dirname, 'js/pub'),
        filename: '[name].bundle.js'
    }
    ,
    module:{
        rules:[
            {
                test:/\.js?$/,
                loader: 'babel-loader',
                exclude:[path.resolve(__dirname, 'node_modules')],
                options: {
                    presets: ["env"]
                  }

            }
        ]
    }
    
}