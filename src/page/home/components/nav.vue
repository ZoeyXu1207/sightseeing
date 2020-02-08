<template>
	<div>
		<div class="nav">
			<router-link to='/'>
				<div>
					<img v-bind:src="shouye"/>
					<p>首页</p>
				</div>
			</router-link>
			<router-link to='/personal'>
				<div>
					<img v-bind:src="wode"/>
					<p>我的</p>
				</div>
			</router-link>
		</div>
	</div>
</template>
<script>
import shouyeb from '../../../assets/image/shouyeb.png'
import wodeb from '../../../assets/image/wodea.png'
export default{
	name:'home-nav',
	data(){
		return{
			shouye:shouyeb,
			wode:wodeb
		}
	}
}
</script>

<style scoped="scoped">
	@import '../../../assets/style/public.css'
</style>