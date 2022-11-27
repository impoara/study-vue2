<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<transition-group name="hello" appear> <!-- 若不加name,则css:.name-enter-active ==> .v-enter-active (leave同理)  -->
			<h1 v-show="isShow" key="1">你好啊!</h1>
			<h1 v-show="!isShow" key="2">赵天雨</h1>
		</transition-group>
	</div>
</template>

<script>
	export default{
		name:'Test2',
		data(){
			return{
				isShow:true
			}
		}
	}
</script>

<style scoped>
	h1{
		background-color: orange;
		/* transition: 0.5s linear; */
	}
	/* 进入的起点&&离开的 */
	.hello-enter,.hello-leave-to{
		transform: translateX(-100%);
	}
	/* 进入的终点&&离开的起点 */
	.hello-enter-to,.hello-leave{
		transform: translateX(0);
	}
	/* 进入和离开的时间和方式 */
	.hello-enter-active,.hello-leave-active{
		transition: 0.5s linear;
	}
</style>
