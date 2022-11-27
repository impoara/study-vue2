// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 完整引入
// 引入ElementUI组件库
// import ElementUI from 'element-ui';
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 关闭Vue生产提示
Vue.config.productionTip = false

// 应用插件
// Vue.use(ElementUI);

// 创建vm
new Vue({
	el:'#app',
	render: h => h(App), 
})
