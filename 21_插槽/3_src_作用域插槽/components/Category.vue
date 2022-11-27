<template>
	<div class="category">
		<h3>{{this.title}}分类</h3>
		<slot :games="games" msg="hello"></slot>
	</div>
</template>

<script>
	export default{
		name:'Category',
		props:['title'],
		data(){
			return{
				games:['APEX英雄','守望先锋','使命召唤','英雄联盟','穿越火线','刺客信条','红色警戒','战地2042']
			}
		}
		
	}
</script>

<style scoped>
	.category{
		background-color: skyblue;
		width: 200px;
		height: 400px;
	}
	h3{
		text-align: center;
		background-color: orange;
		line-height: 35px;
		margin-top: 1px;
	}
	h4{
		text-align: center;
	}
</style>
