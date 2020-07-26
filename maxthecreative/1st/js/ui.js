var wid = window.innerWidth;
var hei = window.innerHeight;
var head = document.querySelector('header');
var nav = document.querySelector('nav');
var mGnb = document.getElementById('max-gnb')
var scrollTop = document.documentElement.scrollTop;
var scTopBtnDiv = '';

function myFunction() {
  var wid = window.innerWidth;
  var hei = window.innerHeight;
  console.log('wid : '+wid);
  console.log('hei : '+hei);
}

/****** top button  *******/
scTopBtnDiv = '<div class="btn-top">';
scTopBtnDiv +=   ' <span class="btn-top-txt">Top</span>';
scTopBtnDiv += '</div>';
$('body').append(scTopBtnDiv);
$('.btn-top').click(function(){ $('html,body').animate({ scrollTop : 0 },400); });


scrollTop > 100 && wid > 559 ? onScroll() : offScroll();

// mobile gnb = dropdown
function dropdownEvent(num){
  if(  wid < num ){
    head.classList.add('head-dropdown');
    mGnb.classList.add('dropdown-content');
  }else{
    head.classList.remove('head-dropdown');
    mGnb.classList.remove('dropdown-content');
  }
}
dropdownEvent(559);
$(window).resize(function(){
  dropdownEvent(559)
})

function scrollAnimation(){
  var moveBox = document.getElementsByClassName('move-box');
  var offsetArr = [];
  var positionY;
  for(var i=0;i<moveBox.length;i++){
    // section[i].dataset.id = 'seciton-'+ i;
    positionY = window.pageYOffset + moveBox[i].getBoundingClientRect().top;
    wid > 500 ? offsetArr.push( Math.floor(positionY)-970 )
              : offsetArr.push( Math.floor(positionY)-600 );

    if( window.pageYOffset >= offsetArr[i] ){  moveBox[i].classList.add('move'); }
  }
  console.log( offsetArr )
}

//gnb active
function onGnbScroll(){
  var scY = window.pageYOffset;
  for( var num =0; num < $('.section').length; num++ ){
    var sectionId = $('.section').eq(num).attr('id');
    var gnbLink = $('.btn-link').data('rel');
    var sectionOffset = $('.section').eq(num).offset().top;
        gnbLink = '#'+sectionId;
    if( scY > sectionOffset - 400  ){
      $('.btn-link[href="'+ gnbLink +'"]').addClass('active')
                                          .parent().siblings().find('a').removeClass('active');
    }
  }
  if( scY == 0 ) {
    $('.btn-link').removeClass('active')
                  .parent().eq(0).find('a').addClass('active');
  }
}

function onScroll(){
  $('.btn-top').css({ opacity:1 });
  scrollAnimation();
  head.classList.add('fix');
  nav.classList.remove('offset-s4');
  nav.classList.add('offset-s3');
}

function offScroll(){
  $('.btn-top').css({ opacity:0 });
  $('.move-box').removeClass('move');
  head.classList.remove('fix');
  nav.classList.remove('offset-s3');
  nav.classList.add('offset-s4');
}



document.addEventListener("DOMContentLoaded", function(){
  //width resize -확인용. fin시 삭제
  window.addEventListener("resize", myFunction ); 
  
  $('.visual-con-box-txt').addClass('move');
  
  //header fixed
  window.addEventListener("scroll", function () {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    var y = supportPageOffset ? window.pageYOffset :
            isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    y > 100 ? onScroll() : offScroll();
  });
  
  // 마우스휠 감지시 scroll event 작동
  $(window).on('DOMMouseScroll mousewheel',function(e){
    $(window).on('scroll', onGnbScroll );
  })


  /***************** 
  * materialize
  *****************/
  // dropdown
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems); 
  
  //modal
  var modalele = document.querySelector('.modal');
  var instance = M.Modal.init(modalele,{
    endingTop: '15%',
    preventScrolling:true
  });
  instance.open();
  
 

  
  // gnb first-child active
  $('.tabs .tab').eq(0).find('a').addClass('active');

  //mobile - gnb link
  $('.btn-link').on('click',function(){ 
    // menu close
    // instances = M.Sidenav.init(elems,{ menuWidth: 0 });
    // instances = M.Dropdown.init(elems,options)

    $(window).off('scroll', onGnbScroll );

    $(this).addClass('active')
           .parent('.tab').siblings('.tab').find('a').removeClass('active');
    if( $('.tab:last-child') ) $('.tab:last-child').find('a').removeClass('active');

    var dataRel = $(this).data('rel');
    $('html, body').animate({ scrollTop: $(dataRel).offset().top - 50 },500);
    // if( dataRel == '#apply' ) $('html, body').animate({ scrollTop: $(dataRel).offset().top - 200 },500);
    if( dataRel == "#" ) $('html, body').animate({ scrollTop: 0  },500);
    
  });
  

  // 신청마감된 && 버튼 부모a태그 막기 - disable
  $('.btn-gray').text('신청이 마감되었습니다.')
                .removeClass('waves-effect waves-red')
                .parent('a').click(function(e){ return false; });
 


});      
  



