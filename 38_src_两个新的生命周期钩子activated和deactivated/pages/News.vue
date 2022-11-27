<template>
	<ul>
		<li :style="{opacity}">欢迎学习Vue</li>
		<li>news001 &nbsp;&nbsp; <input type="text"/></li>
		<li>news002 &nbsp;&nbsp; <input type="text"/></li>
		<li>news003 &nbsp;&nbsp; <input type="text"/></li>
	</ul>
</template>

<script>
	export default {
		name:'News',
		data(){
			return{
				opacity:1,
			}
		},
		activated() {
			console.log('News组件被激活了')
			this.timer = setInterval(() => {
				console.log('@')
				this.opacity -= 0.1
				if(this.opacity <= 0){
					this.opacity = 1
				}
			},100)
		},
		deactivated() {
			console.log('New组件失活了')
			clearInterval(this.timer)
		},
	}
</script>

<style>
</style>
