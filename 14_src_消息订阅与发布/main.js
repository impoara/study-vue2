// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 关闭Vue生产提示
Vue.config.productionTip = false


// 创建vm
new Vue({
	el:'#app',
/* 	beforeCreate(){
		Vue.prototype.$bus = this // 安装全局事件总线
	}, */
	render: h => h(App),
})

