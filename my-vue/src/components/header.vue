<template>
	<div id="header">
		<span>header area</span>
		<button @click="toggle()">toggle</button>
	</div>
</template>

<script>
	export default{
		methods:{
			toggle: function(){
				if(this.$store.state.maincontent.show){
					this.$store.state.maincontent.show = false;
				}else{
					this.$store.state.maincontent.show = true;
				}
			}
		}
	}
</script>

<style>
	#header{
		position: fixed;
		top: 0;
		height: 80px;
		line-height: 80px;
		width: 100%;
		border: 1px solid gray;
		box-shadow: 0 3px 5px gray;
		text-align: center;
	}
</style>