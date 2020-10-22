const common = require('./common');
require('swiper/dist/css/swiper.css');
const Swiper = require('swiper/dist/js/swiper');
// require('fullpage.js/dist/fullpage.css');
// require('../css/common.css');
require('../css/mobile.css');

// const fullpage = require('fullpage.js/dist/fullpage.extensions.min');
const $ = require("jquery");
require("image-map-resizer/js/imageMapResizer");


// var deviceHeight = window.innerHeight;
// $('section').height(deviceHeight)

const slideSectionIds = Array.from(document.getElementsByTagName('section'), x => x.id);

var prevY;
var prevX;
$(document).bind('touchstart', function(e) {

  let isSlide = $(e.target).parents('.image_slider, .swiper-wrapper, .modal_img, .modal_slideImg').length;

  if (isSlide) {
    $('*').unbind('touchmove', false);
  } else {
    $('*').bind('touchmove', false);
  }
  prevY = e.originalEvent.touches[0].clientY;
  prevX = e.originalEvent.touches[0].clientX;
});

$(document).bind('touchend', function(e) {

  let isSlide = $(e.target).parents('.image_slider, .swiper-wrapper, .modal_img, .modal_slideImg').length;
  let isSlidePopup = $(e.target).parents('#modalImg').length;

  if (isSlide) {
    if (!isSlidePopup) {
      var destY = e.originalEvent.changedTouches[0].clientY;
      var destX = e.originalEvent.changedTouches[0].clientX;
      if (Math.abs(prevX - destX) < Math.abs(prevY - destY)) {
        if (prevY > destY + 5) {
          slide_down(e.target);
        } else if (prevY < destY - 5) {
          slide_up(e.target);
        }
      }
    }
  } else {
    var destY = e.originalEvent.changedTouches[0].clientY;

    if (prevY > destY + 5) {
      slide_down(e.target);
    } else if (prevY < destY - 5) {
      slide_up(e.target);
    }
  }
});


/*p_main*/
const slide_up = function(el) {
  // console.log(el)

  let nextSectionIndex = (slideSectionIds.indexOf(el.closest('section').id) - 1);
  if (nextSectionIndex == -1) {
    return false;
  }

  // 화면 이동 0.8초(800)
  $("html,body").stop().animate({
    scrollTop: $('#' + slideSectionIds[nextSectionIndex]).offset().top + 'px'
  }, {
    duration: 500,
    complete: function() {}
  });
}
const slide_down = function(el) {

  let nextSectionIndex = (slideSectionIds.indexOf(el.closest('section').id) + 1);
  if (nextSectionIndex == slideSectionIds.length) {
    return false;
  }

  // 화면 이동 0.8초(800)
  $("html,body").stop().animate({
    scrollTop: $('#' + slideSectionIds[nextSectionIndex]).offset().top + 'px'
  }, {
    duration: 500,
    complete: function() {}
  });
}

/**************  모바일용 코드*************************/
/*
$('section').on("touchmove mousewheel DOMMouseScroll", function (e) {
   e.preventDefault();
   var delta = 0;
   if (!event) event = window.event;
   if (event.wheelDelta) {
       delta = event.wheelDelta / 120;
       if (window.opera) delta = -delta;
   } else if (event.detail) delta = -event.detail / 3;
   var moveTop = null;
   console.log(event);
   // 마우스휠을 위에서 아래로
   if (delta < 0) {
       if ($(this).next() != undefined) {
           moveTop = $(this).next().offset().top;
       }
   // 마우스휠을 아래에서 위로
   } else {
       if ($(this).prev() != undefined) {
           moveTop = $(this).prev().offset().top;
       }
   }
   // 화면 이동 0.8초(800)
   $("html,body").stop().animate({
       scrollTop: moveTop + 'px'
   }, {
       duration: 800, complete: function () {
       }
   });
});
*/


/********************************
 * Main Menu
 *********************************/
const head = document.querySelector('header');
const mGnbBtn = document.querySelector('.head_gnbBtn');
const nav = document.querySelector('.m_gnb');
var gnbBg = document.querySelector('.m_gnb_bg')
var cnt = 0;

//ios 메뉴버튼 클릭시 바디스크롤 막기/해제
function scrollOff() {
  $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function(e) {
    e.preventDefault();
  });
  $('html,body').css({
    overflow: 'hidden'
  });
}

function scrollOn() {
  $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
  $('html,body').css({
    overflow: ''
  })
}

function clickEventHandler() {
  cnt++;
  $(this).toggleClass('clickbtn');
  nav.classList.toggle('on');
  // nav.classList.add('on');
  cnt % 2 == 1 ? scrollOff() : scrollOn();

}
// mGnbBtn.addEventListener('click', clickEventHandler );
$('.head_gnbBtn').on('click', function() {
  clickEventHandler();
  //console.log('afef')
})

// 메뉴 누르면 이동
$('#mainGnb li').click(function() {
  var pageId = $(this).find('a').attr('href');
  var offset = $(pageId).offset().top;
  nav.classList.remove('on');
  scrollOn();
  $('html, body').animate({
    scrollTop: offset
  }, 400);
})

//메뉴 배경 눌럿을때
$('.m_gnb_bg').on('click ', function() {
  if (nav.style.display = "block") {
    $('html,body').css({
      overflow: ''
    });
    nav.classList.remove('on');
    cnt = 0;
    scrollOn();
  }
})

/********************************
 * Background Fixed
 *********************************/
var bgFixed = document.querySelector('.bg_fix');
$(window).on('scroll touchstart mousewheel', function() {
  // var position = $(window).scrollTop();
  var position = this.scrollY;
  var page4offset = $('#page4').offset().top;
  // bgFixed.style.visibility = 'visible';
  if (position >= Math.floor(page4offset) - 2) {
    // bgFixed.style.visibility = 'visible';
    // bgFixed.fadeIn()
    // bgFixed.style.transition = '.8s';
    $(bgFixed).slideDown(70);
    // $(bgFixed).animate({
    //   display:'block',
    //   transition:'all .2 cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    // });
  }
  if (position < Math.floor(page4offset) - 2) {
    $(bgFixed).slideUp();
  }

});


/********************************
 * Form // Modal
 *********************************/
//튜토리얼 - 월드맵 팝업
// $('#page3Map area').on('click',function(){
//   common.displayModal(true,$(this).data('name'),"slide");
// });
$('#mapDiv .map_area').on('click', function(e) {
  e.preventDefault();
  common.displayModal(true, $(this).data('name'), "slide");
  // $('*').unbind('touchmove', false);
});

//map resize
//$(document).ready(function() {
//    $('map').imageMapResize();
//});
/*************************
 *  Div tab
 *************************/

// var tabBtn = '.tab_btnBox a';
// var tabDiv = '.tab_div_box';
// $(tabDiv).eq(0).fadeIn().siblings(tabDiv).fadeOut();

// $('.tab_wrap .tab_btn').click(function(){
//   var thisHref = $(this).data('btnid');
//   $('#'+thisHref).fadeIn().siblings(tabDiv).fadeOut();
//   $(this).addClass('on').siblings('li').removeClass('on');
//   console.log(thisHref)
// });


//이미지 슬라이드 스와이프기능
var swiper = new Swiper('.slide_wrap', {
  pagination: {
    el: '.slide_navi',
  },
  navigation: {
    nextEl: '.slide_next',
    prevEl: '.slide_prev',
  },
  spaceBetween: 5,
});

(function() {
  // 임시로 인풋박스의 픽셀을 고정함. 키보드 올라오는 이벤트 때문에
  var page1Minheight = $(this).parents('section').height() + "px";
  $(this).parents('section').css('height', page1Minheight);

  /*
  common.addEvent(document.querySelector("input[name=phone]"), 'focus', function(e) {

  });
  */
  /*
  // 입력이 끝났을 시에는
  common.addEvent(document.querySelector("input[name=phone]"), 'blur', function(e) {
    $(this).parents('section').css('height', '100vh');
  });
  */

})();
