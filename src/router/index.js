
import router from 'vue-router'
import Vue from 'vue'

import Postlist from '../components/Postlist'
import Article from '../components/Article'
import Userinfo from '../components/UserInfo'
import SlideBar from '../components/SlideBar'

Vue.use(router)

//配置路由
export default new  router({
	routes:[
	{
		name:'root',
		path:'/',
		components:{
			main:Postlist
		}
	},
	{
		name:'post_content',
		path:'/topic/:id&author=:name',
		components:{
			main:Article,
			Slidebar:SlideBar
		}
	},
	{
		name:'user_info',
		path:'/userinfo/:name',
		components:{
			main:Userinfo
		}
	}
	
	]
})

