<template>
	<div>
		<h1>{{msg}}</h1>
		<h2>学生姓名:{{name}}</h2>
		<h2>学生性别{{sex}}</h2>
		<h2>学生年龄:{{myAge+1}}</h2>
		<button @click="updataAge">尝试修改年龄</button>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data(){
			return{
				msg:'我是齐鲁理工的学生',
				myAge:this.age	// props比data优先级高(先准备props)
			}
		},
		methods:{
			updataAge(){
				this.myAge++
			}
		},
		// props:['name','age','sex'] // 简单接收
		
		// 接收的同时对数据进行类型限制
		/* props:{
			name:String,
			age:Number,
			sex:String
		}, */
		
		// 接收的同时对数据: 进行类型限制+默认值的指定+必要性的限制
		props:{
			name:{
				type:String, // name的类型是字符串
				required:true // name是必要的(必须传)
			},
			age:{			// required和default不同时使用(因为无意义)
				type:Number,
				default:99 // (如果不传则用)默认值
			},
			sex:{
				type:String,
				required:true
			}
		},
		
		
	}
</script>

<style>
	
</style>
