<template>
	<div class="app">
		<h1>{{msg}}.{{studentName}}同学</h1>
		<!-- 通过父组件给子组件传递函数类型的props实现: 子给父传递数据 -->
		<School :getSchoolName="getSchoolName"/>
		
		<!-- 通过父组件给子组件绑定一个自定义事件实现: 子给父传递数据(第一种写法,使用@或v-on) -->
		<!-- <Student v-on:zty="getStudentName" @demo="m1"/> -->
		
		<!-- 通过父组件给子组件绑定一个自定义事件实现: 子给父传递函数(第二种写法,使用ref) -->
		<Student ref="student" @click.native="show()"/>
	</div>
</template>

<script>
	// 引入Student组件
	import Student from './components/Student.vue'
	import School from'./components/School.vue'
	
	export default {
		name:'App',
		components:{School,Student},
		data(){
			return{
				msg:'你好啊!',
				studentName:''
			}
		},
		methods:{
			getSchoolName(name){
				console.log('APP收到了学校名',name)
			},
			getStudentName(name,...params){
				console.log('APP收到了学生名',name,params)
				this.studentName = name
			},
			m1(){
				console.log('demo事件被触发了')
			},
			show(){
				alert('123')
			}
		},
		mounted(){
			setTimeout(()=>{
				this.$refs.student.$on('zty',this.getStudentName)
				// this.$refs.student.$once('zty',this.getStudentName)
			},0)
		}
	}
</script>

<style scoped>
	.app{
		background-color: gray;
	}
</style>
