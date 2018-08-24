<template>
	<div id="footer">
		<ul>
			<li><i class="fa fa-home"></i>Home</li>
			<li>Discover</li>
			<li>Cart</li>
			<li>User</li>
		</ul>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
	#footer{
		position: fixed;
		bottom: 0;
		height: 50px;
		width: 100%;
		background-color: cornflowerblue;
		text-align: center;
		line-height: 50px;
		box-shadow: 0 -3px 5px gray;
		
	}
	
	ul{
		list-style-type: none;
	}
	
	li{
		float: left;
		width: 25%;
		min-width: 100px;
		text-align: center;
	}
</style>
