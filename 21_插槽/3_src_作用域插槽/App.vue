<template>
	<div class="container">
		<Category title="游戏">
			<template scope="theGames">
				<ul>
					<li v-for="(game,index) in theGames.games" :key="index">{{game}}</li>
				</ul>
			</template>
		</Category>
		
		<Category title="游戏">
			<template scope="{games}">
				<ol>
					<li v-for="(game,index) in games" :key="index">{{game}}</li>
				</ol>
			</template>
		</Category>
		
		<Category title="游戏">
			<template slot-scope="{games}">
				<h4 v-for="(game,index) in games" :key="index">{{game}}</h4>
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
	}
</script>

<style>
	.container{
		display: flex;
		justify-content: space-around;
	}
</style>
