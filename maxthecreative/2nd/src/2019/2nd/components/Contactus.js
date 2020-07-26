import React from 'react';

// const isMobile = ()=>{
//     return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
// }

// const kakaoId = () => {
//     return window.Kakao.init('f1bd2cc0c3c245a525e0e8d7c3320256');
// }

export default function Contactus (props){
    const { ogTitleCon, ogDescriptionCon } = props.data;
    var site_url = "maxthecreative.co/";
    var title = ogTitleCon;
    var description = ogDescriptionCon;
    var img_src = 'https://maxthecreative.co/images/mtc_thumbnail_s.jpg';

    //sns 버튼 눌럿을때, kakao/facebook 
    document.body.addEventListener('click', function (e) {
        var target = e.target.parentNode;
        if(target.dataset.src == 'ka') {
            window.Kakao.init('f1bd2cc0c3c245a525e0e8d7c3320256');
            window.Kakao.Link.sendDefault({
                objectType: 'feed',
                content: {
                  title: title,
                  description: description,
                  imageUrl: img_src,
                  link: {
                    mobileWebUrl: 'https://developers.kakao.com',
                    webUrl: 'https://developers.kakao.com'
                  }
                },
                buttons: [
                  {
                    title: '자세히보기',
                    link: {
                      mobileWebUrl: 'https://developers.kakao.com',
                      webUrl: 'https://developers.kakao.com'
                    }
                  }
                ]
              });
        }
        if(target.dataset.src == 'fb') {
          window.open('https://www.facebook.com/sharer/sharer.php?u=' + site_url, '_blank');
        }
        return false;
    })
    
    return(
        <section className="section section-contactus  bg-gray " id="contactUs">
            <div className="container">
                <h2 className="section-title">Contact us</h2>
                <div className="section-con">
                    <div className="section-con-txt">
                        <div className="section-con-txt-left">
                            <p>일반문의 및 press 문의</p>
                            <a href="mailto:hello@maxthecreative.co?subject=[ 일반문의 및 press 문의 ]" rel="noopener noreferrer"
                                className="mailto">hello@maxthecreative.co</a>
                        </div>
                        <div className="section-con-txt-right">
                            <p>후원문의</p>
                            <a href="mailto:sponsor@maxthecreative.co?subject=[ 후원문의 ]" rel="noopener noreferrer"
                                className="mailto">sponsor@maxthecreative.co</a>
                            <a className="btn-style2 btn-down" href="./pdf/MAXtheCreative2nd_sponsorguide_191016.pdf" download rel="noopener noreferrer"
                                type="application/pdf">후원사 특전 보기</a>
                            <a className="btn-style2 btn-down " href="https://forms.gle/VFhJFu3VPVyJCPbA9" target="_blank" rel="noopener noreferrer">후원 신청하기</a>
                        </div>
                    </div>
                </div>

                <h2 className="section-title mobile ">공유하기</h2>
                <div className="section-con mobile ">
                    <div className="section-con-txt">
                       <div className="share-group ">
                            <a href="#ka" className="bt_kakao" data-src="ka"><img src={`${process.env.PUBLIC_URL}/images/btn_kakao.png`} alt="카카오버튼" /></a>
                            <a href="#fb" className="bt_face" data-src="fb"><img src={`${process.env.PUBLIC_URL}/images/btn_fb.png`} alt="페이스북버튼" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

