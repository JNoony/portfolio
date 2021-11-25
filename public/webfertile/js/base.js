  //<![CDATA[
/***************
    메인
***************/
    //gnb
    var gnbData = [
        { class:"", name:'공지사항', href:"#" },
        { class:"", name:'내카드', href:"#" },
        { class:"", name:'투표', href:"subvote.html" },
        { class:"", name:'스타소식', href:"substarnewslist.html" },
        { class:"", name:'카드뽑기', href:"subcard.html" },
        { class:"", name:'표나무', href:"subvotetree.html" },
        { class:"", name:'랭킹', href:"#" },
        { class:"", name:'충전', href:"#" },
    ]

    function gnbContents(data){
        var liTag = '';
        for(var i=0;i<data.length;i++){
            liTag += `<li class="${data[i].class}">
                <a href="${data[i].href}">${data[i].name}</a>
            </li>`;
        }
        return liTag;
    }
    $('nav .f_gnb').append( gnbContents(gnbData) );
    


    //scrollTopBtn
    var srcBtn=$('.scroll_top_btn');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('header').append('<a href="#" class="scroll_top_btn"></a>');
            srcBtn.fadeIn(400);
        } else {
            srcBtn.remove().fadeOut(400);
        }
    });

    srcBtn.click(function() {
        $('html, body').animate({ scrollTop : 0 },400);
        return false;
    });
    
     
    //logo
    var LogoSVG={
        style:function(logo,color1,color2){
            $(logo).append('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">'+
                            '<g fill="'+color1+'">'+
                                '<path d="M19.414 19.688c0-6.704 4.781-10.834 9.781-10.834 5.941 0 8.838 4.31 8.838 9.965 0 1.123-.144 2.282-.29 2.753H25.646c.579 2.826 2.536 3.984 5.144 3.984 1.484 0 2.861-.435 4.347-1.303l2.138 3.875c-2.138 1.521-4.962 2.355-7.391 2.355-5.905 0-10.47-3.985-10.47-10.795zm13.149-2.314c0-2.073-.904-3.594-3.26-3.594-1.773 0-3.332 1.123-3.766 3.594h7.026zM42.16 19.416c0-2.276 1.023-10.563 11.702-10.563h2.5v6.068h-2.027c-5.075 0-5.762 3.905-5.762 5.68v9.374H42.16V19.416zM59.799 22.332V3.927h6.448V9.36h4.854v5.036h-4.854v7.864c0 2.282 1.086 3.188 2.608 3.188.651 0 1.377-.217 1.882-.361l1.015 4.636c-1.084.326-2.569.762-4.672.762-5.18-.002-7.281-3.262-7.281-8.153zM75.083 9.36h6.414v20.616h-6.414V9.36zM86.71 23.273V1.029h6.412v22.498c0 1.341.651 1.738 1.16 1.738.216 0 .361 0 .725-.071l.761 4.744c-.69.29-1.775.545-3.188.545-4.419 0-5.87-2.898-5.87-7.21zM97.576 19.688c0-6.704 4.783-10.834 9.782-10.834 5.939 0 8.838 4.31 8.838 9.965 0 1.123-.146 2.282-.29 2.753h-12.101c.582 2.826 2.537 3.984 5.146 3.984 1.485 0 2.861-.435 4.347-1.303l2.137 3.875c-2.137 1.521-4.964 2.355-7.39 2.355-5.905 0-10.469-3.985-10.469-10.795zm13.149-2.314c0-2.073-.906-3.594-3.26-3.594-1.774 0-3.333 1.123-3.768 3.594h7.028zM6.484 14.288s-.199-2.211 1.677-4.119c1.877-1.907 4.237-1.787 4.237-1.787h4.809V3.021H9.132A9.133 9.133 0 0 0 0 12.153v17.822h6.484V14.288z"/>'+
                            '</g>'+
                            '<g fill="'+color2+'">'+
                                '<path d="M4.489 20.694c.696-1.426 2.292-4.446 4.29-5.423 3.397-1.658 7.653.071 7.653.071s-1.251 4.423-4.648 6.083c-2.175 1.063-6.015.138-7.551-.234l.256-.497zM80.034 3.497c-.876.412-1.432 1.243-1.744 1.859-.312-.616-.868-1.447-1.744-1.859-1.49-.701-3.332.08-3.332.08s.574 1.917 2.063 2.618c.953.449 2.05.29 2.717.118.005.479-.024 2.334-.331 3.048h1.392s-.498-2.357-.625-3.168c.674.154 1.992.417 2.874.002 1.489-.701 2.063-2.618 2.063-2.618s-1.843-.781-3.333-.08z"/>'+
                            '</g>'+
                       '</svg>')
        }
    };
    
    if(window.outerWidth < 500){
        LogoSVG.style('.head h1>a','#fff','#BFD33A'); 
    }else{
        LogoSVG.style('.head h1>a','#362e2b','#BFD33A');
        LogoSVG.style('.foot_logo>a','#fff','#BFD33A');
    }
    //mobile 
    var MobileGnb ={
        style:function(){
            $('.mobile_gnb').remove();
            $('.mobile_wrap').append('<div class="mobile_gnb">'+
                                    '<ul class="m_gnb_li">'+
                                       '<li><a href="#">공지사항</a></li>'+
                                       '<li><a href="#">내카드</a></li>'+
                                       '<li><a href="subvote.html">투표</a></li>'+
                                       '<li><a href="substarnewslist.html">스타소식</a></li>'+
                                       '<li><a href="subcard.html">카드뽑기</a></li>'+
                                       '<li><a href="subvotetree.html">표나무</a></li>'+
                                       '<li><a href="#">랭킹</a></li>'+
                                       '<li><a href="#">충전</a></li>'+
                                   '</ul>'+
                               '</div>');
        },
    };
    
    var imgSrc = './images/img_card/3_x_special.png',
        pc_photo = $('.user_data_box>li').eq(0).find('img'),
        m_photo = $('.m_user_info>.m_user_card').find('img');
    
    pc_photo.attr('src',imgSrc);
    
    $('.mobile_wrap').css({left:-100+'%'})
    /*mobile_menu btn*/
    $(".m_gnb").click(function(){
        var mobileWrap =$('.mobile_wrap');
        document.documentElement.style.overflowY = 'hidden'; 
        mobileWrap.stop().animate({left:0},300);
        MobileGnb.style();
        m_photo.attr('src',imgSrc);
        if(mobileWrap.css('display')=='block'){
            mobileWrap.append('<a href="#" class="m_gnb_x"></a><a href="#" class="m_gnb_login"></a>');
            $('.m_gnb_x').click(function(){
                mobileWrap.stop().animate({left:-100+'%'},300);
                document.documentElement.style.overflowY = '';
            });
        };
    });
   
/*****************
   이벤트 banner
*****************/
    var slider=$("#event_banner").bxSlider({
        auto: true,
        controls: true,
        pause:3000,
        startSlide:0,
        pager:true,
        moveSlides: 1,
        infiniteLoop:true,
        slideMargin: 10,
        autoHover:false
    });
    var mql = window.matchMedia("screen and (max-width: 768px)");
    mql.addListener(function(e) {
        if(!e.matches) { slider.reloadSlider(); }
    });

/*****************
   핫이슈 롤링배너
*****************/
    var list_zone=$('.hotissue_box'),
        list_li=$('.hotissue_box>li'),
        list_wid=list_li.outerWidth(),
        list_len=list_li.length,
        list_num=0,
        list_btn=$('.iss_paging_btn'),
        device_screen = window.outerWidth;

    list_zone.outerWidth((list_wid*10)*list_len);

    list_btn.on('click',function(e){
        e.preventDefault();
        if($(this).hasClass('iss_prev') == true){
            list_num--;
            if(list_num<=0)list_num=0;
            list_zone.css({marginLeft:-(list_wid+10)*list_num});
        }else{
            list_num++;
            if(device_screen >= 1025){
                if(list_num > list_len-4) list_num = list_len-4;
            }else if(769 <= device_screen < 1025){
                if(list_num > list_len-2) list_num = list_len-2;
            }else if(500 <= device_screen < 769){
                if(list_num > list_len-3) list_num = list_len-3;
            }else{
                if(list_num > list_len) list_num = list_len;
            }
            list_zone.css({
                marginLeft:-(list_wid+10)*list_num,
                transition:0.5+'s'
            });
        };
    });
    //모바일에서 롤링 핫이슈
    var myAgent=navigator.userAgent.toLowerCase();
    var mobile=['mobile','ipod','android','blackberry','window ce','nokia','webos','opera mini','sonyericsson','opera mobi','iemobile'];
    for(var i=0;i<mobile.length;i++){
        if(myAgent.indexOf(mobile[i])>=0){
            list_btn.remove();
            $('.hotissue_box_li').css({marginRight:0});
            var swiper = new Swiper('.hotissue_content', {
                slidesPerView: 2,
                spaceBetween:20,
                freeMode: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
            });

            $('.chart_list .cht_img').css({borderRadius:'24px',overflow:'hidden'});
            $('.chart_list .cht_bar').css({borderRadius:'0 50px 50px 0'})
        }
         break;
    }

    //모바일 메뉴 pc에서감추기
    $(window).resize(function(){
        if(device_screen > 499){
            $('.mobile_wrap').stop().animate({left:-100+'%'},300);
            document.documentElement.style.overflowY = '';
        }
    });

/*****************
   출석체크
*****************/
    //모바일 메인 버튼에 클래스
    $('.m_menu_btn_box li').eq(0).find('a').addClass('sch_btn');
    
    var PopupDiv={
        style:function(a){
            $(".popup_ass").remove();
            var pop="";
            pop=pop+'<div class="popup_ass">'+
                         '<div class="pp_ass">'+
                            '<div class="pop_ass">'+
                                '<p>'+ a +'</p>'+
                            '</div>'+
                            '<div class="pop_btn">'+
                                '<button type="button" class="btn btn_submit">닫기</button>'+
                            '</div>'+
                        '</div>'+
                    '</div>';
            $("body").append(pop);
             $(".btn_submit").click(function(){ 
                $(".popup_ass").hide();
                $('body').css({overflow:''});
            });
        },
        
    }
    
    var clk_num=0;
    function popup4(){
        //div pop
        PopupDiv.style('<div class="box_sch">'+
                                    '<div class="box_sch_top">'+
                                        '<p class="sch_top_p sch_top_p1">출석만 해도<br>포인트 100% 지급</p>'+
                                        '<p class="sch_top_p sch_top_p2"></p>'+
                                    '</div>'+
                                    '<div class="box_sch_bottom">'+
                                        '<div class="sch_bottom_calendar">'+
                                            '<ul class="sch_calBox"></ul>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>');
        //div pop content
        var cnt=0,
            point,
            li="";
        for(var i=1;i<29;i++){
            if(i<8){
                point=30+'M';
                if(i %2==0){point=50+'E';}
                if(i %7==0){point=1+'씨앗';}
            }
            else if(i<=8 || i<15){
                point=50+'E';
                if(i %2==0){point=30+'M';}
                if(i %7==0){point=2+'씨앗';}
            }
            else if(i<=15 || i<22){
                point=30+'M';
                if(i %2==0){point=50+'E';}
                if(i %7==0){point=1+'씨앗';}
            }
            else{
                point=50+'E';
                if(i %2==0){point=30+'M';}
                if(i %7==0){point=2+'씨앗';}
            }
            cnt++;
            li=li+'<li class="sch_calBox_list calBox_m">'+
                    '<div class="calBox_list_div">'+
                        '<span class="sch_num">'+ cnt +'회차</span>'+
                        '<span class="sch_img">'+ point +'</span>'+
                    '</div>'+
                '</li>';
        };
        $('.sch_calBox').append(li);

        //text color
        $('.sch_calBox_list').each(function(){
            var txt=$(this).find('.sch_img').text(),
                span=$(this).find('.sch_img'),
                m30=txt.indexOf('M'),
                e50=txt.indexOf('E'),
                sd=txt.indexOf('씨앗');
            if(m30==2){span.css({color:'#fa665f'});}
            if(e50==2){span.css({color:'#ff9f00'});}
            if(sd==1){span.css({color:'#603913'});}
        })

        //stamp on
        var li_eq=$(".sch_calBox_list");
        li_eq.eq(clk_num-1).append('<img src="./images/sch_stamp.png" class="sch_scc_img">');

        //point alert
        $('.sch_scc_img').each(function(){
            var span=$(this).prev('.calBox_list_div').find('.sch_img');
            alertify.alert(span.text()+'이(가) 지급되었습니다.').set('label','확인');
        })

        $("#close").click(function(){ $(".popup_ass").hide();$('body').css({overflow:''});});
    };

    
    $('a.sch_btn').click(function(){
        clk_num++;
        popup4();
        $('body').css({overflow:'hidden'});
    });

/***************
    개인정보/이용약관 관련
***************/
    //main[footer]
    var $foot=$('.footer_legal>ul>li');

    function popup_report(){
        $(".popup_ass").remove();
        var pop="";
        pop=pop+'<div class="popup_ass popup_report">'+
                    '<form method="post">'+
                     '<div class="pp_ass pp_report">'+
                        '<div class="pop_ass pop_report">'+
                             '<p class="pop_title pop_rp_title"><strong>불량한 사용자를 신고해주세요!</strong><span>저희 퍼틀은 이용에 있어서 불현함이 없도록 신속하게 처리하겠습니다.</span></p>'+
                             '<p class="pop_alert_txt color1"></p>'+
                             '<ul class="pop_cont pop_rp_cont">'+
                                 '<li><span>유형선택</span>'+
                                       '<select class="chk">'+
                                           '<option value="">불법프로그램사용자</option>'+
                                           '<option value="">불량이용자</option>'+
                                           '<option value="">기타</option>'+
                                       '</select></li>'+
                                 '<li><input type="text" class="pop_input pop_user_title" maxlength="20" placeholder="제목"></li>'+
                                 '<li><textarea class="board_content" maxlength="3000" placeholder="내용"></textarea></li>'+
                                '</ul>'+
                        '</div>'+
                        '<div class="pop_btn pop_rp_btn">'+
                            '<button type="button" class="btn btn_reset">취소</button>'+
                            '<button type="button" class="btn btn_submit">신고하기</button>'+
                        '</div>'+
                    '</div>'+
                '</form>'+
            '</div>';
        $("body").append(pop);
        $(".btn_reset").click(function(){ $(".popup_ass").hide(); });
    }

    $foot.click(function(e){
        e.preventDefault();
        var num=$(this).index(),
            len=$(this).length;
        PopupDiv.style();
        $('.pop_ass>p').load('text'+(num+1)+'.html');
        
        //신고하기popup
        if(num==2){ popup_report(); }
    });

    //sub[회원가입]
    $('.member_table .mem_ass1').load('text1.html');
    $('.member_table .mem_ass2').load('text2.html');

/*********************
    textarea
 *********************/
     $('.comment_edit_text').keyup(function (e){
          var content = $(this).val();
          $(this).height(((content.split('\n').length + 1) * 1.5) + 'em');
          $('.comment_edit_text_num').html(content.length + '/300');
     });

    $('textarea').keyup(function(){
        this.style.height='26px';
        this.style.height = this.scrollHeight + 'px';
    })
/*********************
    회원가입
 *********************/
    //숫자만 입력되게
    $('.mem_date').keypress(function(e){
        if ((e.keyCode < 48) || (e.keyCode > 57)){e.returnValue = false;}
    });
    //이메일입력란 숨기기
    $(".mem_email").hide();

    //key btn
     $(document).keyup(function(e){
         //esc
        if(e.keyCode == 27){
            $('.popup_bg').remove();
            $('.mobile_wrap').stop().animate({left:-100+'%'},300);
            $('body').css({overflow:''});
        }
     });

    //4등급 disabled
    $('.tab>button:last-child').click(function(){
        alertify.alert('준비중입니다!');return false;
    })




//]]>
