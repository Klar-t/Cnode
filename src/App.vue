 <template>
  <div id="app">
    <Header></Header>
    <div class="main">
    	<router-view name="Slidebar"></router-view>
    	<router-view name="main"></router-view>
    </div>
    
  </div>
</template>

<script>
import Header from './components/Header'
import Postlist from './components/Postlist'
export default {
  name: 'App',
  data:function(){
  	return {
  		
  	}
  },
  components:{
  	Header,Postlist
  }
}
</script>

<style>
.main{
	width: 90%;
	margin: 0 auto;
	min-height: 600px;
}
#app{
	background-color: #e1e1e1;
}
ul,li{ padding:0;margin:0;list-style:none}
</style>
