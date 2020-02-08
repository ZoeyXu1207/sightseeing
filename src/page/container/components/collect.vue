<template>
	<div>
		<div class="collect" v-if="notcoll" @click="noColl">
			<img src="../../../assets/image/weishoucang.png"/>
			<p>未收藏</p>
		</div>
		<div class="collect" v-else @click="canCel">
			<img src="../../../assets/image/yishou.png"/>
			<p>已收藏</p>
		</div>
	</div>
</template>

<script>
import cookie from '../../../axios/cookie.js';
import {getcoll, collect, delcoll} from '../../../api/api'
export default{
	name:'collect',
	props:{
		productId:''
	},
	data(){
		return{
			notcoll:true,
			collectplay:''
		}
	},
	//判断是否登录
	created(){
		console.log("当前景点的id" + this.productId)
		var productId = this.productId
		if(cookie.getCookie('token')){
			// 判断是否收藏
			getcoll(productId).then((res) => {
//				console.log("判断是否收藏")
//				console.log(res)
				this.notcoll = false
			}).catch((error) => {
//				console.log(error)
				this.notcoll = true
			})
		}else{
			this.notcoll = true;
//			console.log('没有登录')
		}
	},
	
	methods:{
//		收藏
		noColl(){
			if(cookie.getCookie('token')){
				collect({
					goods:this.productId
				}).then((res) => {
//					console.log(res)
					this.notcoll = false
				}).catch((error) => {
//					console.log(error)
				})
			}else{
				this.collectplay = '请登录后再收藏';
				this.showToast()
			}
		},
		
		//取消收藏
		canCel(){
			delcoll(this.productId).then((res) => {
//				console.log(res)
				this.notcoll = true
			}).catch((error) => {
//				console.log(error)
			})
		},
		
		//提示组件
		showToast(){
			this.$popups(this.collectplay)
		}
	}
}
</script>

<style scoped="scoped">
	.collect img{width: 0.5rem;}
	.collect p{font-size: 0.3rem; line-height: 1.8;}
	.collect{float: right;
			text-align: center;
			margin: 0.3rem 0.1rem;}
</style>