<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<transition name="hello" appear> <!-- 若不加name,则css:.name-enter-active ==> .v-enter-active (leave同理)  -->
			<h1 v-show="isShow">你好啊!</h1>
		</transition>
	</div>
</template>

<script>
	export default{
		name:'Test',
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
	}
	
	.hello-enter-active{
		animation: bq 0.5s linear; /* linear:匀速*/
	}
	
	.hello-leave-active{
		animation: bq 0.5s linear reverse;
	}
	
	@keyframes bq{
		from{
			transform: translateX(-100%);
		}
		to{
			transform: translateX(0);
		}
	}
</style>
