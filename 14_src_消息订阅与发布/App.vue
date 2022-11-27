<template>
	<div class="app">
		<h1>{{msg}}</h1>
		<School/>
		<Student/>
	</div>
</template>

<script>
	// 引入Student组件
	import Student from './components/Student.vue'
	import School from'./components/School.vue'
	
	export default {
		name:'App',
		components:{School,Student},
		data(){
			return{
				msg:'你好啊!',
			}
		}
	}
</script>

<style scoped>
	.app{
		background-color: gray;
	}
</style>
