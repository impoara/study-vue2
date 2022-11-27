<template>
	<ul class="todo-main">
		<transition-group name="todo" appear>
			<MyItem
			 v-for="todoObj in todos" 
			 :key="todoObj.id" 
			 :todo="todoObj" 
			 />
		 </transition-group>
	</ul>
</template>

<script>
	import MyItem from './MyItem.vue'
	
	export default{
		name:'MyList',
		components:{MyItem},
		props:['todos'],
	}
</script>

<style scoped>
	.todo-main {
		margin-left: 0px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}
	
	.todo-empty {
		height: 40px;
		line-height: 40px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding-left: 5px;
		margin-top: 10px;
	}
	
	.todo-enter,.todo-leave-to{
		transform: translateX(100%);
	}
		
	.todo-enter-to,.todo-leave{
		transform: translateX(0)
	}
		
	.todo-enter-active,.todo-leave-active{
		transition: 0.5s linear;
	}
</style>
