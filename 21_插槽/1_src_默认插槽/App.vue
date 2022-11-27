<template>
	<div class="container">
		<Category title="游戏">
			<img src="http://www.it127.com/upload/45/new/20160625091425182.jpg" alt="出错了" />
		</Category>
		<Category title="美食" :listData="foods">
			<ul>
				<li v-for="(game,index) in games" :key="index">{{game}}</li>
			</ul>
		</Category>
		<Category title="动画" :listData="animations">
			<video controls src="../public/animations/onepunchman.mp4"></video>
		</Category>
	</div>
</template>

<script>
	// 引入组件
	import Category from './components/Category.vue'
	export default {
		name:'App',
		components:{Category},
		data(){
			return{
				foods:['水饺','烧烤','炒饭','汤面','火锅'],
				games:['APEX英雄','守望先锋','使命召唤','英雄联盟','穿越火线'],
				animations:['《一拳超人》','《你的名字》','《天气之子》','《鬼灭之刃》','《干物妹,小埋》']
			}
		}
	}
</script>

<style>
	.container{
		display: flex;
		justify-content: space-around;
	}
</style>
