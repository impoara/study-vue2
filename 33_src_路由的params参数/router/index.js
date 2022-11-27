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
						},
					]
				},
			]
		},
	]
})