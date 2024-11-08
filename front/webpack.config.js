const path = require('path');

module.exports = {
    entry: "./scripts/index.js",
    output: {
        //path: __dirname + '/dist'
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
      },
};