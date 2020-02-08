<template>
	<div>
		<Header></Header>
		<Collect></Collect>
	</div>
</template>

<script>
import Header from './components/header'	
import Collect from './components/collect'	

export default{
	name:'mycollection',
	components:{
		Header,
		Collect
	}
}
</script>

<style>
</style>