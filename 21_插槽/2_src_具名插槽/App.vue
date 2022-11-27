<template>
	<div class="container">
		<Category title="游戏">
			<img slot="center" src="http://www.it127.com/upload/45/new/20160625091425182.jpg" alt="出错了" />
			<a slot="footer" href="https://ow.blizzard.cn/home" target="_blank">暴雪官网</a>
		</Category>
		
		<Category title="美食" :listData="foods">
			<ul slot="center">
				<li v-for="(food,index) in foods" :key="index">{{food}}</li>
			</ul>
			<template v-slot:footer class="foot">
				<a href="https://www.baidu.com" target="_blank">主面食品</a>
				<a href="https://www.baidu.com" target="_blank">主汤食品</a>
			</template>
		</Category>
		
		<Category title="动画" :listData="animations">
			<video slot="center" controls src="../public/animations/onepunchman.mp4"></video>
			<template v-slot:footer>
				<div class="foot">
					<a href="https://www.baidu.com" target="_blank">经典</a>
					<a href="https://www.baidu.com" target="_blank">热门</a>
					<a href="https://www.baidu.com" target="_blank">推荐</a>
				</div>
				<h4>欢迎前来观看</h4>
			</template>
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
	.container,.foot{
		display: flex;
		justify-content: space-around;
	}
</style>
