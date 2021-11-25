// //icon ani
// const scrollAnimation = ()=>{
//   var iconBox = document.querySelectorAll('.info-icon')
//   var offsetArr = [];
//   var scroll = window.pageYOffset;
//   var wid = window.innerWidth;
  
//   for( var i=0;i< iconBox.length;i++){
//     const positionY = window.pageYOffset + iconBox[i].getBoundingClientRect().top;
//     wid > 500 ? offsetArr.push( Math.floor(positionY) - 600 )
//               : offsetArr.push( Math.floor(positionY) - 500 )
    
//     if( scroll >= offsetArr[i] ){ iconBox[i].classList.add('move'); }
//     else{ iconBox[i].classList.remove('move'); }
//   }

// }

// window.addEventListener('scroll', scrollAnimation );


// // head, topButton
// const scrollHeader = () => {
//   var header = document.querySelector('header');
//   var supportPageOffset = window.pageXOffset !== undefined;
//   var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
//   var y = supportPageOffset ? window.pageYOffset :
//           isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
//   // header fixed && top button
//   var topBtn = document.querySelector('.topBtn');
//   var linkFix = document.querySelector('.link-fix');

//   y > 100 ? header.classList.add('fix')
//           : header.classList.remove('fix');

//   if( header.classList.contains('subhead') ){
//     //서브 헤더
//     y > 100 ? topBtn.classList.add('on')
//             : topBtn.classList.remove('on');
//   }else{
//     //메인 헤더
//     y > 100 ? header.classList.add('fix') & topBtn.classList.add('on') //& linkFix.classList.add('on')
//             : header.classList.remove('fix') & topBtn.classList.remove('on') //& linkFix.classList.remove('on'); 

//     //메인 하단 배너
//     var bannerOffset = document.querySelector('.section-banner2').offsetTop
//     var bodyScrollTop = document.body.scrollHeight;
//     if( y >=  bannerOffset-(bodyScrollTop-bannerOffset) ) {
//       // linkFix.classList.remove('on');
//       topBtn.style.bottom = '5%'
//     }else{ topBtn.style.bottom = '18%'; }
//   } 

// }


// window.addEventListener('scroll', ()=>{
//   //icon ani
//   scrollAnimation();
//   // head, topButton
//   scrollHeader();
// } );

// document.body.addEventListener('click', (e)=>{
//   var target = e.target || e.srcElement ; 
//   // logo click
//   var logo = document.querySelector('.head .mobi-logo');
//   if( target ==  logo){
//     window.scrollTo(0,0);
//     document.body.scrollTop = 0;
//     document.body.classList.remove('scrollOff'); 
//   }

// })


// let cnt = 0;
// const NextButton = (e)=>{
//   e.preventDefault();
//   let tabList = document.querySelectorAll('.dataButton-list');
//   let tabBox = document.querySelector('.tab-btnList')
//   let wid = tabList[cnt].offsetWidth+26;  
//   cnt++;
//   tabBox.style.marginRight = tabList[cnt].offsetWidth+26;
  
  
//   console.log(cnt)
//   console.log(tabList.length)
//   console.log(tabBox.offsetWidth)
//   console.log(tabList.index)
//   console.log(tabList[1].offsetWidth+26)
  
// }

//<![CDATA[
  // // 사용할 앱의 JavaScript 키를 설정해 주세요.
  // Kakao.init('ad150741f39deab45e835907f188715c');
  
  // function addChannel() {
  //   Kakao.Channel.addChannel({
  //     channelPublicId: '_xcLqmC' // 채널 홈 URL에 명시된 id로 설정합니다.
  //   });
  // }
  // 사용할 앱의 JavaScript 키를 설정해 주세요.
  // Kakao.init('ad150741f39deab45e835907f188715c');
  // // 스토리 공유 버튼을 생성합니다.
  // Kakao.Channel.createChatButton({
  //   container: '#kakao-talk-channel-chat-button',
  //   channelPublicId: '_xcLqmC',
  //   title: 'question',
  //   size: 'small',
  //   color: 'yellow',
  //   shape: 'mobile',
  //   supportMultipleDensities: true
  // });
//]]>



/*--------------------
*  modal 
----------------------*/
// var modalele = document.querySelector('.modal');
// var instance = M.Modal.init(modalele,{
//   dismissible: false,
//   preventScrolling:true,
//   onCloseStart:function(){
//     var chkBox = document.querySelector('#chk');
//     chkBox.checked ? setCookie( 'modal1', 'Y' , 1 ) //Y로 표기, 1=하루지정
//                    : setCookie( 'modal1', '' , 1 );
//     console.log( chkBox.checked  )
//   },
//   onOpenEnd:function(){
//     getCookie("modal1")
//   }
// });

// var modal = document.querySelector('#modal1');
// var close = document.querySelector('.modal-close');
// // modal - bg
// var divBg = document.createElement('div');
// divBg.className = 'modal-bg';
// document.getElementsByTagName('body')[0].appendChild(divBg);

// //쿠키설정
// function setCookie( name,value, expiredays ){
//   var todayDate = new Date();
//   todayDate.setDate( todayDate.getDate() + expiredays );
//   document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
// }

// //쿠키불러오기
// function getCookie(name) { 
//   var obj = name + "="; 
//   var x = 0; 
//   while ( x <= document.cookie.length ){ 
//   	var y = (x+obj.length); 
//   	if ( document.cookie.substring( x, y ) == obj ) { 
//   	    if ((endOfCookie=document.cookie.indexOf( ";", y )) == -1 ) 
//   	        endOfCookie = document.cookie.length;
//   	    return unescape( document.cookie.substring( y, endOfCookie ) ); 
//   	} 
//   	x = document.cookie.indexOf( " ", x ) + 1; 
//   	if ( x == 0 ) 
//   	    break; 
//   } 
//   return ""; 
// }

// //닫기 버튼 클릭시
// function closeModal(){
//   var chkBox = document.querySelector('#chk');
//   chkBox.checked ? setCookie( 'modal1', 'Y' , 1 ) //Y로 표기, 1=하루지정
//                  : setCookie( 'modal1', '' , 1 );
//   modalOff();       
// }

// function preventDefault(event){
//   event.preventDefault();
// };


// function modalOn(){
//   modal.style.display='block';
//   document.querySelector('.modal-bg').style.display='block';
//   document.body.style.overflow = 'hidden'; 
//   document.body.classList.add('scrollOff');  
//   document.querySelector('.modal-bg').addEventListener("touchmove", preventDefault, false);
// }

// function modalOff(){
//   modal.style.display='none';
//   document.querySelector('.modal-bg').style.display='none';
//   document.body.style.overflow = '';  
//   document.body.classList.remove('scrollOff'); 
//   document.querySelector('.modal-bg').removeEventListener("touchmove", preventDefault, false);
// }

// // modal 떳을때 스크롤 안되게 막기
// if( modal.style.display='block' ) modalOn(); 

// // 오늘하루 체크 쿠키 상태별 응답
// getCookie("modal1") !="Y" ? modalOn() : modalOff();
// // getCookie("modal1") !="Y" ? instance.open() : instance.destroy();
// console.log( getCookie("modal1") )



/*****************
 * 
 * javascript - document.ready function
 * 
*****************/
// //document ready 후 실행될 이벤트
// function domReady(){  
//   // logo.onclick = scrollTopMove;
//   // close.onclick = closeModal;
//   // instance.open();
//   // window.addEventListener('scroll', scrollAnimation );

// }

// // 브라우저별 체크
// // Mozilla, Opera, Webkit 
// if (document.addEventListener) {
// 	document.addEventListener("DOMContentLoaded", function () {
//     document.removeEventListener("DOMContentLoaded", arguments.callee, false);  
//     domReady(); 
// 	}, false);
// } 
// // Internet Explorer
// else if (document.attachEvent) {
// 	document.attachEvent("onreadystatechange", function () {
// 		if (document.readyState === "complete") {
// 			document.detachEvent("onreadystatechange", arguments.callee);
// 			domReady();
// 		}
// 	});
// }









