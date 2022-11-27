<template>
	<div class="student">
		<h2>学生姓名:{{name}}</h2>
		<h2>学生性别:{{sex}}</h2>
		<h2>当前求和为:{{number}}</h2>
		<button @click="add">点我number++</button>
		<button @click="sendStudentName">点我把学生名给APP</button>
		<button @click="unbind">解绑zty事件</button>
		<button @click="death">销毁当前Student组件的实例(vc)</button>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data(){
			return{
				name:'赵天雨',
				sex:'男',
				number:0
			}
		},
		methods:{
			add(){
				console.log('add回调被调用了')
				this.number++
			},
			sendStudentName(){
				// 触发Student组件实例身上的zty事件
				this.$emit('zty',this.name,666,999,250,520)
				// this.$emit('demo')
				// this.$emit('click')
			},
			unbind(){
				this.$off('zty') // 解绑一个自定义事件
				// this.$off(['zty','demo']) // 解绑多个自定义事件
				// this.$off()	// 解绑所有自定义事件
			},
			death(){
				this.$destroy() // 销毁了当前Student组件的实例,销毁后所有Student实例的自定义事件全部不奏效.
			}
		},
	}
</script>

<style lang="less" scoped>
	.student{
		background-color: orange;
		padding: 5px;
		margin-top: 30px;
	}
</style>
