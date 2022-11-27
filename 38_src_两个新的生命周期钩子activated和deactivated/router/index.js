// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

export default new VueRouter({
	routes:[
		{	// 一级路由
			name:'guanyv',
			path:'/about',
			component:About
		},
		{	// 一级路由
			path:'/home',
			component:Home,
			children:[	// 二级路由
				{
					path:'news', // 子路由地址不加"斜杠"
					component:News,
				},
				{
					path:'message',
					component:Message,
					children:[ // 三级路由
						{	
							name:'xiangqing',
							path:'detail/:id/:title',
							component:Detail,
							// props的第一种写法,值为对象,该对象中的所有key-value都会以props的形式传给Detail组件.
							// props:{a:1,b:'hello'},
							
							// props的第二种写法,值为布尔值,若布尔值为真,就会把该路由组件收到的所有params参数,以props的形式传给Detail组件.
							// props:true,
							
							// props的第三种写法,值为函数
							props($route){
								return {id:$route.query.id,title:$route.query.title}
							}
						},
					]
				},
			]
		},
	]
})