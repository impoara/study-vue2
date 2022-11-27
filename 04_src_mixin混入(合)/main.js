// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 全局引入混入
import {hunhe,hunhe2} from './mixin.js'
// 关闭Vue生产提示
Vue.config.productionTip = false
// 设定混入
Vue.mixin(hunhe)
Vue.mixin(hunhe2)


// 创建vm
new Vue({
	el:'#app',
	render: h => h(App),
})
