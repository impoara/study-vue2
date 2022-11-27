<template>
	<div class="demo">
		<h2>学校名称:{{name}}</h2>
		<h2>学生地址:{{address}}</h2>
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

<style scoped>
	.demo{
		background-color: skyblue;
	}
</style>
