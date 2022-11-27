<template>
	<!-- 组件的结构 -->
	<div class="demo">
		<h2>学生名称:{{name}}</h2>
		<h2>学生年龄:{{age}}</h2>
	</div>
</template>

<script>
	//组件交互相关的代码(数据、方法等等)	(分别暴露:export、统一暴露:export {export} 、默认暴露(常用):export default student)
	export default {
		name:'Student', // 最好与文件名同名(开头大写)
		data(){
			return{
				name:'赵天雨',
				age:22
			}
		}
	}
</script>

<style>
	
</style>
