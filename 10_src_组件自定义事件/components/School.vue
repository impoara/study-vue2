<template>
	<div class="school">
		<h2>学校名称:{{name}}</h2>
		<h2>学生地址:{{address}}</h2>
		<button @click="sendSchoolName">把学校名给APP</button>
	</div>
</template>

<script>
	export default {
		name:'School',
		props:['getSchoolName'],
		data(){
			return{
				name:'齐鲁理工学院',
				address:'山东济南'
			}
		},
		methods:{
			sendSchoolName(){
				this.getSchoolName(this.name)
			}
		}
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>
