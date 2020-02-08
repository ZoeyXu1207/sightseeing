import Vue from 'vue'
import Router from 'vue-router'
//首页
import home from '@/page/home/home'
//个人中心
import personal from '@/page/personal/personal'
//详情页
import container from '@/page/container/container'
//搜索
import search from '@/page/search/search'
//登录注册
import login from '@/page/login/login'
//登录的
import loginend from '@/page/login/components/loginend'
//注册的
import register from '@/page/login/components/register'
//我的收藏
import mycollection from '@/page/collection/mycollection'

Vue.use(Router)

export default new Router({
routes: [
	{
	 	path:'/',
	    name:'home',
	    component:home,
	    meta:{
	    	keepAlive:true,//该页面需要缓存
	    }
	},
	{
	 	path:'/personal',
	    name:'personal',
	    component:personal	
	},
	//详情页
	{
	 	path:'/container/:id',
	    name:'container',
	    component:container	
	},
	//我的收藏
	{
	 	path:'/mycollection',
	    name:'mycollection',
	    component:mycollection	
	},
	{
	 	path:'/search',
	    name:'search',
	    component:search,
	    meta:{
	    	keepAlive:true,//该页面需要缓存
	    }
	},
	{
	 	path:'/login',
	    name:'login',
	    component:login,
	    //重定向
	    redirect:'/loginend',
	    //二级路由
	    children:[
		    {
		 	path:'/loginend',
		    name:'loginend',
		    component:loginend	
			},
			{
			 	path:'/register',
			    name:'register',
			    component:register	
			},
	    ]
	},
	
 
]
})
