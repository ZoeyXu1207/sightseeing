<template>
	<div>
		<div class="search">
			<input type="text" placeholder="请输入目的地/攻略" v-model="keyworld" @keyup.enter="submit"/>
			<router-link to="/">
			<p>取消</p>
			</router-link>
		</div>
		
		<!--搜索出来的内容-->
		<div v-if="searchcont">
			<div v-for="item in resule">
			<router-link :to="'/container/' + item.id">
				<div class="content">
					<div class="content-image">
						<img :src="item.name.image"/>
					</div>
					<div class="content-list">
						<div class="content-name">{{item.name.name}}</div>
						<div class="content-biao">
							<p>{{item.name.title}}</p>
						</div>
					</div>
				</div>
			</router-link>	
			</div>	
		</div>
		
		<!--没有搜索到-->
		<div class="nosearch" v-else>
			<img src="../../assets/image/rekong.png"/>
		</div>
		
	</div>
</template>

<script>
import { searchIng } from '../../api/api';	
export default{
	name:'search',
	data(){
		return{
			//搜索词
			keyworld:'',
			//搜索结果
			resule:[],
			searchcont:true
		}
	},
	methods:{
		submit(){
//			console.log(this.keyworld)
			searchIng(this.keyworld)
				.then((res) => {
//					console.log(res)
					var searchdata = res.data;
			
					if(searchdata.length !== 0){
						this.resule = searchdata
						this.searchcont = true
					}else{
						this.searchcont = false
					}
				})
				.catch((error) => {
//					console.log(error)
				})
		}
	}
}
</script>

<style scoped="scoped">
	@import '../../assets/style/public.css';	
	.search{display: flex; height: 1rem;
			align-items: center;
			padding: 0 0.2rem;}
	.search input{height: 0.5rem;
					width: 100%;
					border-radius: 0.1rem;
					padding: 0.06rem 0.2rem;
					font-size: 0.26rem;
					background: #ececec;}	
	.search p{width: 1.2rem;
				height: 0.5rem;
				text-align: center;
				line-height: 0.5rem;
				color: #f39c11;
				margin-left: 0.2rem;}	
	.nosearch{text-align: center;}
	.nosearch img{width: 60%;}		
	a{color: black;}								
</style>