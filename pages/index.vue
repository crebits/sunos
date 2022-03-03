<template>
  <div>
    <gnbs></gnbs>    
    <div class="home">
      <h1 class="sunos">Suno's<div class="waves"></div></h1>
    </div>
  </div>
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
    document.querySelector('.gnb-area').children[0].className = this.isActive
  },
}
</script>

<style>
@keyframes title {
    0% {
      top:-1000px;
      opacity:0;
    }

    50% {
      top:50%;
      opacity:0;
    }

    60% {
      opacity:1;
    }

    80% {
      top:38%;
    }

    100% {
      top:50%;
    }
}

html,
body {
  height: 100%;
}

h1.sunos {
  width: 100%;
  animation-name: title;
  animation-duration: 1.3s;
  font-family: 'Kaushan Script', sans-serif;
  font-size: 100px;
  text-align: center;
  color: #fff;
  line-height: 101px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  text-shadow: 1px 1px 0 #919191,
        1px 2px 0 #919191,
        1px 3px 0 #919191,
        1px 4px 0 #919191,
        1px 5px 0 #919191,
        1px 6px 0 #919191,
        1px 7px 0 #919191,
        1px 8px 0 #919191,
        1px 9px 0 #919191,
        1px 10px 0 #919191,
    1px 18px 6px rgba(255,255,255,0.4),
    1px 22px 10px rgba(255,255,255,0.2)
}

.waves {
  position: absolute;
  left: 50%;
  top: 130%;
  transform: translateX(-50%) rotateX(78deg);

  /* background: rgba(255, 255, 255, 0.4); */
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: -1;
}

.waves::before,
.waves::after {
  content: '';
  position: absolute;
  background: #fff;
  margin-left: -125px;
  margin-top: -62px;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  animation: wave 3.8s 1.2s infinite linear;
  opacity: 0;
}

.waves::after {
  opacity: 0;
  animation: wave 3.8s 3s infinite linear;
}

@keyframes wave {
  0% {
    transform: scale(0) rotateX(50deg);
    opacity: 1;
  }
  
  25% {
    background: #2ecc71;
  }
  
  50% {
    background: #f1c40f;
  }
  
  75% {
    background: #e74c3c;
  }
  
  100% {
    transform: scale(3.5) rotateX(50deg);
    opacity: 0;
    background: #3498db;
  }
}

#__nuxt,
#__layout,
#__layout>div,
.container {
  height: 100%;
}

@media all and (max-width: 768px) {	
	#home {
    padding:70px 0 45px;
  }

	h1.sunos {
    font-size:50px;
    line-height:51px;
    text-shadow: 1px 1px 0 #919191,
          1px 2px 0 #919191,
          1px 3px 0 #919191,
          1px 4px 0 #919191,
          1px 5px 0 #919191,
          1px 6px 0 #919191,
          1px 7px 0 #919191,
          1px 8px 0 #919191,
          1px 9px 0 #919191,
          1px 10px 0 #919191,
      1px 14px 6px rgba(255,255,255,0.4),
      1px 18px 10px rgba(255,255,255,0.2)
  }

.waves {
  top: 107%;
}

  .waves::before,
  .waves::after {
    margin-left: -75px;
    margin-top: -37px;
    width: 150px;
    height: 150px;
  }
}
</style>
