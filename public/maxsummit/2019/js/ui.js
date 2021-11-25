var agent = navigator.userAgent.toLowerCase();
$(function(){
  /************************
  * DOCUMENT scroll
  * header fix / top btn / scrollwhell icon
  ************************/
  var scTopBtnDiv = '';
      scTopBtnDiv = '<div class="page_top">'
      scTopBtnDiv +=   '<a href="#"><span>Top</span></a>'
      scTopBtnDiv += '</div>'
  $('.contents').append(scTopBtnDiv);

  window.addEventListener("scroll", function (event) {
    // this.scrollY > 100 ? onScroll() : offScroll();
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    var y = supportPageOffset ? window.pageYOffset :
            isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    y > 100 ? onScroll() : offScroll();
  });
  $(window).scrollTop() > 100 ?  onScroll() : offScroll();

  var winWid = $(window).innerWidth();
  (winWid-1000)/2 <= 0 ? $('.page_top').css({ right : 0 +'px' }) :
                         $('.page_top').css({ right : (winWid-1240)/2 +'px' });
  $(window).resize( function(){
    winWid = $(window).innerWidth();
    (winWid-1000)/2 <= 0 ? $('.page_top').css({ right : 0 +'px' }) :
                           $('.page_top').css({ right : (winWid-1240)/2 +'px' });
  });


  $('.page_top>a').click(function(){
    $('html, body').animate({ scrollTop : 0 }, 400);
    $('.side_navi').stop().fadeOut();
    // $('.section_title').removeClass('ani_tit');
    $('.bg_box').removeClass('ani_locationBg ani_locationBg2');
    $('#session .sec_box_img').removeClass('ani_fireworks imgAni');
    return false;
  })

  $(document).each(function(){
    // title animation
    $('.con_title_award, .con_title_about, .con_title_ticket').addClass('ani_tit');
  })


  /************************
  *  HEADER CountDownTimer
  ************************/
  var timeTxt = document.querySelector('.time_txt');
  var timeTxtChild = timeTxt.childNodes.item(1);
  timeTxtChild.innerHTML = '제 5회 MAX Summit 2019의 티켓판매가 조기종료되었습니다.';

  // var CountDownTimer = function(dt, id){
  //   var end = new Date(dt);
  //   var _second = 1000;
  //   var _minute = _second * 60;
  //   var _hour = _minute * 60;
  //   var _day = _hour * 24;
  //   var divId = document.getElementById(id);
  //   //base date time
  //   var timeDiv = function(a,b,c,d){
  //     divId.innerHTML = '<strong class="t_txt days">'+ a +'</strong><span class="small2"> 일</span> '+
  //                       '<strong class="t_txt hours">'+ b +'</strong> : '+
  //                       '<strong class="t_txt minus">'+ c +'</strong> : '+
  //                       '<strong class="t_txt secs">'+ d +'</strong> ';
  //   }
  //   timeDiv( '00','00','00','00' );
  //   //countdown time
  //   var timer = setInterval(function(){
  //       var now = new Date();
  //       var distance = end.getTime()-now.getTime();
  //       var days = Math.floor(distance / _day);
  //       var hours = Math.floor((distance % _day) / _hour);
  //       var minutes = Math.floor((distance % _hour) / _minute);
  //       var seconds = Math.floor((distance % _minute) / _second);
  //
  //       timeDiv( ('0' + days).slice(-2) ,
  //                ('0' + hours).slice(-2) ,
  //                ('0' + minutes).slice(-2) ,
  //                ('0' + seconds).slice(-2) );
  //
  //       if (distance < 0) {
  //         clearInterval(timer);
  //         timeDiv( '00','00','00','00' );//reset
  //         return;
  //       }
  //   }, 1000 );
  // }
  // CountDownTimer('2/13/2019 00:00 AM','countdown');// 월/일/년도 시간, id


  /************************
  * GNB click
  * scroll event
  ************************/
  // $('.gnb>li').on('click',function(){
  //   var $href = $(this).find('a').attr('href');
  //   var $secOffSet = $($href).offset().top;
  //   $(this).addClass('on').siblings('li').removeClass('on');
  //   $href == '#session' ?  $('html, body').animate({ scrollTop : $secOffSet + 300 }, 400) :
  //                          $('html, body').animate({ scrollTop : $secOffSet }, 400);
  //   $($href+' .section_title').toggleClass('ani_tit');
  // });


  function scrollEvnet(){
    var scY = $(window).scrollTop();//현재 스크롤바 위치
    // var getScrPosition = (window.scrollY + window.innerHeight) / document.body.clientHeight * 100;
    var secSession = $('#session').offset().top;
    //gnb
    if(scY < secSession+300 ) $('.gnb>li').eq(0).addClass('on').siblings('li').removeClass('on');
    if(scY > secSession+200  ) $('.gnb>li').eq(1).addClass('on').siblings('li').removeClass('on');
    if(scY > secSession+5900) $('.gnb>li').eq(2).addClass('on').siblings('li').removeClass('on');
  }

  $('.gnb>li').on('click', function(){
    var $href = $(this).find('a').attr('href');
    var $secOffSet = $($href).offset().top;
    function sessionOffset(a,b){
      if( $href == '#main' ) $('html, body').animate({ scrollTop : 0 }, 400);
      if( $href == '#session' ) $('html, body').animate({ scrollTop : $secOffSet - a }, 400);
      if( $href == '#location' ) $('html, body').animate({ scrollTop : $secOffSet - b }, 400);
    }
    $('header').hasClass('fix') == false ? sessionOffset(200,150) : sessionOffset(50,0);

    $($href+' .section_title').addClass('ani_tit');
    $(this).addClass('on').siblings('li').removeClass('on');
    $(window).off('scroll', scrollEvnet );

    console.log($secOffSet)
  });

  $(window).on('DOMMouseScroll mousewheel',function(e){
    $(window).on('scroll', scrollEvnet );
  })

  $(document).each(function(){
    $(window).on('scroll', scrollEvnet );
  })




  /************************
  * IE version
  ************************/
  if ( (navigator.appName == 'Netscape' &&
        navigator.userAgent.search('Trident') != -1)
        || (agent.indexOf("msie") != -1) ) {
    // svg animation hide
    var svgLine = document.querySelector('.line_svg');
    svgLine.style.display = 'none';

    //footer position
    var conHei = $('.contents').height();
    $('.footer').css({
      position: 'absolute',
      bottom:'70px',
      left: 0,
      right: 0,
      width:'100%',
      textAlign: 'center',
      color:'#777',
    })
  }

});

function onScroll(){
  $('.page_top').fadeIn();
  $('header').addClass('fix');
  $('.sc_arr').fadeOut();
}
function offScroll(){
  $('.page_top').fadeOut();
  $('header').removeClass('fix');
  $('.sc_arr').fadeIn();
}
