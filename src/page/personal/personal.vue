<template>
	<!--我的页面，大组件，父组件-->
	<div>
		<My></My>
		<Business></Business>
		<Naver></Naver>
	</div>	
</template>

<script>
import Naver from './components/nav'	
import My from './components/my'
import Business from './components/business'
export default{
	name:'personal',
	components:{
		Naver,
		My,
		Business
	}
}
</script>

<style>
</style>