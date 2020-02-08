<template>
	<div class="colldata">
		<div v-for="item in colldata">
			<router-link :to="'/container/' + item.goods.id">
				<div class="content">
					<div class="content-image">
						<img :src="item.goods.name.image"/>
					</div>
					<div class="content-list">
						<div class="content-name">{{item.goods.name.name}}</div>
						<div class="content-biao">
							<p>{{item.goods.name.title}}</p>
						</div>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
import {mycoll} from '../../../api/api'	
export default{
	name:'collect',
	data(){
		return{
			colldata:[]
		}
	},
	//请求收藏列表
	mounted(){
		mycoll({
		}).then((res) => {
//			console.log(res)
			this.colldata = res.data
		}).catch((error) => {
//			console.log(error)
		})
	}
}
</script>

<style scoped="scoped">
	@import '../../../assets/style/public.css';				
	a{color: black;}
	.colldata{margin-top: 0.8rem;}
</style>