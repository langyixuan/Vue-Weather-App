const path = require("path");

module.exports = {
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,

  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      scss: {
        prependData: `@import "./src/style/main.scss";`
      }
    }
  },
};
