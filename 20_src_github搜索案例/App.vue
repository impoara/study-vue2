<template>
	<div class="container">
		<Search/>
		<List/>
	</div>
</template>

<script>
	// 引入组件
	import List from './components/List.vue'
	import Search from './components/Search.vue'
	export default {
		name:'App',
		components:{List,Search}
	}
</script>

<style>
	
</style>
