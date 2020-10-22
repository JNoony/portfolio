const common = require('./common');

require('fullpage.js/dist/fullpage.css');
// require('../css/common.css');
require('../css/web.css');
const $ = require('jquery');

// This following line is only necessary in the case of using the option `scrollOverflow:true`
require('fullpage.js/vendors/scrolloverflow');

// scrollHorizontally: true,
// require('fullpage.js/vendors/fullpage.scrollHorizontally.limited.min');
require("../lib/fullpage.scrollHorizontally.min");
// require('fullpage.js/dist/fullpage.extensions.min');

const fullpage = require('fullpage.js/dist/fullpage.extensions.min');
// const fullpage = require('fullpage.js');

// This following line is optional. Only necessary if you use the option css3:false and you want to use other easing effects rather than "easeInOutCubic".
// css3:false를 쓰실 때 라이브러리에 들어있는 효과(easeInOutCubic) 이외에 다른 easing 효과를 쓰고 싶으시다면 easing 파일를 추가
// require('fullpage.js/vendors/easings');



var myFullpage = new fullpage('#fullpage', {
  verticalCentered: false, //align
  css:false,
  //Navigation
  menu: '#mainGnb',
  //lockAnchors: false,
  anchors: [ 'main', 'reservation', 'quest', 'tutorial', 'share'],
  // licenseKey:'pHR2tjRG-QQxsr5VV-pR4SG8s7-6nxjYnSF',
  licenseKey:'AEA52602-0E8B4272-9926ED70-934E663C',
  //anchors: [ 'anchor2', 'anchor3'.'anchor4'],
  //navigation: true,
  //navigationPosition: 'right',
  //navigationTooltips: ['First page', 'Second page', 'Third and last page,','last'],
  // scrollOverflow: true,//page내에 스크롤
  touchSensitivity: 15,
  onLeave: function(origin, destination, direction){

      if(destination.index==0 && !document.getElementById("bgVideo").hasAttribute("data-autoplay")){
        document.getElementById("bgVideo").setAttribute("data-autoplay","1");
      }

  },
  // continuousHorizontal: true,
  scrollHorizontally: true,
  scrollHorizontallyKey: 'QU5ZX2pXQWMyTnliMnhzU0c5eWFYcHZiblJoYkd4NVExcg==',
	// 	afterSlideLoad: function(section, origin, destination, direction){
	// 		console.log({
	// 			section: section,
	// 			origin: origin,
	// 			destination: destination,
	// 			direction: direction
	// 		});
	// 	},
	// 	onSlideLeave: function(section, origin, destination, direction){
	// 		console.log({
	// 			section: section,
	// 			origin: origin,
	// 			destination: destination,
	// 			direction: direction
	// 		});
	// 	}
});

/**************  웹용 코드*************************/
// $('#page3rd_sub>li').on('click',function(){ fullpage_api.moveTo(3); });
// $('#page4th_sub>li').on('click',function(){ fullpage_api.moveTo(4); });


//메인로고 change
// setTimeout(function(){
//     $('.main_contents .con_tit img').attr('src','./images/video/main_logoOff.gif');
// }, 900);

//튜토리얼 - 월드맵 팝업
// $('#page3Map area').on('click',function(){
//   common.displayModal(true,$(this).data('name'),"slide");
// });
$('#mapDiv .map_area').on('click',function(e){
  e.preventDefault();
  common.displayModal(true,$(this).data('name'),"slide");
});

// $('.modal').is(':visible') ? console.log('dfae') : fullpage_api.setAllowScrolling(true);

/*************************
*  Images - Slider
*************************/
var slideWrap = document.querySelector('.slide_wrap');
var slider = document.getElementById('slideImg');
var slideLi = document.querySelectorAll('#slideImg li');
var slidePrev = document.querySelector('.slide_wrap .slide_prev');
var slideNext = document.querySelector('.slide_wrap .slide_next');
var num = 0;
var slideLength = slideLi.length;
var wid =slider.offsetWidth;

// ul너비 li갯수에 맞춰 설정
slider.style.width = wid*slideLength + 'px';
//slide navi 생성 - 이미지 슬라이드 갯수에 따라
var sliderNavi = function(leg){
    elem = document.createElement('ul');
    elem.id = 'slideNavi';
    elem.className = 'slide_navi';
    for(var j=0;j<leg;j++){
        elem.innerHTML += '<li class="imgSlide_nav imgSlide_nav'+j+'"></li>';
    }
    slideWrap.appendChild(elem);
};
sliderNavi(slideLength);
document.querySelector('.imgSlide_nav').classList.add('on');//first navi on

//click image move, navi active(class name = on)
var sliderClickHandler = function(num){
    slider.style.left = -wid*num +'px';
    slider.style.transition = '.4s';
    $('.imgSlide_nav').eq(num).addClass('on').siblings('li').removeClass('on');
};

common.addEvent(slideNext, 'click', function (e) {
  e.preventDefault();
  num++;
  if ( num > slideLength-1 ) num = 0;
  sliderClickHandler(num);
}, false);

common.addEvent(slidePrev,'click', function (e) {
  e.preventDefault();
  num--;
  if ( num < 0 ) num = slideLength-1;
  sliderClickHandler(num);
}, false);
