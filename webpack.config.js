const path = require('path');
const publicPath = "build/";
const outputDir = path.join(__dirname, publicPath);

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/Index.bs.js',
  mode: isProd ? 'production' : 'development',
  output: {
    path: outputDir,
//    publicPath: publicPath,
    filename: 'Index.bs.js',
  },
  module: {
    rules: [{
      test: /\.(png|jpg)$/,
      use: [
        'file-loader'
      ]
    }]
  }
};
