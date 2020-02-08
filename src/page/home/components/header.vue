<template>
	<div>
		<router-link to="/search">
		<div class="search">
			<img src="../../../assets/image/feizhu.png"/>
			<input type="text" disabled="disabled" placeholder="输入目的地/攻略/游记" />
		</div>
		</router-link>
	</div>
</template>

<script>
export default{
	name:'home-header'
}
</script>

<style scoped="scoped">
	.search{display: flex; height: 1rem;
			align-items: center;
			padding: 0 0.2rem;}
	.search img{width: 2rem;
				height: .76rem;
				padding-right: 0.1rem;}
	.search input{height: 0.4rem;
					width: 100%;
					border-radius: 0.3rem;
					padding: 0.06rem 0.2rem;
					font-size: 0.26rem;}							
</style>