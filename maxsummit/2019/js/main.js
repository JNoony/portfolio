$(function(){
// document.addEventListener("DOMContentLoaded", function(){
  /************************
  *  slide text animation
  ************************/
  var words = document.getElementsByClassName('word');
  var wordArray = [];
  var currentWord = 0;

  words[currentWord].style.opacity = 1;
  for (var i = 0; i < words.length; i++) {
    splitLetters(words[i]);
  }

  function changeWord() {
    var cw = wordArray[currentWord];
    var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
    for (var i = 0; i < cw.length; i++) {
      animateLetterOut(cw, i);
    }

    for (var i = 0; i < nw.length; i++) {
      nw[i].className = 'letter behind';
      nw[0].parentElement.style.opacity = 1;
      animateLetterIn(nw, i);
    }

    currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
  }

  function animateLetterOut(cw, i) {
    setTimeout(function() {
      cw[i].className = 'letter out';
    }, 80);//i*80
  }

  function animateLetterIn(nw, i) {
    setTimeout(function() {
      nw[i].className = 'letter in';
    }, 340+(80));//i*80
  }

  function splitLetters(word) {
    var content = word.innerHTML;
    word.innerHTML = '';
    var letters = [];

    // for (var i = 0; i < content.length; i++) {
    //   var letter = document.createElement('span');
    //   letter.className = 'letter';
    //   letter.innerHTML = content.charAt(i);
    //   word.appendChild(letter);
    //   letters.push(letter);
    // }
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.substring( 0, content.length );
    word.appendChild(letter);
    letters.push(letter);

    wordArray.push(letters);
  }

  changeWord();
  setInterval(changeWord,2000);


  /************************
  *  Background Animation
  ************************/
  $('.section_page0 .back_bg ul .bg_box').addClass('ani');

  /************************
  * Scroll Event
  ************************/
  // var scY = $(window).scrollTop();
  // var secSession = $('#session').offset().top;
  // var innerH = (window.scrollY + window.innerHeight) / document.body.clientHeight * 100;
  // if(scY  < secSession+300 || innerH < 20 ) $('.gnb>li').eq(0).addClass('on').siblings('li').removeClass('on');
  // if(scY > secSession+200  || innerH > 19 ) $('.gnb>li').eq(1).addClass('on').siblings('li').removeClass('on');
  // if(scY > secSession+5900 || innerH > 85) $('.gnb>li').eq(2).addClass('on').siblings('li').removeClass('on');

  var scrollHandle = function(){
    var scY = $(window).scrollTop();
    var secSession = $('#session').offset().top;
    var secSessionBottom = $('#session .sec_con2').offset().top;
    var secLocation = $('#location').offset().top;
    var secContact = $('#contact').offset().top;
    // var bannerOffset = $('.partner_banner').offset().top;

    if( scY < 100 ){
      $('.partner_banner').removeClass('on');
      $('.section_title,.ses_list li').removeClass('ani_tit');
      $('.bg_box, .sec_bottom_text').removeClass('ani_locationBg ani_locationBg2');
      $('.sec_box_img').removeClass('ani_fireworks imgAni');
      $('.gnb>li').eq(0).addClass('on').siblings('li').removeClass('on');
    }

    if( scY > 100 ) {
      $('.partner_banner').addClass('on');
    }
    if( scY > secSession - 400 ) {
      $('.con_title_session').addClass('ani_tit');
    }
    if( scY > secSession - 200 ) $('#session .sec_top_img').addClass('imgAni');
    if( scY > secSession - 700 ) $('.gnb>li').eq(1).addClass('on').siblings('li').removeClass('on');

    if( scY > secSessionBottom - 900 ){
      $('#session .sec_box_img1').addClass('ani_fireworks');
      setTimeout(function(){ $('#session .sec_box_img2').addClass('ani_fireworks') },200)
    }
    if( scY > secSessionBottom - 600 ){
      $('#session .sec_box_img3').addClass('imgAni');
      setTimeout(function(){ $('#session .sec_box_img4').addClass('imgAni') },200);
      setTimeout(function(){ $('#session .sec_box_img5').addClass('imgAni') },400);
    }

    if( scY > secLocation - 700 ) $('#location .bg_box8').addClass('ani_locationBg');
    if( scY > secLocation - 500 ) {
      $('.con_title_location').addClass('ani_tit');
      $('.gnb>li').eq(2).addClass('on').siblings('li').removeClass('on');
      // console.log('하')
    }
    if( scY > secLocation - 300 ) {
      $('#location .bg_box9').addClass('ani_locationBg2');
      setTimeout(function(){ $('#location .sec_bottom_text').addClass('ani_locationBg2') },400);
    }

    if( scY > secContact - 600 ) {
      $('.con_title_contactus').addClass('ani_tit');
    }

    // console.log(scY)
    // console.log(innerH)
    // console.log(secSession)
    // console.log(secLocation)
  }

  $(window).on('DOMMouseScroll mousewheel',function(e){
    var wheelDelta = e.originalEvent.wheelDelta;
    console.log(wheelDelta);
  //   // if( wheelDelta > 0 ){
  //   //   // $('html,body').animate({top += 100},100)
  //   // }
  //   //Scroll
    $(window).on('scroll', scrollHandle );
  })

  $(document).each(function(){
    $(window).on('scroll', scrollHandle );
  })


  /************************
  *  Sponsor Banner
  ************************/
  var partner = document.querySelector('.partner');
  var bannerDiv = document.createElement('div');
  var bannerBtn = document.createElement('span');
  var banners = '';
  var urlAry = [
    'https://www.appsflyer.com/', //앱스플라이어
    'http://www.onnuridmc.com/', //온누리DMC ExelBid
    'http://www.onnuridmc.com/', //온누리DMC CrossTarget
    'http://www.molocoads.com/', //모로코_모로코
    'http://wemakeprice.com', //모로코_위메프
    'http://www.junggglex.com', //게임베리-정글엑스
    'http://www.pulsek.com', //코난테크놀로지
    'https://www.singular.net/', //싱귤러
    'https://www.adjust.com/', //Adjust
    'https://www.facebook.com/audiencenetwork', //페이스북
    'https://www.kochava.com/', //kochava
    'https://www.remerge.io', //리머지
    'https://www.criteo.com/', //크리테오
    'http://www.clounge.co.kr/', //크리에이티브라운지
    'https://www.i-boss.co.kr', //아이보스
    'https://event-us.kr', //이벤터스
    'https://adkrypto.com/', //애드크립토 Adkrypto
    'http://bit.ly/2T5brGZ', //애드크립토 TokenPost
    'http://smartbill.co.kr', //스마트빌
    'http://kstartupforum.org/', //코리아스타트업포럼
    'http://www.obcia.org/', //오픈블록체인산업협회
    'https://www.millie.co.kr', //밀리
    'http://www.kblockchain.org/site/main/index001', //한국블록체인협회
  ]
  bannerDiv.className = 'partner_banner';
  for(var i=0; i<urlAry.length; i++){
    banners += '<a href="'+ urlAry[i] +'" target="_blank" class="banner_img banner_img'+i+'">';
    banners +=  '<img src="./images/banner_'+i+'.png" alt="bannerImg'+i+'">';
    banners += '</a>';
  }
  bannerDiv.innerHTML = banners;
  bannerBtn.innerHTML = 'Sponsored by';
  partner.appendChild(bannerDiv);
  $('.partner').append(bannerBtn);
  // partner.prepend(bannerBtn);

  bannerBtn.onclick = function(){
    $('html,body').animate({
      scrollTop:$('.partner_banner').offset().top-270,
    },300);
    $('.partner_banner').toggleClass('on');
  }
  bannerBtn.style.zIndex = 500;

  console.log('dd')

  /************************
  *  Session - tab 3rd
  ************************/
  //session title, session article position
  var partnerBanner = document.querySelector('.partner_banner');
  var styles = window.getComputedStyle(partnerBanner);
  var bannerHeight = partnerBanner.offsetHeight;
  var bannerMargin = parseInt(styles['paddingTop']) + parseInt(styles['paddingBottom']);

  $('.section_page1').css({ paddingTop:bannerHeight+bannerMargin+30 +'px'});
  $('#session').css({ paddingTop:200 +'px'});
  $('.section_title.con_title_session').css({ top:bannerHeight+bannerMargin+145 +'px' });

  // if( partner.display ='block' ){
  //   $('.section_page1, #session').css({ paddingTop:bannerHeight+bannerMargin+230 +'px'});
  //   $('.section_title.con_title_session').css({ top:bannerHeight+bannerMargin+150 +'px' });
  // }

  //session list number
  var listLi = $('.ses_list>li');
  for(var i=1;i<(listLi.length+1);i++){
    $('.ses_list>li').eq(i-1).find('.txt_t').text(i);
  }

  //navi position
  var winWid = $(window).innerWidth();
  (winWid-1000)/2 <= 0 ? $('.side_navi').css({ right : 0 +'px' }) :
                         $('.side_navi').css({ right : (winWid-1200)/2 +'px' });
  $(window).resize( function(){
    winWid = $(window).innerWidth();
    (winWid-1000)/2 <= 0 ? $('.side_navi').css({ right : 0 +'px' }) :
                           $('.side_navi').css({ right : (winWid-1200)/2 +'px' });
  });

  var dayOffset1 = $('#sess_day1').offset().top;
  var checkScroll = function(){
    if( this.scrollY < dayOffset1 - 400 ||
        this.scrollY > dayOffset1 + $('#sess_day1').height() + $('#sess_day2').height() - 400 ){
      $('.side_navi').stop().fadeOut();
    } else{
      $('.side_navi').stop().fadeIn();
      $('.side_navi p').eq(0).addClass('on').siblings().removeClass('on');
      if( this.scrollY > (dayOffset1-400 + $('#sess_day1').height()) ){
        $('.side_navi p').eq(1).addClass('on').siblings().removeClass('on');
      }
    }
  }
  // $(window).on('scroll',checkScroll);
  checkScroll();
  //navi click
  $('.side_navi p').on('click mousedown',function(e){
    e.preventDefault();
    var sNav = $(this).data('target');
    var divOffset = $('#'+sNav).offset();
    $(this).addClass('on').siblings().removeClass('on');
    $('html,body').stop().animate({ scrollTop : divOffset.top-205 +'px' },400);
    $(window).off('scroll',checkScroll);
  })

  $(window).on('DOMMouseScroll mousewheel',function(e){
    //console.log( e.originalEvent.wheelDelta );
    $(window).on('scroll',checkScroll);
  })

  if( $(window).scrollTop() < dayOffset1 - 400 ||
      $(window).scrollTop() > dayOffset1 + $('#sess_day1').height() + $('#sess_day2').height() - 400 ){
    $('.side_navi p').eq(1).addClass('on').siblings().removeClass('on');
  }





  /************************
  * Footer position
  ************************/
  var conHei = $('.contents').height();
  $('.footer').css({
    position: 'absolute',
    //top: conHei - 150 +'px' ,
    bottom:'70px',
    left: 0,
    right: 0,
    width:'100%',
    textAlign: 'center',
    color:'#777',
  })



  /************************
  * Modal - 오늘하루
  ************************/
  // var div = '';
  //     div = '<div class="modal" id="modalDiv">';
  //     div +=  '<div class="modal_bg"></div>';
  //     div +=  '<div class="modal_div">';
  //     div +=    '<div class="modal_div_con">';
  //     div +=      '<p class="md_title"><strong>제 5회 MAX Summit 2019<br>티켓 조기매진</strong></p>';
  //     div +=      '<p>';
  //     div +=        '제 5회 MAX Summit 2019의 <strong class="point">온/오프라인 티켓판매가<br>조기종료</strong>되었습니다.<span class="gray">(당일 현장등록 불가)</span><br></p>'
  //     div +=      '<p>뜨거운 성원에 감사드립니다.<br></p>'
  //     div +=      '<p>한정된 좌석으로 더 많은 분들을 모시지 못하는 점<br>양해부탁드립니다.<br></p>'
  //     div +=      '<p>하반기에 MAX the premium 으로 찾아뵙겠습니다.</p>';
  //     div +=      '</p>';
  //     div +=      '<p>문의 : <a href="mailto:hello@maxsummit.co" class="mailto">hello@maxsummit.co</a></p>';
  //     div +=    '</div>';
  //     div +=    '<div class="modal_btn">';
  //     div +=      '<label for="chk" class="md_button">오늘하루열지않기<input type="checkbox" name="chk" id="chk" onclick="closeTodayBtn()"></label>';
  //     div +=      '<a href="#" class="md_button btn_close">닫기</a>';
  //     div +=    '</div>';
  //     div +=  '</div>';
  //     div += '</div>';
  // $('.contents').append(div);
  //
  // getCookie("notToday")!='Y' ? $(".modal").show() : $(".modal").hide();
  //
  // var cnt = 0;
  // $("#modalDiv .btn_close").click(function(e){
  //   e.preventDefault();
  //   cnt++;
  //   if($("#chk").is(':checked')){
  //     setCookie('notToday','Y', 1);
  //   }
  //   $(".modal").hide();
  // });
  // $(window).scroll(function(){
  //   if( this.scrollY > 100 ) $(".modal").hide();
  //   if( this.scrollY < 100 && cnt < 1 ) $(".modal").show();
  // })
  // if( $(window).scrollTop() > 100 ) $(".modal").hide();
  //
  // // $("#modalDiv .btn_close").click(function(e){
  // //   e.preventDefault();
  // //   if($("#chk").is(':checked')){
  // //     setCookie('notToday','Y', 1);
  // //   }
  // //   $(".modal").hide();
  // // })
  // // if($(window).scrollTop() > 100){
  // //   $('.modal').hide();
  // // }

}); //document.ready.function end

/************************
* Modal  - Cookie setting
* - 오늘하루 쿠키용
************************/
function setCookie(name, value, expiredays) {
  var today = new Date();
      today.setDate(today.getDate() + expiredays);
      document.cookie = name + '=' + escape(value) + '; path=/; expires=' + today.toGMTString() + ';'
}

function getCookie(name){
    var cName = name + "=";
    var x = 0;
    while ( x <= document.cookie.length ){
        var y = (x+cName.length);
        if ( document.cookie.substring( x, y ) == cName ){
            if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
                endOfCookie = document.cookie.length;
            return unescape( document.cookie.substring( y, endOfCookie ) );
        }
        x = document.cookie.indexOf( " ", x ) + 1;
        if ( x == 0 )
            break;
    }
    return "";
}
