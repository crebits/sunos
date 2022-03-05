<template>
  <div>
    <gnbs></gnbs>  
    <div class="home-area">
      <em class="wave"></em>  
      <div class="title-area">
        <h1 class="sunos">Suno's</h1>
      </div>    

      <div class="profile">
        <h2 class="title">About Me</h2>
        <a href="https://happy-hyena-04e.notion.site/1d41883c387146efa906a93515cc4100" class="career" target="_blank">경력기술서 링크</a>
    
        <div class="content">
          <ul class="profile-list">
            <li><strong>Name</strong><span>최선호</span></li>
            <li><strong>Birth</strong><span>1986.09.02</span></li>
            <li><strong>Phone</strong><span>010-6690-5674</span></li>
            <li><strong>E-mail</strong><span>sunocf@gmail.com</span></li>            
            <li>
              <strong>Skill</strong>
              <span>
                Javascript, Typescript<br/>
                React, React Native, Vue<br/>
                Node.js<br/>
                HTML, CSS<br/>
                Amazon Web Services<br/>
                Sketch, Zeplin, Photoshop
              </span>
            </li>
            <li><strong>Career</strong>
              <span>
                <span class="not-desc"><strong>이컴라인</strong> / 2010.06 ~ 2011.03</span><br>
                <span class="not-desc"><strong>시도우</strong> / 2011.06 ~ 2012.08</span><br>
                <span class="not-desc"><strong>판도라티비</strong> / 2013.05 ~ 2016.08</span><br>
                <span class="not-desc"><strong>커머스랩</strong> / 2017.07 ~ 2018.08</span><br>
                <span class="not-desc"><strong>카이퍼랩</strong> / 2018.10 ~ 2020.05</span><br>
                <strong>NS홈쇼핑</strong> / 2020.07 ~ 
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Gnbs from '../components/Gnb.vue'

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
    // document.querySelector('.gnb-area').children[0].className = this.isActive
  },
}
</script>

<style>
@keyframes title {
    0% {
      top: -120%;
      opacity: 0;
    }

    32% {
      top: 50%;
      opacity: 1;
    }

    47% {
      top: 35%;
    }

    65% {
      top: 50%;
    }

    80% {
      top: 45%;
    }

    100% {
      top: 50%;
    }
}

@keyframes slide-top {
  0% {
    transform: translateY(0);
  }

  65% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-100%);
  }
}



@keyframes wave {
  0% {
    transform: translateX(-50%) scale(0) rotateX(85deg);
    opacity: 1;
  }
  
  100% {
    transform: translateX(-50%) scale(3.5) rotateX(85deg);
    opacity: 0;
  }
}

html,
body,
#__nuxt,
#__layout,
#__layout>div,
.container,
.profile,
.title-area {
  height: 100%;
}

.home-area{
  height: 100%;
  transform: translateY(-100%);
}

.ani {
  animation: slide-top 6s ease;
}

.home-area::before,
.home-area::after,
.home-area .wave {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) scale(0) rotateX(85deg);
  background: rgba(255,255,255,0.7);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  opacity: 0;
}

.home-area::before {
  animation: wave 2.5s 0.3s linear;
}

.home-area::after {
  animation: wave 2.5s 0.9s linear;
}

.home-area .wave {
  animation: wave 2.5s 1.4s linear;
}

.sunos {
  width: 100%;
  animation: title 1.5s;
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

.profile {
  max-width: 600px;
}

.profile h2.title {
  margin-bottom: -15px;
  background: #000;
  display: inline-block;
  padding:20px 0;
}

.profile .content {
  padding:30px 0 0;
}

.profile .intro  {
  font-size: 26px;
  color: #999;
  text-shadow: 0 -2px 0 #fff;
}

.profile-list {
  margin: 0 20px;
  padding-bottom: 50px;
}

.profile-list li {
  margin: 10px 0 0;
  line-height: 30px;
  text-align:left;
  color: #fff;
  font-size: 20px;
}

.profile-list li>strong, .career {
  display: inline-block;
  font-family:'Varela Round', sans-serif;
}

.career {
  float: right;
  font-size: 20px;
  padding:12px 12px 11px;
  color: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
  transition: all .3s;
  cursor: pointer;
  margin-top: 13px;
}

.career:hover {
  background-color: #999;
  border: 1px solid #999
}

.profile-list li>strong {
  width: 80px;
  vertical-align: top;
}

.profile-list li span {
  display: inline-block;
}

.profile-list li .not-desc {
  text-decoration: line-through;
  color: #666;
}

.profile-list li img {
  height:35px;
  margin-right: 10px;
}

@media all and (max-width: 500px) {	
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
  
  .home-area::before,
  .home-area::after,
  .home-area .wave {
    width: 150px;
    height: 150px;
    top: 48%;
  }
  
	.profile, #order {
    padding: 50px 5% 0;
  }

  .profile .content {
    padding: 10px 0 0;
  }

  .profile h2.title {
    margin-bottom:0;
    margin-left: 0;
    padding-left:0;
  }

  .career {
    font-size: 15px;
    padding: 10px;
  }

	.profile-list {
    width:100%;
    margin: 0 10px;
  }

	.profile-list li {
    font-size:18px;
    line-height:26px;
  }
}
</style>
