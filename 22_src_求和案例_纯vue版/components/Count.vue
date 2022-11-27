<template>
	<div>
		<h2>当前求和为:{{sum}}</h2>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementOdd">当前求和为奇数</button>
		<button @click="incrementWait">等一等再求和</button>
	</div>
</template>

<script>
	export default{
		name:"Count",
		data(){
			return{
				n:1,	//用户所选数字
				sum:0	//当前的和
			}
		},
		methods:{
			increment(){
				this.sum += this.n
			},
			decrement(){
				this.sum -= this.n
			},
			incrementOdd(){
				if(this.sum % 2){
					this.sum += this.n
				}
			},
			incrementWait(){
				setTimeout(()=>{
					this.sum += this.n
				},1000)
			}
		},
		mounted(){
			console.log(this)
		}
	}
</script>

<style>
	button{
		margin-left: 5px;
	}
</style>