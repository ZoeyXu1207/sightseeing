<template>
	<!--首页，大组件，父组件-->
	<div>
		<Header></Header>
		<Swiperhome></Swiperhome>
		<Ticket></Ticket>
		<Content></Content>
		<Naver></Naver>
	</div>
</template>

<script>
import Naver from './components/nav'
import Header from './components/header'
import Swiperhome from './components/swiper'
import Ticket from './components/ticket'
import Content from './components/content'
export default{
	name:'home',
	components:{
		Naver,
		Header,
		Swiperhome,
		Ticket,
		Content
	}
}
</script>

<style>
</style>