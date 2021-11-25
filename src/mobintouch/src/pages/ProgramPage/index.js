import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';

// import SubHead from '../../components/Header/SubHead';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TopBtn from '../../components/TopBtn';
import BoxIcon from '../../components/BoxIcon';
import BoxIconButton from '../../components/BoxIconButton';
import ProgramNavi from './ProgramNavi';
import BannerFixedLink from '../../components/BannerFixedLink';

import './programPage.css'


export default function PartnerProgram({match}){
  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  const handleClick = event => topFunction();

  return (
    <>
    <Header 
      title={textData.title} 
      text={textData.text} 
      alert={textData.alert} 
      class={textData.visual} />
    <section id="section3">
      <div className="section-con partner-con" >

        <BoxIconButton 
            class={IconButtonInfo.class}
            label={IconButtonInfo.label}
            title={IconButtonInfo.title}
            text={IconButtonInfo.text}
            btn={IconButtonInfo.btn}
            btnUrl={IconButtonInfo.btnUrl}
            btnName={IconButtonInfo.btnName}
            txtClass={IconButtonInfo.txtClass}
            txtCon={IconButtonInfo.txtCon}
            data={IconButtonInfo.data} />


        <BoxIconButton 
            class={infographicsBoxData.class}
            title={infographicsBoxData.title}
            text={infographicsBoxData.text}
            txtCon={infographicsBoxData.txtCon}
            data={infographicsBoxData.data} />

        <div className="link-button-box ">
          <Link to='/partner/position' className="btn-style" 
                onClick={handleClick} >채용 중인 공고 확인하기</Link>
        </div> 

      </div>

    </section>

    {/* <BannerFixedLink 
      path={match.path}
      class={fixedData.class}
      title={fixedData.title}
      text={fixedData.text}
      btnName={fixedData.btnName}
      btnUrl={fixedData.btnUrl}
      btn={fixedData.btn}/> */}

    <TopBtn path={match.path} />
    <Footer />
    
    </>
  );
}


const InfoContnets = ( props ) => {
  return(
      <li className={`info-icon `}>
        <div className="card">
           <div className="card-image">
             <img src={props.src} alt={props.text} />
           </div>
           <div className="card-content">
            <p className="">{props.text}</p>
           </div>
        </div>
      </li>
  )
}


//BannerFixedLink data
const fixedData = {
  class:'blind-notAll',
  title:'',
  text:<>본 페이지는 모비인터치 파트너에게만 보이는 ‘비공개 페이지‘입니다.
       이용을 원하신다면 즐겨찾기 또는 하단 ‘알림 받기’ 버튼을 이용해주세요.</>,
  btnName:'',
  btnUrl:'',
  btn:''
}

const IconButtonInfo = {
  class:'partner-con-top m-3w',
  label:'About Partner Program',
  title:'모비인터치 파트너로 함께하세요!',
  text:<>대한민국 마케터들의 보다 나은 커리어 개발을 위해<br/>다양한 혜택을 제공하고 있습니다.</>,
  btn:'link-button-box first',
  btnUrl:'https://open.kakao.com/o/gelKPFvb',
  btnName:'알림받기',
  txtClass:'',
  txtCon:<>모비인터치 파트너만을 위한 마케팅 채용 공고를 지금 바로 확인해보세요.<br className="pc" />
         연봉,커리어 개발, 워라밸 등에 맞춰 선별된 다양한 마케팅 직무 채용 포지션에 <br className="pc" />
         직접 지원 또는 지인 추천이 가능합니다.</>,
  data:[
    { src:process.env.PUBLIC_URL +'/images/partner/i-partner-1-1.png',
      text:<span>지인 추천 채용 성공 시, <br/>추천 보상금 지급 <br className="mobile"/>(최대 150만 원)</span>,
    },
    { src:process.env.PUBLIC_URL +'/images/partner/i-partner-2-1.png',
      text:<span>커리어 개발을 위한<br className="mobile"/> 마케팅 교육,<br/>컨퍼런스 초대권 제공</span>,
    },
    { src:process.env.PUBLIC_URL +'/images/partner/i-partner-3-1.png',
      text:<span>워라밸을 위한 <br className="mobile"/>공연 전시<br/>무료 초대권 티켓 제공</span>,
    },
  ]
}

const infographicsBoxData={
  class:'infographicsBox blind-btn blind-label m-3w',
  label:'',
  title:<>마케터 이직 &#38; 채용 진행 프로세스</>,
  text:<>주변에 퇴사를 고민하는, 이직을 준비하는 지인을 추천하여<br />
       최대 150만원의 채용 성공 보상금을 받아보세요.</>,
  btn:'',
  btnUrl:'',
  btnName:'',
  txtClass:'',
  txtCon:<>모비인터치 파트너만을 위한 마케팅 채용 공고를 지금 바로 확인해보세요.<br className="pc" />
         연봉,커리어 개발, 워라밸 등에 맞춰 선별된 다양한 마케팅 직무 채용 포지션에 <br className="pc" />
         직접 지원 또는 지인 추천이 가능합니다.</>,
  data:[
    { src:process.env.PUBLIC_URL +'/images/program/i-program-1.png',
      text:<span>매일 업데이트되는<br/>신규 마케팅 <br/>채용 포지션 확인</span>,
    },
    { src:process.env.PUBLIC_URL +'/images/program/i-program-2.png',
      text:<span>지인에게<br/>포지션 공유 또는<br/>본인이 직접 지원 가능</span>,
    },
    { src:process.env.PUBLIC_URL +'/images/program/i-program-3.png',
      text:<span>서류 제출부터<br/>인터뷰까지<br/>전문적인 컨설팅 진행</span>,
    },
    { src:process.env.PUBLIC_URL +'/images/program/i-program-4.png',
      text:<span>연봉협상 및<br/>근무 처우 협의</span>,
    },
    { src:process.env.PUBLIC_URL +'/images/program/i-program-5.png',
      text:<span>추천 지인 이직성공 시,<br/>50만원~150만원 지급</span>,
    },
  ]
}

//header
const textData = {
  visual:'sub-visual sub-visual-btn',
  title:<>Society of Marketers<br />모비인터치 오픈 채용 포지션</>,
  text:<>모비인터치 파트너쉽 프로그램은 마케터의, 마케터에 의한, 마케터를 위해 운영되는
       <br className="pc" />마케팅 커리어 개발 / 이직 준비 / 채용 지원 프로그램입니다. 
       <div className="sub-btn"><a href=" https://docs.google.com/forms/d/e/1FAIpQLSd0dKMOjJiiOYEFhEN-4lDkWX8g3GEG8AxwIjIbneWKvysG4g/viewform" 
          target="_blank" 
          className="btn-style btn-style-visual" >문의 바로가기</a></div>
       </>,
  // alert:<>본 페이지는 모비인터치 파트너에게만 보이는 ‘비공개 페이지‘입니다.
  //       <br className="mobile" />이용을 원하신다면 즐겨찾기 또는 하단 ‘알림 받기’ 버튼을 이용해주세요.</>
} 




