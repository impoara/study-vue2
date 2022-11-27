/* 
	该文件是整个项目的入口文件
 */
// 引入Vue
// import Vue from 'vue/dist/vue.js' // 完整版vue

import Vue from 'vue'
// 引入App组件,它是所有组件的父组件
import App from './App.vue'
// 关闭Vue生产提示
Vue.config.productionTip = false

/* 
	关于不同版本的Vue:
	
		1.vue.js与vue.runtime.xxx.js区别:
			(1).vue.js是完整版的Vue. 包含:核心功能+模型解析器.
			(2).vue.runtime.xxx.js是运行版的Vue. 只包含:核心功能:没有模板解析器.
			
		2.因为vue.runtime.xxx.js没有模板解析器,所以不能使用template配置项,需要使用render函数
		接收到的createElement函数去指定具体内容.
 */

let person = {name:'tom',age:18}	//无用变量

// 创建实例对象---vm
new Vue({
	el:'#app',
	template:`<App></App>`,
	components:{App},
	// 完成了将App组件放入容器中的功能
	render: h => h(App),
	// render:E=>E('h1','你好啊')
})//.$mount('#app') // 与el功能相同
