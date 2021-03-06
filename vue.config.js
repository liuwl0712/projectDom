//vue.config.js

module.exports = {
  // 基本路径
  publicPath: "./", //之前是 baseUrl 从 Vue CLI 3.3 起已弃用，请使用publicPath。
  devServer: {
    port: 8089,
    proxy: {
      //配置跨域
      "/api": {
        target: "http://localhost:18080", //这里后台的地址模拟的;应该填写你们真实的后台接口
        changOrigin: true, //允许跨域
        pathRewrite: {
          /*重写路径，当我们在浏览器中看到请求的地址为：http://localhost:808080/api/...... 时
            实际上访问的地址是：http://localhost:18080/......,因为重写了 /api
            */
          "^/api": "",
        },
      },
    },
  },
  lintOnSave: false,
};
