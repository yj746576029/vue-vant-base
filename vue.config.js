'use strict'
const path = require('path')
const resolve = dir => path.join(__dirname, './', dir)

module.exports = {
  chainWebpack: config => {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
//   devServer: {
//     host: '0.0.0.0',
//     open: true,
//     proxy: {
//       [process.env.VUE_APP_PROXY_PREFIX]: {
//         target: process.env.VUE_APP_HOST, // 这里是目标服务器地址
//         changOrigin: true, // 允许跨域
//         // logLevel:'debug',
//         pathRewrite: { // 路径重写
//           ['^' + process.env.VUE_APP_PROXY_PREFIX]: ''
//         }
//       }
//     }
//   }
}
