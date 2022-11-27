<template>
	<div class="student">
		<h2>学生姓名:{{name}}</h2>
		<h2>学生性别:{{sex}}</h2>
		<button @click="sendStudentName">把学生名School组件</button>
		<button @click="ok">把学生名School组件</button>
	</div>
</template>

<script>
	import pubsub from 'pubsub-js'
	export default {
		name:'Student',
		data(){
			return{
				name:'赵天雨',
				sex:'男',
			}
		},
		mounted(){
			// console.log('student',this.x)
		},
		methods:{
			sendStudentName(){
				// this.$bus.$emit('hello',this.name)
				pubsub.publish('hello',666)
			},
			ok(){
				pubsub.publish('hello',999)
			}
		}
	}
</script>

<style lang="less" scoped>
	.student{
		background-color: orange;
		padding: 5px;
		margin-top: 30px;
	}
</style>
