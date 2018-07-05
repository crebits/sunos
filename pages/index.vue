<template>
  <section class="container">
    <gnbs></gnbs>    
		<div class="home">
			<h1 class="sunos">Suno's</h1>
		</div>
  </section>
</template>

<script>
import Gnbs from './inc/Gnb.vue'

export default {
  components: {
    Gnbs
  },
  data () {
    return {
      isActive: 'active'
    }
  },
  mounted () {
    document.querySelector('.gnb_area').childNodes[0].className = this.isActive
  }
}
</script>

<style>
.home{padding:350px 0;}
h1.sunos{animation-name: title;animation-duration:1.2s;font-family: 'Kaushan Script', sans-serif;font-size: 100px;text-align: center;color: #fff;line-height: 101px;position:relative;}

@media all and (max-width:768px) {	
	#home{padding:70px 0 45px;}
	h1.sunos{font-size:50px;line-height:51px;}
}
</style>
