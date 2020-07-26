import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Data = {
    SponsoredDay1:[
        { alt:'크레마 월드와이드(KREMA Worldwide)', src:process.env.PUBLIC_URL +'/images/logo-krema.png', },
        { alt:'싱귤러', src:'./images/logo-singular.png',  },
        { alt:'디블렌트', src:'./images/logo-dblent.png', },
        { alt:'돌고래 유괴단', src:'./images/logo-dolphiners.png',  },
        { alt:'도그지어', src:'./images/logo-dogsear.png',  },
        { alt:'(주)빅픽처팀 ', src:'./images/logo-bigpicture.png', },
        { alt:'아이디엇', src:'./images/logo-idea.png', },
        { alt:'Group IDD', src:'./images/logo-GroupIDD.png', },
        { alt:'태그바이컴퍼니', src:'./images/logo-tagby.png', },
        { alt:'모비인터치', src:'./images/logo-intouch.png', },
        { alt:'구글 ', src:'./images/logo-google.png', },
        { alt:'모비데이즈', src:'./images/logo-mobidays.png', },
    ],
    SponsoredDay2:[
        { alt:'스튜디오좋', src:'./images/logo-studio.png', },
        { alt:'플래닛 드림 ', src:'./images/logo-planetdream.png', },
        { alt:'애드저스트', src:'./images/logo-adjust.png', },
        { alt:'엑스라지 픽쳐스 ', src:'./images/logo-xlpictures.png', },
        { alt:'SMC(더에스엠씨그룹) ', src:'./images/logo-theSMC.png', },
        { alt:'더아이콘티비', src:'./images/logo-theicon.png',},
        { alt:'랩543(LAB543)', src:'./images/logo-lab543.png', },
        { alt:'코마스 인터렉티브', src:'./images/logo-comasinteractive.png', },
        { alt:'구글', src:'./images/logo-google.png', },
        { alt:'모비데이즈', src:'./images/logo-mobidays.png', },
        // { alt:'더미 ', src:'./images/dummy.png', },
        // { alt:'더미 ', src:'./images/dummy.png', },
    ]
}
const { SponsoredDay1, SponsoredDay2 } = Data;

const topFunction = () => {
    //scrollTop으로 이동
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    setTimeout( 'topFunction()',30 );
}

export default function Agency(){
    return(
        <section className="section section-agency scrollspy "  id="agency">
            <div className="section-con container">
                <h2 className="section-title font-transform">대행사 매칭 서비스</h2>

                <div className="section-con-box">
                    <h3 className="section-con-title ">day 1</h3>
                    <div className="section-con-txt sponsored-con">
                        <img src={process.env.PUBLIC_URL+"/2019/images/agency-day1.png"} />
                    </div>
                    {/* <ul className="section-con-txt sponsored-con">
                        {SponsoredDay1.map( (con,index) => {
                            return( <SessionBox key={index}
                                                src={'./images/agency-day1.png'}
                                                alt={con.alt} /> );
                        })}
                    </ul> */}
                    <div className="sess-bar"><span className="bar"></span><span className="text">참여사는 순차적으로 공개합니다. coming soon!</span><span className="bar"></span></div>
                </div>

                <div className="section-con-box">
                    <h3 className="section-con-title ">day 2</h3>
                    <div className="section-con-txt sponsored-con"> 
                        <img src={process.env.PUBLIC_URL+"/2019/images/agency-day2.png"} />
                    </div>
                    {/* <ul className="section-con-txt sponsored-con">
                        {SponsoredDay2.map( (con,index) => {
                            return( <SessionBox key={index}
                                                src={con.src}
                                                alt={con.alt} /> );
                        })}
                    </ul> */}
                    <div className="sess-bar"><span className="bar"></span><span className="text">참여사는 순차적으로 공개합니다. coming soon!</span><span className="bar"></span></div>
                </div>

                <div className="agency-btn"><Link to="/session" className="btn-style2-black" onClick={event => topFunction()}>session 확인하러 가기</Link></div>
                <div className="agency-btn">
                    <a className="btn-style2" target="_blank" href="https://forms.gle/oXTHapW5jVL3We7f8" >대행사 만나러 가기</a>
                </div>
            </div>
        </section>
    )
}



// const SessionBox = (props)=>{
//     return(
//         <li className={props.alt == '모비데이즈' ? 'mo' : ''}>
//           <span className="sess-logo "><img src={props.src} alt={props.alt} /></span>
//         </li>
//     )
// }

