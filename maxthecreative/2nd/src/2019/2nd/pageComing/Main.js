import React, { Component, useState, useEffect } from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     Redirect,
//     useHistory,
//     useLocation
// } from "react-router-dom";
// import { Icon } from 'react-materialize';
import PropTypes from "prop-types";

import MetaHead from './helmet'

import Footer from '../Footer';
import HeaderComing from '../Header/Coming';

import Visual from '../Visual';
import Promotion from '../components/Promotion';
import Agency from '../components/Agency';
import Gallery from '../../../default/Gallery';

// import ReactLoading from "react-loading";
// const Loading = () => {
//     // const [hidden, setHidden ] = useState( true )
//     window.onload=()=>{
//         // document.querySelector('.loading').style.display='none';
//     }
//     // setTimeout(() => {
//     //     document.querySelector('.loading').style.display='none';
//     // }, 3000)
    
//     return(
//         <div className="loading">
//             <ReactLoading type={'bars'} color="#fff" 
//                           className="loading-bar" />
//         </div>
//     )
// };


export default function Main ({ match }){
    // const [state,setState] = useState(false);
    // useEffect( ()=>{
    //     window.onload = () =>{
    //         document.querySelector('.loading').style.display = 'none';
    //         setState(true);
    //     };
    //     document.addEventListener("DOMContentLoaded", setState(true) )
    //     return()=>{
    //         console.log('clean up');
    //     }
    // },[])

    return (
        <>  
            {/* <Loading /> */}
            <MetaHead />
            <HeaderComing path={match.path} />
            <Visual />
            <div className="contents">
                <Promotion date={PromotionData.date} 
                           data={PromotionData.data} />
                <Agency />
                <Gallery src={gallerySrc}/>
            </div>
            <Footer />
        </>
    );
}

const gallerySrc = '/2019/images/pic_fin';

const PromotionData = {
    date:'2019-12-13T18:00:00',
    data:[
        {
          title:'모비데이즈',
          text:<p>- 주요 미디어 광고상품 특별 혜택<br/><span>(네이버/구글/페이스북/크리테오 등)</span></p>,
          url:'https://forms.gle/QbWLXoqjrzvF2Q9D8',
          button:'프로모션 신청하기',
          name:'pro-mobi',
          class:'btn-style2-black'
        },
        {
          title:'모비인터치',
          text:<><p>- 마케터 채용 컨설팅</p><p>- 인재 추천 수수료 할인</p><p>- 채용 프로세스 진단</p></>,
          url:'https://forms.gle/RkxoTk73oGAbE7Cu6',
          button:'프로모션 신청하기',
          name:'pro-mobi-int',
          class:'btn-style2-black'
        },
        {
          title:'모비아카데미',
          text:<><p>- 일반기업 제휴 : 싱글강의 15%할인</p><p>- 프리미엄 기업제휴 : 전강의 20% 할인</p><p>- 이벤트 강연회 & 세미나 무료 초대권 발송</p><p>- 모비아카데미 세미나실 대관 최대 40% 할인</p></>,
          url:'https://forms.gle/ZfVH9WRQfsqDVdVs6',
          button:'프로모션 신청하기',
          name:'pro-mobi-aca',
          class:'btn-style2-black'
        },
        {
          title:'모비커넥트',
          text:<><p>- 예산 100만원 무료 지원<br/><span>(최초 테스트 예산 1,000만 이상 집행 시)</span></p><p>- 예산 50만원 무료 지원<br/><span>(최초 테스트 예산 700만 이상 집행 시)</span></p></>,
          url:'https://forms.gle/mupj6npFU3Si3NwG7',
          button:'프로모션 신청하기',
          name:'pro-mobi-con',
          class:'btn-style2-black'
        },
    ]
}



MetaHead.defaultProps = {
    ogTitleCon:"맥스더크리에이티브 | MAX The Creative 3rd | Coming Soon",
    ogDescriptionCon:"MAX The Creative 2nd가 성황리에 종료되었습니다. 관심 가져주신 모든 분께 감사드리며 광고업계에서 개성적인 광고 전략으로 성공하고 있는 회사들과 인사이트를 공유하고 교류하며 광고주분들만의 크리에이티브 전략을 완성하는 MAX the Creative는 최고의 컨퍼런스가 될 수 있도록 노력하겠습니다. MAX The Creative 3th 역시 많은 관심과 성원 부탁합니다."
}



