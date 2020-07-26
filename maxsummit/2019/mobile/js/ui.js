$(function(){
  /********************************
  * [Header] MENU Button EVENT
  *********************************/
  const head = document.querySelector('header');
  const mGnbBtn = document.querySelector('.gnb_btn');
  const nav = document.getElementsByTagName('nav');
  var cnt = 0;
  var menuDiv = '';
  // var url ;
  var mGnbBar = '<span></span><span></span><span></span>';
  mGnbBtn.innerHTML = mGnbBar;
  var origin = window.location.origin;
  var pathname = window.location.pathname;
  var para = pathname.slice(0,8);

  function menuContent(){
    var newNav = document.createElement('nav');
        menuDiv =  '<div class="gnb_bg"></div>';
        menuDiv +=  '<ul class="gnb">';
        menuDiv +=    '<li><a href="'+ origin + para +'session/" >session</a></li>';
        menuDiv +=    '<li><a href="'+ origin + para +'about/" >about</a></li>';
        menuDiv +=    '<li><a href="'+ origin + para +'award/" >award</a></li>';
        menuDiv +=    '<li><a href="https://www.facebook.com/maxsummit2019/" target="_blank">facebook</a></li>';
        menuDiv +=    '<li><a href="'+ origin + para +'ticket/" >get ticket<span class="icon_tk"></span></a></li>';
        menuDiv +=  '</ul>'
    newNav.innerHTML = menuDiv;
    head.appendChild(newNav);
  }

  //ios 메뉴버튼 클릭시 바디스크롤 막기/해제
  function scrollOff(){
    $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function(e){
      e.preventDefault();
   });
   $('html,body').css({overflow:'hidden'});
  }
  function scrollOn(){
    $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
    $('html,body').css({overflow:''})
  }

  function clickEventHandler() {
    this.classList.toggle("clickbtn_bar");
    $('.head').toggleClass('on');
    cnt++;
    // cnt%2 == 1 ? menuContent() : head.removeChild(nav[0]) ;
    if( cnt%2 == 1 ){
      menuContent();
      scrollOff();
    }else{
      head.removeChild(nav[0]);
      scrollOn();
    }

    if( $('.gnb_btn').hasClass('clickbtn_bar') == true ){
      //메뉴 배경 눌럿을때
      $('.gnb_bg').on('click ',function(){
        head.removeChild(nav[0]);
        $('html,body').css({overflow:''});
        $('.head').removeClass('on');
        $('.gnb_btn').removeClass('clickbtn_bar');
        cnt = 0;
        scrollOn();
      })
    }
  }
  mGnbBtn.addEventListener('click', clickEventHandler);

  window.addEventListener("scroll", function (e) {
      var scroll = this.scrollY;
      scroll > 100 ? $('header').addClass('fix') : $('header').removeClass('fix');
  });



  /*************************************
  * DOCUMENT scroll
  * - header fix / top btn / scrollwhell icon
  *************************************/
  var scTopBtnDiv = '';
      scTopBtnDiv = '<div class="page_top">'
      scTopBtnDiv +=   '<a href="#"><span>Top</span></a>'
      scTopBtnDiv += '</div>'
  $('.contents').append(scTopBtnDiv);

  $(window).on('scroll touchmove mousewheel',function() {
    $(this).scrollTop() > 100 ? $('.page_top').fadeIn() :$('.page_top').fadeOut();
  });

  $(".page_top>a").click(function() {
    $('html, body').animate({ scrollTop : 0 }, 400);
    $(window).on( 'scroll', winScrollTop );
    reset();
    return false;
  });

})


/*******************
* parameterByName
*******************/
// function getParameterByName(name) {
//     name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
//     var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
//         results = regex.exec(location.search);
//     return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
// }
