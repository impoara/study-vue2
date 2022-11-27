<template>
	<div>
		<School/>
		<hr />
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
	}
</script>

<style>

</style>
