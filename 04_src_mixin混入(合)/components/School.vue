<template>
	<div>
		<h2 @click="showName()">学校名称:{{name}}</h2>
		<h2>学生地址{{address}}</h2>
	</div>
</template>

<script>
	// import {hunhe} from '../mixin.js'	//局部混入
	export default {
		name:'School',
		data(){
			return{
				name:'齐鲁理工学院',
				address:'山东济南'
			}
		},
	//	mixins:[hunhe]
	}
</script>

<style>
	
</style>
