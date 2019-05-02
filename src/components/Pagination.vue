<template>
	<div class="pagination">
		<button @click="changeBtn">首页</button>
		<button @click="changeBtn">上一页</button>
		<button v-if="judge" class="pagebtn"></button>
		<button v-for="btn in pagebtns"
			@click="changeBtn"
			:class="[{currentpage:btn==currentpage},'pagebtn']">
			{{btn}}
		</button>
		<button @click="changeBtn">下一页</button>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default{
		name:"pagination",
		data(){
			return{
				pagebtns:[1,2,3,4,5,'......'],
				currentpage:1,
				jduge:false
			}
		},
		methods:{
			changeBtn(){
				//点击上一页，下一页，首页
				if(typeof page !=number){
					switch(page.target.innerText){
						case '上一页':
						$('button.currentpage').prev().click();
						break
						case '下一页':
						$('button.currentpage').next().click();
						break
						case '首页':
						pagebtns:[1,2,3,4,5,'......'];
						this.changeBtn(1)
						break
					}
				}
				
				this.currentpage=page;
				if(page>4){
					this.jduge=true;
				}else{
					this.jduge=false;
				}
				if(page==this.pagebtns[4]){
					this.pagebtns.shift();//移除第一个元素
					this.pagebtns.splice(4,0,this.pagebtns[3]+1);//添加最后一个
				}else if(page==this.pagebtns[0]){
					this.pagebtns.unshift(this.pagebtn[0]-1&&page !=1);//现在第一个位置加一
					this.pagebtns.splice(5,1)//移除最后一个元素
				}
			}
		}
	}
</script>

<style>
</style>