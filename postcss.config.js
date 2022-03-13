module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue({ file }) {
        // 注意内联样式是不转换的
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*']
    }
  }
}
