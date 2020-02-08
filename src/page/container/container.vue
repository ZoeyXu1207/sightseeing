<template>
	<div>
		<Covers :culum = 'culum'
			    :images = 'images'
			    :album = 'album'></Covers>
		<Collect :productId = 'productId'></Collect>	    
		<Speech :culum = 'culum'
			    :lecturer = 'lecturer'
			    :article = 'article'></Speech>
		<Sliding :album = 'album'></Sliding>	    
		<Revert :culum = 'culum'></Revert>
		<!--<div style="height: 20rem;"></div>-->
	</div>
</template>

<script>
	import Covers from './components/covers'
	import Revert from './components/revert'
	import Sliding from './components/sliding'
	import Collect from './components/collect'
	import Speech from './components/speech'
	
	//引入攻略详情页
	import { goods } from '../../api/api'
	export default{
		name:'home-container',
		components:{
			Covers,
			Revert,
			Sliding,
			Collect,
			Speech
		},
		data(){
			return{
				productId:'', //取到攻略详情页的id
				culum:'',
				images:'',
				album:[],
				lecturer:'',
				article:''
			}
		},
		mounted(){
			goods(this.productId)
				.then((res) => {
//					console.log(res)
					var data = res.data
					//标题
					this.culum = data.curriculum
					//背景图片
					this.images = data.image
					//相册
					this.album = data.images
					//语音描述
					this.lecturer = data.lecturer
					//文章
					this.article = data.goods_desc
				})
				.catch((error) => {
//					console.log(error)
				})
		},
		created(){
			//取到列表页传过来的id值
			this.productId = this.$route.params.id;
//			console.log("当前详情页的id是多少")
//			console.log(this.productId)
		}
	}
</script>

<style>
</style>