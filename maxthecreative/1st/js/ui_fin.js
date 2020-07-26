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


function onScroll(){
  $('.btn-top').css({ opacity:1 });
  scrollAnimation();
}

function offScroll(){
  $('.btn-top').css({ opacity:0 });
  $('.move-box').removeClass('move');
}


document.addEventListener("DOMContentLoaded", function(){
  //width resize -확인용. fin시 삭제
  window.addEventListener("resize", myFunction); 
  
  $('.visual-con-box-txt').addClass('move');
  
  //header fixed
  window.addEventListener("scroll", function () {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    var y = supportPageOffset ? window.pageYOffset :
            isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    y > 100 ? onScroll() : offScroll();
  });
  


  /***************** 
  * materialize
  *****************/
  // dropdown
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems); 

  // //modal
  // var modalele = document.querySelector('.modal');
  // var instance = M.Modal.init(modalele,{
  //   endingTop: '15%',
  //   preventScrolling:true
  // });
  // instance.open();


  var img = $('#gallery .material-placeholder');
  var imgChild = img.find('a');

  // move prev 
  $('.btn-prev').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel').carousel('prev');
  });

  // move next 
  $('.btn-next').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel').carousel('next');
  });

  if( wid < 601 ) {
    img.addClass('carousel');
    imgChild.addClass('carousel-item');
    img.addClass('carousel carousel-slider');
    // imgChild.
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true,
      noWrap:true
    });
  }else{
    baguetteBox.run( '.material-placeholder')

    // baguetteBox.run( '.material-placeholder' ,{
    //   fullScreen : false,
    //   noScrollbars : true,
    //   animation : 'slideIn',
    //   overlayBackgroundColor : 'rgba(0,0,0,0.8)',
    //    buttons:true,
    // });
  
  }

  


  // if( wid < 601 ) {
  //   var img = $('#gallery .material-placeholder');
  //   var imgChild = img.find('span');
  //   img.addClass('carousel');
  //   imgChild.addClass('carousel-item');

  //   $('.material-placeholder.carousel').carousel({
  //     fullWidth: true,
  //     indicators: true,
  //     noWrap:true
  //   });
  
  //   console.log('헐?')
    
  //   // move prev 
  //  $('.btn-prev').click(function(e){
  //       e.preventDefault();
  //       e.stopPropagation();
  //       $('.carousel').carousel('prev');
  //   });

  //   // move next 
  //   $('.btn-next').click(function(e){
  //       e.preventDefault();
  //       e.stopPropagation();
  //       $('.carousel').carousel('next');
  //   });

  // }else{
  //   //img
  //   var ele = document.querySelectorAll('.materialboxed');
  //   var instance = M.Materialbox.init(ele,{
  //     onOpenEnd:function(){
  //       // document.body.style.overflow="hidden";
  //       console.log('열림')
  //     },
  //   });
  // }
  
  

});      



