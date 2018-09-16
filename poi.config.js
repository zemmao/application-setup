const config = require('./server/config');
const path = require('path');

const aliases = {
  '@': path.resolve(__dirname, './client')
};

module.exports = (options, req) => ({
  presets: [
    require('poi-preset-eslint')({ mode: '*' }),
    require('poi-preset-bundle-report')()
  ],
  entry: './client/main.js',
  extendWebpack(config) {
    config.resolve.alias.merge(aliases);
  },
  sourceMap: options.mode === 'development',
  generateStats: true,
  port: 8081,
  devServer: {
    proxy: {
      '/api': `http://${config.ip}:${config.port}`
    }
  }
});
