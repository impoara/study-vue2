// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

const router = new VueRouter({
	routes:[
		{	// 一级路由
			name:'guanyv',
			path:'/about',
			component:About,
			meta:{title:'关于'},
		},
		{	// 一级路由
			name:'zhuye',
			path:'/home',
			component:Home,
			meta:{title:'主页'},
			children:[	// 二级路由
				{
					path:'news', // 子路由地址不加"斜杠"
					component:News,
					meta:{title:'新闻',isAuth:true},
				},
				{
					name:'xiaoxi',
					path:'message',
					component:Message,
					meta:{title:'消息',isAuth:true},
					children:[ // 三级路由
						{	
							name:'xiangqing',
							path:'detail/:id/:title',
							component:Detail,
							// props的第一种写法,值为对象,该对象中的所有key-value都会以props的形式传给Detail组件.
							// props:{a:1,b:'hello'},
							
							// props的第二种写法,值为布尔值,若布尔值为真,就会把该路由组件收到的所有params参数,以props的形式传给Detail组件.
							props:true,
							
							// props的第三种写法,值为函数
							/* props($route){
								return {id:$route.query.id,title:$route.query.title}
							} */
						},
					]
				},
			]
		},
	]
})

// 全局前置路由守卫-初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to,from,next)=>{
	console.log('前置路由守卫',to,from)
	/* if(to.path === '/home/news' || to.path === '/home/message'){// 直接用name也可以 */
	if(to.meta.isAuth){	//判定是否需要鉴权
		if(localStorage.getItem('school') === 'QIT'){
			next()
		}else{
			alert('学校名不对')
		}
	}else{
		next()
	}
})

// 全局后置路由守卫-初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to,from)=>{
	console.log('后置路由守卫',to,from)
	document.title = to.meta.title || '主系统'
})

export default router