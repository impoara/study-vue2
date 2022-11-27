<template>
	<div>
		<h2>当前求和为:{{sum}}</h2>
		<h3>当前求和放大十倍:{{bigSum}}</h3>
		<h3>我在{{school}},学习{{subject}}</h3>
		<h3 style="color: red;">Person组件的总人数是: {{personList.length}}</h3>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button>
		<button @click="incrementOdd(n)">当前求和为奇数</button>
		<button @click="incrementWait(n)">等一等再求和</button>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
	export default{
		name:"Count",
		data(){
			return{
				n:1,	//用户所选数字
			}
		},
		computed:{		
			// 借助mapState生成计算属性,从state中读取数据(数组写法)
			...mapState(['sum','school','subject','personList']),
			
			// 借助mapGetters生成计算属性,从getters中读取数据(数组写法)
			...mapGetters(['bigSum']),
		},
		methods:{
			// 借助mapMutations生成对相应方法,方法中会调用commit去联系mutations(对象写法)
			...mapMutations({increment:'JIA',decrement:'JIAN'}),
			
			// 借助mapActions生成对相应方法,方法中会调用dispatch去联系actions(对象写法)
			...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
		},
	}
</script>

<style>
	button{
		margin-left: 5px;
	}
</style>