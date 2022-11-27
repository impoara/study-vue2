<template>
	<div>
		<h2 @click="showName()">学生姓名:{{name}}</h2>
		<h2>学生性别{{sex}}</h2>
	</div>
</template>

<script>
	// 引入一个混合
	// import {hunhe,hunhe2} from '../mixin.js'
	export default {
		name:'Student',
		data(){
			return{
				name:'赵天雨',
				sex:'男',
			}
		},
	//	mixins:[hunhe,hunhe2]
	}
</script>

<style>
	
</style>
