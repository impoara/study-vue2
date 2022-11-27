<template>
	<!-- <transition name="todo" appear>
		<li>
			<label>
				<input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
				<span v-show="!todo.isEdit">{{todo.title}}</span>
				<input 
					type="text" 
					v-show="todo.isEdit" 
					:value="todo.title"
					@blur="handleBlur(todo,$event)"
					ref="inputTitle"
				/>
			</label>
			<button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
			<button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
		</li>
	</transition> -->
	<li>
		<label>
			<input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
			<span v-show="!todo.isEdit">{{todo.title}}</span>
			<input 
				type="text" 
				v-show="todo.isEdit" 
				:value="todo.title"
				@blur="handleBlur(todo,$event)"
				ref="inputTitle"
			/>
		</label>
		<button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
		<button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
	</li>
</template>

<script>
	import pubsub from 'pubsub-js'
	import 'animate.css'
	export default{
		name:'MyItem',
		// 声明接收todo对象
		props:['todo'],
		methods:{
			// 勾选or取消勾选
			handleCheck(id){
				// 通知App组件将对应的todo对象的done值取反
				// this.checkTodo(id)
				pubsub.publish('checkTodo',id)
			},
			// 删除todo对象
			handleDelete(id){
				if(confirm('确定删除吗?')){
					// this.deleteTodo(id)
					pubsub.publish('deleteTodo',id)
				}
			},
			// 编辑todo对象
			handleEdit(todo){
				if(todo.hasOwnProperty('isEdit')){
					todo.isEdit = true
				}else{
					this.$set(todo,'isEdit',true)
				}
				/* setTimeout(()=>{
					this.$refs.inputTitle.focus()
				},200) */
				this.$nextTick(function(){	// DOM生成后再应用
					this.$refs.inputTitle.focus()
				})
			},
			// 失去焦点回调 (真正执行修改逻辑)
			handleBlur(todo,e){
				todo.isEdit = false
				if(!e.target.value.trim()) return alert('输入不能为空!')
				this.$bus.$emit('updataTodo',todo.id,e.target.value)
			}
		}
	}
</script>

<style scoped>
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}
	
	li label {
		float: left;
		cursor: pointer;
	}
	
	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}
	
	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}
	
	li:before {
		content: initial;
	}
	
	li:last-child {
		border-bottom: none;
	}
	
	li:hover {
		background-color: #ddd;
	}
	
	li:hover button {
		display: block;
	}
	
/* 	.todo-enter,.todo-leave-to{
		transform: translateX(100%);
	}
	
	.todo-enter-to,.todo-leave{
		transform: translateX(0)
	}
	
	.todo-enter-active,.todo-leave-active{
		transition: 0.5s linear;
	} */
</style>
