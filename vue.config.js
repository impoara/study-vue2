module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
	},
  },
  lintOnSave:false,	// 关闭语法检查
  // 开启代理服务器(方式一)
 /* devServer: {
    proxy: 'http://localhost:5000'
  } */
  // 开启代理服务器(方式二)
  /* devServer:{
	  proxy:{
		  '/api':{
			  target: 'http://localhost:5000',
			  pathRewrite:{'^/api':''}
			  ws: true, // 用于支持websocket
			  changeOrigin: false // 若true则代理服务器会说谎,防止服务器拒绝给资源,默认为true
		  }
	  }
  } */
}