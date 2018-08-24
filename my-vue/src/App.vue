<template>
  <div id="app">
  	<Header></Header>
  	<Maincontent></Maincontent>
  	<Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Maincontent from './components/maincontent.vue'
import Footer from './components/footer.vue'

export default {
  components:{
			Header,
			Maincontent,
			Footer
	}
}
</script>

<style>
		*{
			margin: 0;
			padding: 0;
		}
</style>
