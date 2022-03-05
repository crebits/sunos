<template>
    <div>
      <gnbs></gnbs>
      
      <div id="project">
			<h2 class="title">Portfolio</h2>	
	
			<div class="content">
				<ul id="proj_list" class="project-list">

					<li v-for='(port, index) in portList' :key='index' class="list" @click='flip(index)'>
						<div v-if="port.img" :class='{shadow : port.img}'>
							<div class="thum">
								<img :src='port.img'/>
								<div class="gradient top"></div>
								<div class="gradient bottom"></div>
							</div>
							<div class="txt-area">
								<p class="pro txt">{{ port.project }}</p>
								<p class="date txt">{{port.date}}</p>
								<!-- <p class="op txt">- {{port.option}} 프로젝트</p> -->
								<p v-for='(scription, idx) in port.scription' :key='idx' class="op txt">- {{scription}}</p>
								<div class="skill">
									<img v-for='(skill, i) in port.skill' :key='i' :src='"img/logo/" + skill + ".png"' :alt='skill' >
								</div>
							</div>
						</div>
					</li>

				</ul>
			</div>
		</div>
    </div>
</template>

<script>
import Gnbs from '../components/Gnb.vue'

export default {
  name : "Portfolio",
  components : {
    Gnbs
  },
  data () {
    return {
	  isActive : "active",
	  show: false,
	  layerData: null,
	  portList : [
		  {img : 'img/28_s.jpg', project : 'NS홈쇼핑', scription: ["개발 업무: 요구사항 요건 정리 / 리딩 및 개발", "운영 업무: 장애 발생 대응 및 버그 수정", "매니저 업무: 업무 우선순위 협의 및 협력업체 업무 요청 및 진행사항 확인"], date : '2020-07 ~ ', skill: ["vue", "scss", "html", "js"]},
		  {img : 'img/27_s.jpg', project : '덕후생활', scription: ["취향 선택 기능 개발", "친구맺기(follow / following) 개발", "마이페이지 개발", "웹뷰 페이지 제작 및 연동", "전체 레이아웃 및 애니매이션 개발"], date : '2019-05 ~ 2020-05', skill: ["react", "html", "css", "js"]},
		  {img : 'img/26_s.jpg', project : 'OBIDO', scription: ["계기판 서비스 연동", "팟캐스트 서비스 연동", "날씨 서비스 연동", "주문 서비스 연동", "전체 UI 개발"], date : '2019-11 ~ 2020-01', skill: ["vue", "scss", "html", "js"]},
		  {img : 'img/25_s.jpg', project : 'KwaveStar', scription: ["react native Web View 페이지 랜딩", "반응형 UI 개발", "사용자 인터랙션 개발"], date : '2018-10 ~ 2020-05', skill: ["html", "css", "js", "jquery", "react"]},
		  {img : 'img/24_s.jpg', project : '싱크커머스 cms', scription: ["클라이언트 데이터 연동", "UI 개발"], date : '2018-04 ~ 2018-07', skill: ["vue", "html", "css", "js",]},
		  {img : 'img/23_s.jpg', project : 'SPC', scription: ["클라이언트 데이터 연동", "반응형 UI 개발", "사용자 인터랙션 개발"], date : '2017-07 ~ 2018-09', skill: ["html", "css", "js"]},
		  {img : 'img/22_s.jpg', project : 'LG전자', scription: ["IE7 크로스브라우징", "반응형 UI 개발", "사용자 인터랙션 개발"], date : '2016-08 ~ 2017-03', skill: ["html", "css", "js", "jquery"]},
		  {img : 'img/21_s.jpg', project : '판도라티비', scription: ["IE6 크로스브라우징", "클라이언트 데이터 연동", "반응형 UI 개발", "사용자 인터랙션 개발"], date : '2013-05 ~ 2016-07', skill: ["html", "css", "js", "jquery"]},
		  {img : 'img/20_s.jpg', project : '코리아탑백', scription: ["반응형 UI 개발", "사용자 인터랙션 개발"], date : '2016-03 ~ 2016-07', skill: ["html", "css", "js", "jquery"]},
		  {img : 'img/19_s.jpg', project : '그리드인코딩', scription: ["데이터 시각화", "반응형 UI 개발", "사용자 인터랙션 개발"], date : '2015-10 ~ 2016-02', skill: ["html", "css", "js", "d3"]},
		  {img : 'img/18_s.jpg', project : '아이앱', scription: ["반응형 UI 개발", "사용자 인터랙션 개발"], date : '2014-05 ~ 2015-02', skill: ["html", "css", "js", "jquery"]},
		  {img : 'img/17_s.jpg', project : 'KMPlayer', scription: ["IE5 크로스브라우징", "반응형 UI 개발", "사용자 인터랙션 개발"], date : '2013-05 ~ 2016-07', skill: ["html", "css", "js", "jquery"]},
		  {img : 'img/16_s.jpg', project : '판도라 게임 TV', scription: ["반응형 UI 개발", "사용자 인터랙션 개발"], date : '2013-10 ~ 2013-12', skill: ["html", "css", "js", "jquery"]},
		  {img : 'img/15_s.jpg', project : '젤리팟', scription: ["반응형 UI 개발", "사용자 인터랙션 개발"], date : '2013-06 ~ 2013-10', skill: ["html", "css", "js", "jquery"]},
		  {img : 'img/12_s.png', project : '신한카드', scription: ["IE6 크로스브라우징", "웹접근성 마크 획득"], date : '2013-03 ~ 2013-05', skill: ["html", "css", "js", "jquery"]},
		  {img : 'img/10_s.png', project : '삼성카드', scription: ["IE6 크로스브라우징", "웹접근성 마크 획득"], date : '2013-01 ~ 2013-02', skill: ["html", "css", "js", "jquery"]},
		  {img : 'img/09_s.jpg', project : 'Cj채용', scription: ["IE6 크로스브라우징", "웹접근성 마크 획득"], date : '2012-11 ~ 2013-12', skill: ["html", "css", "js", "jquery"]},
		  {img : 'img/07_s.jpg', project : 'T world shop', scription: ["IE6 크로스브라우징", "반응형 UI 개발", "사용자 인터랙션 개발"], date : '2012-09 ~ 2012-10', skill: ["html", "css", "js", "jquery"]},
		  {img : 'img/08_s.jpg', project : '롯데리조트', scription: ["IE6 크로스브라우징", "사용자 인터랙션 개발"], date : '2012-07 ~ 2012-08', skill: ["html", "css", "js", "jquery"]},
		  {img : 'img/06_s.jpg', project : '오케이아웃도어', scription: ["IE6 크로스브라우징", "반응형 UI 개발", "사용자 인터랙션 개발"], date : '2012-01 ~ 2012-06', skill: ["html", "css", "js", "jquery"]},
		  {img : 'img/05_s.jpg', project : '대우증권', scription: ["반응형 UI 개발", "사용자 인터랙션 개발"], date : '2011-09 ~ 2011-12', skill: ["html", "css", "js", "jquery"]},
		  {img : 'img/04_s.jpg', project : '교육학술정보원', scription: ["IE6 크로스브라우징", "웹접근성 마크 획득"], date : '2011-06 ~ 2011-08', skill: ["html", "css", "js", "jquery"]},
		  {img : 'img/03_s.jpg', project : '금융감독원', scription: ["IE6 크로스브라우징", "웹접근성 마크 획득"], date : '2011-01 ~ 2011-03', skill: ["html", "css", "js"]},
		  {img : 'img/02_s.jpg', project : '조달청', scription: ["IE6 크로스브라우징", "웹접근성 마크 획득"], date : '2010-10 ~ 2010-12', skill: ["html", "css", "js"]},
		  {img : 'img/01_s.jpg', project : '국립공원관리공단', scription: ["IE6 크로스브라우징", "웹접근성 마크 획득"], date : '2010-06 ~ 2010-09', skill: ["html", "css", "js"]}
	  ]
    }
  },
  mounted () {
	// document.querySelector('.gnb-area').childNodes[1].className = this.isActive
  },
  methods: {
	flip: (idx) => {
		const list = document.querySelectorAll('.list');
		list[idx].childNodes[0].classList.toggle("flip")
	}
  } 
}
</script>

<style>
#project {
	width: 100%;
}

.project-list {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(240px, 240px));
    grid-gap: 14px;
	justify-content: center;
}

.project-list .list {
	width: 240px;
	height: 240px;
	position: relative;
}

.shadow {
	box-shadow: 0 1px 4px 0 rgba(225, 225, 225, 0.5);
}

.project-list .list > div {
	width: 100%;
	height: 100%;
	transition: all 1s ease;
	transform-style: preserve-3d;
	perspective: 1000px;
	border-radius: 14px;
}

.project-list .list .thum,
.project-list .list .txt-area {
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	backface-visibility: hidden;
	overflow: hidden;
	border-radius: 14px;
}

.project-list .list .thum {
	transform: rotateY(0);
}

.project-list .list .thum img {
	width: 100%;
	height: 100%;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}

.project-list .list .thum .gradient {
	width: 100%;
	height: 30%;
	position: absolute;
	left: 0;
}

.project-list .list .thum .gradient.top {
	background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
	top: 0;
}

.project-list .list .thum .gradient.bottom {
	background: linear-gradient(rgba(225, 225, 225, 0), rgba(225, 225, 225, 0.3));
	bottom: 0;
}

.project-list .list .thum .gradient .front-title {
	font-size: 18px;
	color: #fff;
	margin: 15px 0 0 20px;
}

.project-list .list .thum .gradient .front-sub {
	font-size: 12px;
	color: #fff;
	margin: 1px 0 0 20px;
}

.project-list .list .txt-area {
	display: flex;
	flex-direction: column;
	background: #fff;
	position: relative;
	transform: rotateY(180deg);
}

.project-list .list .txt {
	color: #000;
	text-align: left;
	width: calc(100% - 30px);
	padding: 0 15px;
}

.project-list .list .txt.pro {
	font-size: 20px;
	line-height: 24px;
	margin-top: 10px;
	font-weight: bold;
}

.project-list .list .txt.op {
	font-size: 13px;
	opacity: 0.8;
	line-height: 18px;
	margin-bottom: 3px;
	letter-spacing: -0.5px;
}

.project-list .list .txt.date {
	font-size: 12px;
	color: #999;
	line-height: 16px;
	margin-bottom: 10px;
}

.project-list .list .skill {
	position: absolute;
	right: 15px;
	bottom: 20px;
}

.project-list .list .skill img {
	height: 25px;
	margin: 0 3px;
}

.project-list .list:hover > div {
	transform: rotateY(180deg);
}

/* .btn-link {
    display: block;
	width: calc(100% - 30px);
	padding: 0 15px;
    font-size: 14px;
    color: rgba(0 0 0 / 60%);
	text-decoration: underline;
} */

@media all and (max-width: 500px) {
	.project-list {
		grid-template-columns: initial;
	}

	.project-list .list {
		width: 80vw;
		height: 80vw;
		margin: 7px;
		box-sizing:border-box;
	}

	.project-list .list:hover > div{
		transform: rotateY(0);
	}

	.project-list .list > div.flip{
		transform: rotateY(180deg);
	}
}
</style>
