<template>
	<div class="category">
		<h3>{{this.title}}分类</h3>
		<!-- 定义一个插槽:等着组建的使用者进行填充 -->
		<slot>我是一些默认值,当使用者没有传递具体结构时,我会出现</slot>
	</div>
</template>

<script>
	export default{
		name:'Category',
		props:['title']
		
	}
</script>

<style scoped>
	.category{
		background-color: skyblue;
		width: 400px;
		height: 550px;
	}
	h3{
		text-align: center;
		background-color: orange;
		line-height: 35px;
		margin-top: 1px;
	}
	img{
		width: 100%;
	}
	video{
		width: 100%;
	}
</style>
