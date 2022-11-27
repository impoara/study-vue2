<template>
	<div id="root">
		<button @click="getStudents">获取学生信息</button>
	</div>
</template>

<script>
	// 引入组件
	import axios from 'axios'
	export default {
		name:'App',
		methods:{
			getStudents(){
				axios.get('http://localhost:8080/api/test.txt').then(
					response => {
						console.log('请求成功',response.data)
					},
					error => {
						console.log('请求失败',error.message)
					}
				)
			}
		},
	}
</script>

<style>
	
</style>
