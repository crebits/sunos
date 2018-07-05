<template>
    <div>
      <gnbs></gnbs>
      
      <div id="project">
			<h2 class="title">Portfolio</h2>	
	
			<div class="content">
				<div id="proj_list" class="project_list">

					<div class="list" v-for='(port, index) in portList' :key='index'>
						<p class="thum">
							<!-- <img src='http://localhost:3000img/07_s.jpg'/> -->
							<img :src='port.iname'/>
						</p>
						<div class="txt_area">
							<p class="txt"><strong>{{ port.client }}</strong></p>
							<p class="txt">{{port.option}}</p>
							<a :href='port.alink' :class="port.cname">{{port.linkTxt}}</a>
						</div>
					</div>

				</div>
			</div>
		</div>
    </div>
</template>

<script>
import Gnbs from './inc/Gnb.vue'

export default {
  name : "Portfolio",
  components : {
    Gnbs
  },
  data () {
    return {
	  isActive : "active",
	  portList : [
		  {iname : 'img/22_s.jpg', client : 'LG전자', option : '웹표준/웹접근성 by 2017', alink : 'http://www.lge.co.kr/', cname : 'btn_link', linkTxt : 'LINK'},
		  {iname : 'img/21_s.jpg', client : '판도라티비', option : '웹/모바일/반응형 by 2016', alink : 'http://www.pandora.tv/', cname : 'btn_link', linkTxt : 'LINK'},
		  {iname : 'img/20_s.jpg', client : '프리즘', option : '반응형 by 2016', alink : 'http://theprism.kr/', cname : 'btn_link', linkTxt : 'LINK'},
		  {iname : 'img/19_s.jpg', client : '그리드인코딩', option : '홈페이지 구축 by 2016', alink : 'http://www.gridencoding.com/', cname : 'btn_link', linkTxt : 'LINK'},
		  {iname : 'img/18_s.jpg', client : '아이앱', option : '웹/모바일/반응형 by 2015', alink : '/#/portfolio', cname : 'no_link', linkTxt : 'NO LINK'},
		  {iname : 'img/17_s.jpg', client : 'KMPlayer', option : '홈페이지 구축 by 2016', alink : 'http://www.kmplayer.com/', cname : 'btn_link', linkTxt : 'LINK'},
		  {iname : 'img/16_s.jpg', client : '판도라 게임 TV', option : '반응형 by 2014', alink : 'http://game.pandora.tv/', cname : 'btn_link', linkTxt : 'LINK'},
		  {iname : 'img/15_s.png', client : '젤리팟', option : '웹/모바일/반응형 by 2013', alink : 'http://www.jellypod.com/', cname : 'btn_link', linkTxt : 'LINK'},
		  {iname : 'img/14_s.jpg', client : '에브리온 TV', option : '홈페이지 구축 by 2016', alink : 'http://www.everyon.tv/', cname : 'btn_link', linkTxt : 'LINK'},
		  {iname : 'img/13_s.jpg', client : '젤리캠', option : '하이브리드 모바일 앱 by 2013', alink : 'http://www.jellycam.com/', cname : 'btn_link', linkTxt : 'LINK'},
		  {iname : 'img/12_s.png', client : '신한카드', option : '웹표준/접근성 by 2013', alink : 'http://www.shinhancard.com/', cname : 'btn_link', linkTxt : 'LINK'},
		  {iname : 'img/11_s.jpg', client : '미디어크리에이트', option : '웹표준/접근성 by 2013', alink : 'http://www.mediacreate.co.kr/', cname : 'btn_link', linkTxt : 'LINK'},
		  {iname : 'img/10_s.png', client : '삼성카드', option : '웹표준/접근성 by 2013', alink : 'http://www.samsungcard.com/csr/', cname : 'btn_link', linkTxt : 'LINK'},
		  {iname : 'img/09_s.jpg', client : 'Cj채용', option : '웹표준/접근성 by 2013', alink : 'http://recruit.cj.net/', cname : 'btn_link', linkTxt : 'LINK'},
		  {iname : 'img/08_s.jpg', client : '롯데리조트', option : '웹표준/접근성 by 2012', alink : 'http://www.lottejejuresort.com/', cname : 'btn_link', linkTxt : 'LINK'},
		  {iname : 'img/07_s.jpg', client : 'T world shop', option : '웹표준/접근성 by 2012', alink : 'http://www.tworldshop.co.kr/', cname : 'btn_link', linkTxt : 'LINK'},
		  {iname : 'img/06_s.jpg', client : '오케이아웃도어', option : '웹표준/접근성 by 2012', alink : 'http://www.okoutdoor.com/', cname : 'btn_link', linkTxt : 'LINK'},
		  {iname : 'img/05_s.jpg', client : '대우증권', option : '하이브리드 앱 by 2011', alink : '/#/portfolio', cname : 'no_link', linkTxt : 'NO LINK'},
		  {iname : 'img/04_s.jpg', client : '교육학술정보원', option : '웹표준/접근성 by 2011', alink : 'http://www.keris.or.kr/', cname : 'btn_link', linkTxt : 'LINK'},
		  {iname : 'img/03_s.jpg', client : '금융감독원', option : '웹표준/접근성 by 2011', alink : 'http://www.fss.or.kr/', cname : 'btn_link', linkTxt : 'LINK'},
		  {iname : 'img/02_s.jpg', client : '조달청', option : '웹표준/접근성 by 2010', alink : 'http://www.pps.go.kr/', cname : 'btn_link', linkTxt : 'LINK'},
		  {iname : 'img/01_s.jpg', client : '국립공원관리공단', option : '웹표준/접근성 by 2010', alink : 'http://www.knps.or.kr/', cname : 'btn_link', linkTxt : 'LINK'}
	  ]
    }
  },
  mounted () {
    document.querySelector('.gnb_area').childNodes[1].className = this.isActive
  }
}
</script>

<style>
#project{width:80%;margin:0 auto;}
.project_list { overflow:hidden;}
.project_list .list { float:left; width:25%;height:300px; margin-left:-1px; transition:all 0.5s ease;position: relative;overflow: hidden;}
.project_list .list .thum { margin:0;overflow:hidden; }
.project_list .list .thum img {height:450px;position:absolute;left:50%;top:50%;transform: translate(-50%, -50%); -webkit-transition: all .3s ease-in-out;
-moz-transition: all .3s ease-in-out;
-ms-transition: all .3s ease-in-out;
-o-transition: all .3s ease-in-out;
transition: all .3s ease-in-out;}
.project_list .list:hover .thum img{-webkit-transform: scale(1.1);transform: scale(2.1);opacity: 0;}
.project_list .list .txt_area{width:100%;position:absolute;left:-30%;top:50%;margin-top:-50px;opacity:0;-webkit-transition: all .6s ease-in-out;
-moz-transition: all .6s ease-in-out;
-ms-transition: all .6s ease-in-out;
-o-transition: all .6s ease-in-out;
transition: all .6s ease-in-out;text-align:center;transform: skewY(7deg);-moz-transform: skewY(7deg);-ms-transform: skewY(7deg);-webkit-transform: skewY(7deg);}
.project_list .list:hover .txt_area{opacity:1;left:0;}
.project_list .list .txt { color:#555; margin-bottom:10px }
.project_list .list .txt strong {font-size:16px;}
.project_list .list:hover { background:rgba(0,0,0,0.7); }
.project_list .list:hover .txt,
.project_list .list:hover .txt strong { color:#fff; }
.btn_link, .no_link{
    display:block;
    width: 40%;
    font-size: 16px;
    line-height: 36px;
    font-weight:bold;
    text-transform:uppercase;
    margin: 20px auto 0;
    text-align:center;
    color:#fff;
    border-radius: 4px;
    background-color: #52d3aa;
    background-image: -webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0, #3f95ea), color-stop(1, #52d3aa));
    background-image: -webkit-repeating-linear-gradient(top left, #3f95ea 0%, #52d3aa 100%);
    background-image: repeating-linear-gradient(to bottom right, #3f95ea 0%, #52d3aa 100%);
    background-image: -ms-repeating-linear-gradient(top left, #3f95ea 0%, #52d3aa 100%);
    }
.no_link{cursor:auto;}

@media all and (max-width:768px) {
.project_list .list { width:50%;  -webkit-box-sizing:border-box;  box-sizing:border-box; border-right:0 !important}
.project_list .list .thum {height: 150px;position: relative;}
.project_list .list .thum img{height:225px;}
.project_list .list .txt_area{opacity: 1;left: 0;position: static;margin-top:20px;}
.project_list .list .txt { color:#fff; margin-bottom:10px;}
.project_list .list .txt strong {font-size:16px;}
.btn_link, .no_link{width:90%;margin-top:10px}
.project_list .list:hover .thum img{opacity:1;}
}
</style>
