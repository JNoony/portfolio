require('@babel/polyfill');
const $ = require('jquery');

/* 파라미터로 들어오는 attribute를 가지고 오는 함수 처리하는 함수 */
const getParameterByName = function(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

document._referrer = (getParameterByName('referrer')) ? getParameterByName('referrer') : document.referrer;
document._utm_source = (document._utm_source) ? document._utm_source : getParameterByName('utm_source');
document._utm_campaign = (document._utm_campaign) ? document._utm_campaign : getParameterByName('utm_campaign');

const varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
if (varUA.indexOf("iphone") > -1 || varUA.indexOf("ipad") > -1 || varUA.indexOf("ipod") > -1) {
  //IOS 일때 마켓을 기본 ios로.
  document.getElementById('app_a').checked = true;
}

if (location.href.indexOf('#') === -1 || location.href.indexOf('#main') !== -1) {
  document.getElementById('bgVideo').setAttribute("data-autoplay", "1");
}

const modalEl = document.createElement('div');
modalEl.id = 'modalImg';
document.body.appendChild(modalEl);

if(!document.isWeb){
  $('*').bind('touchmove', false);
}
// 크롬 브라우저가 아닐 경우 muted 해제.
/*
if (navigator.userAgent.toLowerCase().indexOf("chrome") == -1 && document.getElementById('bgVideo')) {
  document.getElementById('bgVideo').removeAttribute("muted");

if(!document.isWeb){
  $('*').bind('touchmove', false);
}
*/
module.exports = {
  basicInfo: {
    url: {
      youtube: "https://www.youtube.com/embed/Y6K50krlKWw",
      cafe: "https://cafe.naver.com/lucidadventure",
      vote: "https://register.supermembers.net/hlw_vote",
      fb: "https://www.facebook.com/superplanetcorp/",
      appleLink: "https://itunes.apple.com/kr/app/열렙전사-with-naver-webtoon/id1435756508?mt=8",
      googleLink: "https://play.google.com/store/apps/details?id=com.superplanet.lucid"
    },
    smsSend: {
      headers: {
        Authorization: "Basic U3VwZXJQbGFuZXQ6Z29vZGlkZWEx",
        "Content-Type": "application/json"
      },
      body: {
        scenarioKey: "B225B60A27E013E7834671E30544EB10",
        destinations: [{
          to: {
            phoneNumber: "82"
          }
        }],
        kakaoAlim: {
          text: "[슈퍼플래닛]\n\n열렙전사 with NAVER WEBTOON 사전예약 신청이 완료되었습니다.\n\n감사드립니다~^^\n\n지금 공식카페 가셔서 최신 소식 받아가세요!!\n\n*이 메시지는 사전예약 신청자분들에게만 발송됩니다.\n",
          templateCode: "BUTTON_TEMPLATE",
          validityPeriod: 15,
          buttons: [{
            buttonText: "공식카페가기",
            buttonUrl: "https://cafe.naver.com/lucidadventure"
          }]
        },
        sms: {
          text: "[슈퍼플래닛]\n\n열렙전사 with NAVER WEBTOON 사전예약 신청이 완료되었습니다.\n\n감사드립니다~^^\n\n지금 공식카페 가셔서 최신 소식 받아가세요!!\n\n*이 메시지는 사전예약 신청자분들에게만 발송됩니다.\n\nhttps://cafe.naver.com/lucidadventure"
        }
      }
    }

  },
  imageRootPath: function() {
    return (document.isWeb) ? "./images/" : "../images/";
  },
  addEvent: function(obj, type, fn) {
    if (obj.addEventListener) {
      obj.addEventListener(type, fn, false);
    } else if (obj.attachEvent) {
      obj['e' + type + fn] = fn;
      obj[type + fn] = function() {
        obj['e' + type + fn](window.event);
      }
      obj.attachEvent('on' + type, obj[type + fn]);
    }
  },
  /***********************************
   *  sendRegist : validate 후, form의 name값들을 object에 담아 json형태로 php에 send
   ***********************************/
  sendRegist: function(form_id) {
    const $this = this;

    if (!validate_check_all(form_id)) {
      $this.displayModal(true, "pop3");
      return false;
    }

    if (!validate_phone(form_id)) {
      return false;
    }

    let postData = {};

    postData.phone = $('#' + form_id + ' input[name=phone]').val().replace(/[^0-9]/g, '');
    postData.market = $('#' + form_id + ' input[name=market]:checked').val();
    postData.channel = (document.isWeb) ? "W" : "M";
    postData.etc1 = "Lucid Adventure";
    postData.etc2 = document._referrer.substr(0, 250);
    postData.etc3 = document._utm_source.substr(0, 250);
    postData.etc4 = document._utm_campaign.substr(0, 250);

    $.ajax({
      url: "/_interface/ins_join.php",
      data: postData,
      method: "POST",
      datetype: "json",
      success: function(res) {
        var data = eval(res);
        if (data[0]["resultType"] == "true") {
          // 성공. resultValue있음.
          $this.displayModal(true, "pop4", "link", $this.basicInfo.url.cafe);
          $this.sendKakaoAlim(postData.phone);
        } else {
          if (data[0]["resultValue"] == "same") {
            // 동일한 등록이 있음.
            alert("이미 등록하셨습니다.");
          } else {
            // 그외의 에러처리
            alert("잠시후 다시 시도해주세요.");
          }
        }
      }
    });
  },
  sendKakaoAlim: function(phoneNumber) {
    const $this = this;
    $this.basicInfo.smsSend.body.destinations[0].to.phoneNumber = `82${phoneNumber.substr(1)}`;

    $.ajax({
      url: "http://api.infobip.com/omni/1/advanced",
      headers: $this.basicInfo.smsSend.headers,
      data: JSON.stringify($this.basicInfo.smsSend.body),
      method: "POST",
      datetype: "json",
      success: function(res) {
        // console.log(res);
      }
    });
  },
  /***********************************
   *  displayModal : 공통모달팝업
   ***********************************/
  displayModal: function(isShow, contents, type, url) {
    var $this = this;
    var modalEl = document.getElementById('modalImg');
    var modalContentsEl = '';
    type = type || '';

    if (!isShow) {
      modalEl.style.display = '';
      modalEl.innerHTML = '';
      // fullpage_api.setAllowScrolling(true);
      if (document.isWeb && fullpage_api) {
        fullpage_api.setAllowScrolling(true);
      } else {
        scrollOn();
      }
      return;
    }

    if (type == "video") {
      //modalEl.innerHTML= '비디오';
      modalContentsEl = `<div class="modal modal_video">
                <div class="modal_bg"></div>
                <div class="modal_contents">
                    <div class="modal_img" >
                        <iframe src="${contents}" width="100%" height="100%"></iframe>
                    </div>
                    <a class="modal_btn modal_btnClose" id="btnClose" href="javascript:void(0);">
                        <img src="${$this.imageRootPath()}close.png" alt="x버튼">
                    </a>
                </div>
              </div>`;
    } else if (type == "link") {
      //modalEl.innerHTML= '링크';
      modalContentsEl = `<div class="modal link_modal">
                 <div class="modal_bg"></div>
                    <div class="modal_contents">
                        <div class="modal_img" >
                            <img src="${$this.imageRootPath()}${contents}.png" alt="${contents}">
                            <a href="${url}" class="modal_btnLink modal_btnClose" target="_blank" title="공식카페 가기">
                                <img src="${$this.imageRootPath()}${contents}_btn.png" alt="${contents}_btn">
                            </a>
                        </div>
                        <a class="modal_btn modal_btnClose" href="javascript:void(0);"><img src="${$this.imageRootPath()}close_r.png" alt="x버튼"></a>
                    </div>
                </div>`;
    } else if (type == "slide") {
      // modalEl.innerHTML= '슬라이드';
      modalContentsEl = `<div class="modal modal2 ${contents}">
                <div class="modal_bg"></div>
                    <div class="modal_contents">
                        <div class="modal_img modal_slideImg" >
                            <img src="${$this.imageRootPath()}wacu_${contents}.png" alt="${contents}">
                            <div class="modal_wide_img">
                                <img src="${$this.imageRootPath()}${contents}.jpg" alt="${contents}">
                            </div>
                            <a class="modal_btn modal_slide_arrow modal_slide_prev" href="javascript:void(0);"></a>
                            <a class="modal_btn modal_slide_arrow modal_slide_next" href="javascript:void(0);"></a>
                        </div>
                        <a class="modal_btn modal_btnClose" href="javascript:void(0);"><img src="${$this.imageRootPath()}close.png" alt="x버튼"></a>
                    </div>
                </div>`;
    } else {
      modalContentsEl = `<div class="modal">
            <div class="modal_bg"></div>
            <div class="modal_contents">
                <div class="modal_img" >
                    <a class="modal_btnClose" href="javascript:void(0);">
                        <img src="${$this.imageRootPath()}${contents}.png" alt="${contents}">
                    </a>
                </div>
            </div>
         </div>`;
    }

    modalEl.innerHTML = modalContentsEl;
    modalEl.style.display = "block";

    // fullpage_api.setAllowScrolling(false);

    if (document.isWeb && fullpage_api) {
      fullpage_api.setAllowScrolling(false);
    } else {
      scrollOff();
    }

    // 모달창 내 close
    let modalCloseBtns = modalEl.querySelectorAll('.modal_btnClose');
    for (let modalCloseBtn of modalCloseBtns) {
      this.addEvent(modalCloseBtn, 'click', function(e) {
        //e.preventDefault();
        return $this.displayModal(false);
      });
    }

    // 모달배경 close : 공식까페로 넘어가기 넘어가기 때문에 잠시 막음.
    /*
    let modalBg = document.querySelector('.modal_bg');
    this.addEvent(modalBg,'click',function(){
        return $this.displayModal(false);
    });
    */

    // 모달창 내 월드맵 좌우 슬라이드
    if (type == "slide") {

      let modalWideImgFrame = modalEl.querySelector('div.modal_wide_img');
      let modalWideImg = modalEl.querySelector('div.modal_wide_img img');

      this.addEvent(modalWideImg, 'load', function() {

        let imgMovePx = modalWideImgFrame.clientWidth / 2;

        $('a.modal_slide_prev').on('click', function() {
          $('div.modal_wide_img').animate({
            scrollLeft: '-=' + imgMovePx
          }, 300);
        });

        $('a.modal_slide_next').on('click', function() {
          $('div.modal_wide_img').animate({
            scrollLeft: '+=' + imgMovePx
          }, 300);
        });

      });
    }

  },


};

/***********************************
 *  phoneNumFormatter : 핸드폰번호 입력시 input창에 실시간으로 '-'를 생성해줌
 ***********************************/
const phoneNumFormatter = function(telVal) {
  var retVal = '';
  retVal = telVal.replace(/[^0-9]/g, '');
  if (retVal.length <= 3) {
    retVal = retVal;
  } else if (retVal.length > 3 && retVal.length < 7) {
    retVal = retVal.substring(0, 3) + "-" + retVal.substring(3);
  } else if (retVal.length >= 7 && retVal.length < 11) {
    retVal = retVal.substring(0, 3) + "-" + retVal.substring(3, 6) + "-" + retVal.substring(6);
  } else if (telVal.length == 11) {
    retVal = retVal.substring(0, 3) + "-" + retVal.substring(3, 7) + "-" + retVal.substring(7);
  } else {
    retVal = retVal.substring(0, 3) + "-" + retVal.substring(3, 7) + "-" + retVal.substring(7, 11);
  }
  return retVal;
}

/***********************************
 *  validate_phone : 핸드폰 번호 validate
 ***********************************/
const validate_phone = function(form_id) {

  var $phoneObj = $("#" + form_id + " input[name=phone]");
  var phoneVal = $phoneObj.val();


  if (!phoneVal || phoneVal.trim().length == 0) {
    alert("연락처를 입력하세요.");
    $phoneObj.focus();
    return false;
  }

  var phoneVal = phoneVal.replace(/-/g, "");

  if (phoneVal.length < 10) {
    alert("연락처를 정확하게 입력해주세요.");
    $phoneObj.focus();
    return false;
  }

  var phone1 = phoneVal.substring(0, 3);
  var phone2 = phoneVal.substring(3, phoneVal.length - 4);
  var phone3 = phoneVal.substring(phoneVal.length - 4);

  if (!(phone1 == "010" || phone1 == "011" || phone1 == "016" || phone1 == "017" || phone1 == "018" || phone1 == "019")) {
    alert("연락처를 정확하게 입력해주세요.");
    $($phoneObj).focus();
    return false;
  }

  // 010 으로 시작하면 무조건 11자리, 010이 아니면 10자리 또는 11자리
  if (phone1 == "010" && phoneVal.length != 11) {
    alert("연락처를 정확하게 입력해주세요.");
    $($phoneObj).focus();
    return false;
  }
  if (phone1 != "010" && (phoneVal.length > 11 || phoneVal.length < 10)) {
    alert("연락처를 정확하게 입력해주세요.");
    $($phoneObj).focus();
    return false;
  }

  // 0000, 1111 과 같이 동일한 경우
  if (phone3.charAt(0) == phone3.charAt(1) &&
    phone3.charAt(1) == phone3.charAt(2) &&
    phone3.charAt(2) == phone3.charAt(3)) {
    alert("연락처를 정확하게 입력해주세요.");
    $($phoneObj).focus();
    return false;
  }
  return true;
}


/***********************************
 *  validate_check_all : 체크박스 체크안 할 시 모달팝업
 ***********************************/
const validate_check_all = function(form_id) {
  if ($("#chkAll").is(":checked")) {
    return true;
  } else {
    return false;
  }

}


/***********************************
 *  clickCheckAll : '모두 동의합니다' 체크박스 기능
 ***********************************/
const clickCheckAll = function() {
  var checkAll = document.querySelector('[data-check-all]'); // '모두 동의합니다' 인풋태그에 data-check-all 옵션을 써주세요.
  var checkItems = document.querySelectorAll('[data-check-all-item]'); // 나머지 인풋태그에 data-check-all-item 옵션을 써주세요.
  // '모두 동의합니다' 인풋태그 체크시 동작함
  module.exports.addEvent(checkAll, 'click', function() {
    if (checkAll.checked) {
      for (var i = 0; i < checkItems.length; i++) {
        checkItems[i].checked = true;
      }
    } else {
      for (var i = 0; i < checkItems.length; i++) {
        checkItems[i].checked = false;
      }
    }
  });

  // 나머지 인풋태그 체크시 동작함

  for (var i = 0; i < checkItems.length; i++) {
    module.exports.addEvent(checkItems[i], 'click', function() {
      var checkedItems = document.querySelectorAll('[data-check-all-item]:checked');

      if (checkedItems.length == checkItems.length) {
        checkAll.checked = true;
      } else if (checkedItems.length < checkItems.length) {
        checkAll.checked = false;
      }
    });
  }
};

//ios 메뉴버튼 클릭시 바디스크롤 막기/해제
function scrollOff() {
  $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
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

(function() {
  // 공통 체크 버튼
  clickCheckAll();

  if (document.getElementById('id_bgVideo_mute') && document.getElementById('bgVideo')) {
    module.exports.addEvent(document.getElementById('id_bgVideo_mute'), 'click', function(e) {
      if (document.getElementById('bgVideo').muted) {
        document.getElementById('id_bgVideo_mute').classList.remove("un_muted");
        document.getElementById('bgVideo').muted = false;
      } else {
        document.getElementById('bgVideo').muted = true;
        document.getElementById('id_bgVideo_mute').classList.add("un_muted");
      }
    });

  }

  // '사전예약 신청하기'버튼 클릭
  module.exports.addEvent(document.getElementById('id_send_regist'), 'click', function(e) {
    module.exports.sendRegist(document.getElementById(this.id).closest('form').id)
  });

  // 핸드폰번호 입력시 자동으로 형식 포맷
  document.querySelector("input[name=phone]").maxlength = 13;
  module.exports.addEvent(document.querySelector("input[name=phone]"), 'keyup', function(e) {
    e.stopPropagation();
    $(this).val(phoneNumFormatter($(this).val()));
  });

  // 메인 공통 동영상 재생
  module.exports.addEvent(document.querySelector('.video_btn'), 'click', function(e) {
    module.exports.displayModal(true, module.exports.basicInfo.url.youtube, "video");
  });

  // 기본 공통 팝업 설정
  $('a.modal, .modal').on('click', function(e) {
    e.preventDefault();
    module.exports.displayModal(true, $(this).data('name'));
  });


  // url 설정
  let googleLinkEls = document.getElementsByClassName('landing-google-link');
  let appleLinkEls = document.getElementsByClassName('landing-apple-link');

  if (document._utm_source) {
    module.exports.basicInfo.url.appleLink += `&ct=${document._utm_source}`;
    module.exports.basicInfo.url.googleLink += `&utm_source=${document._utm_source}`;
  }

  if (document._utm_campaign) {
    module.exports.basicInfo.url.googleLink += `&utm_campaign=${document._utm_campaign}`;
  }

  for (let i = 0; i < googleLinkEls.length; i++) {
    let textValue = googleLinkEls[i].getAttribute('value');
    module.exports.addEvent(googleLinkEls[i], 'click', function() {
      gtag('event', 'link_market_gp2', {
        'event_category': 'link_market',
        'event_label': '구글링크_' + textValue
      });
    });
    googleLinkEls[i].href = module.exports.basicInfo.url.googleLink;
  }

  for (let i = 0; i < appleLinkEls.length; i++) {
    let textValue = googleLinkEls[i].getAttribute('value');
    module.exports.addEvent(appleLinkEls[i], 'click', function() {
      gtag('event', 'link_market_gp2', {
        'event_category': 'link_market',
        'event_label': '구글링크_' + textValue
      });
    });
    appleLinkEls[i].href = module.exports.basicInfo.url.appleLink;
  }

  let cafeVoteEl = document.getElementsByClassName('landing-vote-link')[0];
  cafeVoteEl.href = module.exports.basicInfo.url.vote;
  module.exports.addEvent(cafeVoteEl, 'click', function() {
    gtag('event', 'link_cafe_vote', {
      'event_category': 'link_cafe',
      'event_label': '투표링크'
    });
  });

  /*************************
   *  Div tab
   *************************/
  var tabBtn = '.tab_btnBox a';
  var tabDiv = '.tab_div_box';
  var tabVideo = '.tab_video iframe';
  //video,iframe src를 첫번째 a 태그의 data-link 로 설정
  // var aLink = $(tabBtn).eq(0).data('link');
  // if (aLink) {
  //   $(tabVideo).attr('src', aLink);
  //   //a버튼 클릭시 iframe src 변경하기
  //   $(tabBtn).click(function() {
  //     var thisLink = $(this).data('link');
  //     $(tabVideo).attr('src', thisLink);
  //   });
  // }

  //첫번째 콘텐츠 가지고 있는 div 보이기
  $(tabDiv).eq(0).fadeIn().siblings(tabDiv).fadeOut();
  $('.tab_wrap .tab_btn').click(function() {
    var thisHref = $(this).data('btnid');
    $('#' + thisHref).fadeIn().siblings(tabDiv).fadeOut();
    $(this).addClass('on').siblings('li').removeClass('on');
  });

})();
