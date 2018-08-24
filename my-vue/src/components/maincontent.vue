<template>
	<div id="maincontent" v-if="this.$store.state.maincontent.show">
		<h1>{{msg}}</h1>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
		/*mounted: function() {
			for(var i = 0; i < 200; i++) {
				var p = document.createElement("p");
				var text = document.createTextNode("content");
				p.appendChild(text);

				document.getElementById("maincontent").appendChild(p);
			}
		}*/
	}
</script>

<style scoped>
	#maincontent {
		height: 50px;
		background-color: cadetblue;
		margin-top: 80px;
	}
	h1{
		margin: 0;
		padding: 0;
		color:purple;
	}
</style>