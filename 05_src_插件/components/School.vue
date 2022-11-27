<template>
	<div>
		<h2>学校名称:{{name | mySlice}}</h2>
		<h2>学生地址:{{address}}</h2>
		<button @click="hello">点我测试hello方法</button>
	</div>
</template>

<script>
	export default {
		name:'School',
		data(){
			return{
				name:'齐鲁理工学院',
				address:'山东济南'
			}
		},
	}
</script>

<style>
	
</style>
