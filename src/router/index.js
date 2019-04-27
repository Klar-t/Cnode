
import router from 'vue-router'
import Vue from 'vue'

import Postlist from '../components/Postlist'
import Article from '../components/Article'


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
		path:'/topic/:id',
		components:{
			mian:Article
		}
	}
	
	]
})

