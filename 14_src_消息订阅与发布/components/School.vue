<template>
	<div class="school">
		<h2>学校名称:{{name}}</h2>
		<h2>学生地址:{{address}}</h2>
	</div>
</template>

<script>
	import pubsub from 'pubsub-js'
	export default {
		name:'School',
		props:['getSchoolName'],
		data(){
			return{
				name:'齐鲁理工学院',
				address:'山东济南'
			}
		},
		methods:{
			demo(msgName,data){
				console.log('有人发布了hello消息,hello消息的回调执行了',data)
			}
		},
		mounted(){
			// console.log('school',this.$on)
			/* this.$bus.$on('hello',(data)=>{
				console.log('我是School组件,收到了数据',data)
			}) */
			
			/* this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
				console.log('有人发布了hello消息,hello消息的回调执行了',data)
			}) */ //      或
			this.pubId = pubsub.subscribe('hello',this.demo)
		},
		beforeDestroy(){
			// this.$bus.$off('hello')
			pubsub.unsubscribe(this.pubId)
		}
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>
