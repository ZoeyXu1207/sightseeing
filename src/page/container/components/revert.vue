<template>
	<div>
		<!--<router-link to='/'>-->
			<div class="header-abs" v-show="showVet" v-on:click="back">
				<img src="../../../assets/image/fanhui.png"/>
			</div>
		<!--</router-link>-->
		<div class="header-fixed" v-show="!showVet">
			<!--<router-link to='/'>-->
			<div class="header-fixed-back" v-on:click="back">
				<img src="../../../assets/image/fanhui.png"/>
			</div>
			<!--</router-link>-->
			{{this.culum}}
		</div>
	</div>
</template>

<script>

	export default{
		name:'revert',
		props:{
			culum:''
		},
		data(){
			return{
				showVet:true
			}
		},
		methods:{
			revert(){
				var add = document.documentElement.scrollTop || document.body.scrollTop
//				console.log(add)
				if(add > 60){
					this.showVet = false
				}else{
					this.showVet = true
				}
			},
			back(){
				this.$router.go(-1);//返回上一层
			}
			
		},
		//滚动监听
		created(){
			window.addEventListener('scroll', this.revert)
		},
		
	}
</script>

<style scoped="scoped">
	@import '../../../assets/style/public.css';
	.header-abs{position: absolute;
				left: .2rem;
				top: .2rem;
				width: .8rem;
				height: .8rem;
				line-height: .8rem;
				text-align: center;
				border-radius: 50%;
				background: rgba(0,0,0,0.8);}
	.header-abs img{width: .6rem; color: white;}	
						
</style>