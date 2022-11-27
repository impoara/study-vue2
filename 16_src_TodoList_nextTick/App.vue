<template>
	<div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
				<MyHeader @addTodo="addTodo"/>
				<MyList :todos="todos" />
				<MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"/>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import pubsub from 'pubsub-js'
	import MyFooter from './components/MyFooter.vue'
	import MyHeader from'./components/MyHeader.vue'
	import MyList from'./components/MyList.vue'
	
	export default {
		name:'App',
		components:{MyFooter,MyHeader,MyList},
		data(){
			return{
				todos:JSON.parse(localStorage.getItem('todos')) || []	// 非空用前面,空用[]
			}
		},
		methods:{
			// 添加一个todo对象
			addTodo(todoObj){
				this.todos.unshift(todoObj)
			},
			// 勾选或取消一个todo对象
			checkTodo(_,id){
				this.todos.forEach((todo)=>{
					if(todo.id === id) todo.done = !todo.done
				})
			},
			// 删除一个todo对象
			deleteTodo(_,id){
				this.todos = this.todos.filter((todo)=>{
					return todo.id !== id
				})
			},
			// 修改一个todo对象
			updataTodo(id,title){
				this.todos.forEach((todo)=>{
					if(todo.id === id) todo.title = title
				})
			},
			// 全选or全不选
			checkAllTodo(done){
				this.todos.forEach((todo)=>{
					todo.done = done
				})
			},
			// 清除所有已经完成的todo
			clearAllTodo(){
				this.todos = this.todos.filter((todo)=>{
					return todo.done !== true
				})
			}
		},
		watch:{
			todos:{
				deep:true, // 开启深度监视
				handler(value){
					localStorage.setItem('todos',JSON.stringify(value))
				}
			}
		},
		mounted(){
			this.pubId1 = pubsub.subscribe('checkTodo',this.checkTodo)
			this.pubId2 = pubsub.subscribe('deleteTodo',this.deleteTodo)
			this.$bus.$on('updataTodo',this.updataTodo)
		},
		beforeDestroy(){
			pubsub.unsubscribe(this.pubId1)
			pubsub.unsubscribe(this.pubId2)
			this.$bus.$off('updataTodo')
		}
	}
</script>

<style>
	body {
		background-color: #fff;
	}
	
	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}
	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}
	
	.btn-edit {
		color: #fff;
		background-color: skyblue;
		border: 1px solid rgb(103,159,180);
		margin-right: 5px;
	}
	
	.btn-danger:hover {
		color: #fff;
		background-color: #BD362F;
	}
	
	.btn:focus {
		outline: none;
	}
	
	.todo-container {
		width: 600px;
		margin: 0 auto;
	}
	
	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>
