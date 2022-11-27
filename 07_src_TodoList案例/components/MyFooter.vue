<template>
	<div class="todo-footer" v-show="total">
		<label>
			<input type="checkbox" v-model="isAll" />
		</label>
		<span>
			<span>已完成{{doneTotal}}</span> / 全部{{total}}
		</span>
		<button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
	</div>
</template>

<script>
	export default{
		name:'MyFooter',
		props:['todos','checkAllTodo','clearAllTodo'],
		computed:{
			isAll:{
				get(){
					return this.doneTotal === this.total && this.total > 0
				},
				set(value){
					this.checkAllTodo(value)
				}
			},
			total(){
				return this.todos.length
			},
			doneTotal(){
				// 普通方法
				/* let i = 0
				this.todos.forEach((todo)=>{
					if(todo.done) i++
				})
				return i */
				//reduce条件统计方法:(pre:上一次的统计值,current:每一个todo项)会调用数组长度的次数
				return this.todos.reduce((pre,current)=>{
					return pre + (current.done ? 1 : 0)  //返回值是下次pre的值,最后一次的返回值是reduce的返回值
				},0) // 统计初始值为0,是pre的初始值
			}
		},
		methods:{
			/* checkAll(e){
				this.checkAllTodo(e.target.checked)
			}, */
			clearAll(){
				if(confirm('确定删除吗?')){
					this.clearAllTodo()
				}
			}
		}
	}
</script>

<style scoped>
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}
	
	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}
	
	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}
	
	.todo-footer button {
		float: right;
		margin-top: 5px;
	}
</style>
