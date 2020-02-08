<template>
	<div>
		<swiper :options="swiperOption">
    <!-- slides -->
	    <swiper-slide v-for="item in banner" :key="item.id">
	    	<img :src="item.image"/>
	    </swiper-slide>
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
	</div>
</template>

<script>
import { banner } from '../../../api/api'
export default{
	name:'swiperhome',
	data(){
		return{
			swiperOption:{
				pagination:'.swiper-pagination',
				loop:true,
				autoplay:2000
			},
			banner:[]
		}
	},
	mounted(){
		banner({
		})
		.then((res)=> {
//			console.log(res)
			this.banner = res.data
		})
		.catch((error)=> {
//			console.log(error)
		})
	}
}
</script>

<style>
</style>