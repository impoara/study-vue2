export default {
	install(Vue,x,y,z){
		console.log(x,y,z)
		// 全局过滤器
		Vue.filter('mySlice',function(value){
			return value.slice(0,4)
		})
		
		// 全局变量
		Vue.directive('fbind',{
			// 指令与元素成功绑定时(一上来)
			bind(element,binding){
				// console.log('bind')
				element.value = binding.value
			},
			// 指令所在元素被插入页面时
			inserted(element,binding){
				// console.log('inserted')
				element.focus()
			},
			// 指令所在的模板被重新解析时
			update(element,binding){
					// console.log('update')
					element.value = binding.value
					element.focus()
			},
		})
		
		// 定义混入
		Vue.mixin({
			data(){
				return{
					x:100,
					y:200
				}
			},
		})
		
		// 给Vue原型上添加一个方法 (vm和vc就都能用了)
		Vue.prototype.hello = ()=>{alert('你好啊')}
	}
}