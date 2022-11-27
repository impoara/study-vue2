<template>
	<div>
		<Student name="赵天雨" sex="男" :age="22"/>
	</div>
</template>

<script>
	// 引入Student组件
	import Student from './components/Student.vue'
	
	export default {
		name:'App',
		components:{Student},
	}
</script>

<style>

</style>
