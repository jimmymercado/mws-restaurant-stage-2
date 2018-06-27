
const path = require('path');

module.exports = {
    entry: ['./js/src/app.js', './js/src/dbhelper.js', './js/src/main.js', './js/src/restaurant_info.js'],
    output: {
        path: path.resolve(__dirname, 'js/pub'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js/,
                use: 'babel-loader'
            }
        ]
    }
}