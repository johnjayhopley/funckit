import fs from 'fs';
import path from 'path';
console.log('----------------------------------------');
console.log(path.join(__dirname, '../../src'))
console.log('----------------------------------------');

module.exports = (production) => {
  return {
    test: /\.js$/,
    enforce: 'pre',
    use: [{
      loader: 'eslint-loader',
      options: {
        configFile: path.join(__dirname, './../../.eslintrc'),
        emitWarning: true
      }
    }],
    include: [
      path.join(__dirname, '../../src'),
      '../webpack.config.babel.js'
    ],
    exclude: '/node_modules/'
  }
}
