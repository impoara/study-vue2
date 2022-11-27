<template>
	<div class="school">
		<h2>学校名称:{{name}}</h2>
		<h2>学生地址:{{address}}</h2>
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
		mounted(){
			// console.log('school',this.$on)
			this.$bus.$on('hello',(data)=>{
				console.log('我是School组件,收到了数据',data)
			})
		},
		beforeDestroy(){
			this.$bus.$off('hello')
		}
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>
