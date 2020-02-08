<template>
	<div style="margin-bottom: 2rem;">
		<div v-for="item in home" :key="item.id">
			<router-link :to="'/container/' + item.id">
				<div class="content">
					<div class="content-image">
						<img :src="item.image"/>
					</div>
					<div class="content-list">
						<div class="content-name">{{item.name}}</div>
						<div class="content-biao">
							<p>{{item.title}}</p>
						</div>
					</div>
				</div>
			</router-link>
		</div>
		<!--加载中-->
		<div class="load-ing" v-show="load">{{this.loadtext}}</div>
	</div>
</template>

<script>
import { homes } from '../../../api/api'	
	export default{
		name:'home-content',
		data(){
			return{
				home:[],
				//进入当前页面默认请求第一页的数据
				pages:1,
				//提示
				load:false,
				//提示文字
				loadtext:'加载中'
			}
		},
		methods:{
			hodeData(){
				homes(this.pages)
				.then((res) =>{
//					this.home = res.data.results
					//判断数据是否为空
					if(res.data.results != null){
//						console.log(this.pages)
						if(this.pages == 1){
							this.home = res.data.results
						}else{//上拉加载请求出来的数据和之前的数据做一个合并
							this.home = this.home.concat(res.data.results)
							
						}
					}
				})
				.catch((error) =>{
//					console.log(error)
				})
			}
		},
		mounted(){
			this.hodeData()
			//上拉加载
			window.onscroll = () =>{
				//滚动条滚动时距离顶部的距离
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
//				console.log(scrollTop)
				//可视化区域的高度
				var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
//				console.log(windowHeight)
				//滚动条的总高度
				var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
//				console.log(scrollHeight)
				//判断滚动条到底部的条件
				if(scrollTop + windowHeight == scrollHeight){
//					console.log("到底部了")
					this.pages++;
//					console.log('第几了')
//					console.log(this.pages)
					//提示出现
					this.load = true
					if(this.pages < 5){
						this.hodeData()
					}else{
//						console.log('没有啦')
						this.loadtext = "没有更多数据了"
						this.load = true
					}
				}
			}
		}
	}
</script>

<style scoped="scoped">
	@import '../../../assets/style/public.css';				
	a{color: black;}				
	.load-ing{text-align: center; padding: 0.3rem 0;}																		
</style>