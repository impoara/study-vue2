<template>
	<!-- 组件的结构 -->
	<div class="demo">
		<h2>学校名称:{{name}}</h2>
		<h2>学校地址:{{address}}</h2>
		<button @click="showName">点我提示学校名</button>
	</div>
</template>

<script>
	//组件交互相关的代码(数据、方法等等)	(分别暴露:export、统一暴露:export {export} 、默认暴露(常用):export default school)
	//export school = Vue.extend({
	//export default Vue.extend({
	export default {
		name:'School', // 最好与文件名同名(开头大写)
		data(){
			return{
				name:'齐鲁理工学院',
				address:'济南章丘'
			}
		},
		methods:{
			showName(){
				alert(this.name)
			}
		}
	}
</script>

<style>
	/* 组件的样式 */
	.demo{
		background-color: #FFA500;
	}
</style>
