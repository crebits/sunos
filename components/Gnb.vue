<template>
  <transition name="test" mode="out-in">
    <ul class="gnb-area">
        <li v-for='(list, index) in linklist' :key='index' :class='list.class' @click='gnbClick(index)'>
            <router-link :to='list.link'>{{ list.content }}</router-link>
        </li>
    </ul>
  </transition>
</template>

<script>
export default {
  name : "Gnb",
  data() {
      return {
          isActive : "active",
          linklist : [
              {content: 'HOME', link: '/', class: 'home'},
              {content: 'Portfolio', link: '/portfolio', class: 'portfolio'},
              // {content: 'About Me', link: '/about'},
              // {content: 'Contact', link: '/contact'}
          ],
          first: true
      }
  },
  mounted() {
    const home = document.querySelector('.home');
    const port = document.querySelector('.portfolio');
    const path = this.$route.path;
    path === "/" ? home.classList.add(this.isActive) : port.classList.add(this.isActive);
  },
  methods: {
    gnbClick(idx) {
        const gnb = document.querySelector('.gnb-area');
        for(let i = 0; gnb.children.length>i; i++){
          gnb.children[i].classList.remove(this.isActive)
        }
        
        gnb.children[idx].classList.add(this.isActive)
    }
  },
  transition: {
      name: 'test',
      mode: 'out-in'
  },
}
</script>

<style>
.gnb-area {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999999;
  text-align: center;
  padding: 10px 0;
}

.gnb-area li {
  display: inline-block;
  position: relative;
}

.gnb-area li a {
  display: block;
  padding: 10px 30px;
  color: #fff;
  font-size: 16px;
}

.gnb-area li a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: #fff;
  transition: transform 0.7s;
  transform: scale3d(0, 1, 1);
}

.gnb-area li.active a::before {
  transform: scale3d(1, 1, 1);
  height: 1px;
}

.page-enter-active {
  animation: bounce-in .5s;
}

.page-leave-active {
  animation: bounce-in .5s reverse;
}

@media all and (max-width: 768px) {
	.gnb-area li {
    width: 25%;
    text-align: center;
    line-height: 30px;
  }

	.gnb-area li a {
    padding: 0;
  }
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}
</style>
