import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import BoxIcon from '../../components/BoxIcon';
import BoxLink from '../../components/BoxLink';
import BoxIconInfo from '../../components/BoxIconInfo';
import BannerLink from '../../components/BannerLink';
import Client from '../../components/Client';

export default function ContentsBox(){
  return(
    <section id="">
      <div className="wid section-con business-con" >
        <BoxIcon 
          class={IconInfo.class}
          label={IconInfo.label}
          title={IconInfo.title}
          text={IconInfo.text}
          data={IconInfo.data} />
      </div>
      
      <BoxIconInfo 
        class={programInfo.class}
        title={programInfo.title}
        data={programInfo.data} />

      <Client />

      <div className="wid section-con-top align-center" >
        <BoxLink 
            class={LinkInfo.class}
            title={LinkInfo.title}
            text1={LinkInfo.text1}
            text2={LinkInfo.text2}
            data={LinkInfo.data} />
      </div>      

      <BannerLink 
        class={bannerData.class}
        src={bannerData.src}
        alt={bannerData.alt}
        title={bannerData.title}
        btnUrl={bannerData.btnUrl}
        btnName={bannerData.btnName} />

    </section>
  )
}


/*-----------------
*
*  DATA
*
*----------------*/ 
// BannerLink data[하단-문의하기 배너]
const bannerData = {
  class:'left-align blind-img bgColor-gray',
  src:'images/icon-02.png',
  alt:'icon',
  title:<>모비인터치에서는 마케팅 또는 마케터 채용 관련 맞춤 컨설팅을 진행해드리고 있습니다.<br />
  마케터/인재 채용 또는 제휴/파트너쉽 관련 문의 사항을 남겨주세요.</>,
  btnUrl:'/contact',
  btnName:'문의하기'
}

// company소개 아이콘 데이터
const IconInfo={ 
  class:['business-con-top m-3w'],
  label:'for Company',
  title:'실력 있는 마케터를 찾고 있나요 ?',
  text:<>모비인터치는 마케터의 역량과 직무에 대한 높은 이해도를 바탕으로<br className="pc"/>
    기업의 채용 니즈에 부합하는 최고의 마케터를 추천해 드리고 있습니다.</>,
  data:[
    { src:'./images/company/i-company-1-1.png',
      text:<span>5년간 축적된<br/>국내 최대 마케터 DB</span>, },
    { src:'./images/company/i-company-2-1.png',
      text:<span>기업 HR 브랜딩을 위한<br/>채용 프로세스 컨설팅</span>,},
    { src:'./images/company/i-company-3-1.png',
      text:<span>채용부터 랜딩까지<br/>차별화된 Fit-in 프로그램</span>,}
  ]
}

// 프로그램 안내 프로세스 픽토그램 데이터
const programInfo = {
  class:'blind-text bgColor-blue strapline',
  title:'채용 프로세스 안내',
  text:'',
  data:[
    { src:process.env.PUBLIC_URL +'/images/program/i-program-1.png',
      text:<span>기업 상황에 맞는<br/>채용 포지션 컨설팅 진행</span>,
    },
    { src:process.env.PUBLIC_URL +'/images/program/i-program-2.png',
      text:<span>모비데이즈에서 5년간 축적한<br/>마케터 DB를 통한 인재 확보</span>,
    },
    { src:process.env.PUBLIC_URL +'/images/program/i-program-3.png',
      text:<span>추천 인재 서류 제출부터 면접,<br/>연봉협상, 오퍼레터까지 모두 지원</span>,
    },
    { src:process.env.PUBLIC_URL +'/images/program/i-program-4.png',
      text:<span>입사 후 소프트랜딩을 위한<br/>마케팅 교육 지원</span>,
    },
    // { src:process.env.PUBLIC_URL +'/images/program/i-program-5.png',
    //   text:<span>추천 지인 이직성공 시,<br/>50만원~150만원 지급</span>,
    // },
  ]
}

// 인사이드,아카데미 링크 긁어오기
const LinkInfo = {
  class:['business-con-btm '],
  title:<>기업의 마케팅 역량 강화를 위한 <strong>다양한 컨텐츠를 제공합니다.</strong></>,
  text1:<><img src="./images/academy-logo.png" alt="모비아카데미 로고"/><p>최상의 컨텐츠로 만드는 교육강좌</p></>,
  text2:<><img src="./images/inside-logo.png" alt="모비인사이드 로고"/><p>모바일 트렌드 미디어</p></>,
  data:[
    { name:'aca',
      src : 'https://www.mobiacademy.co.kr/data/thumbImages/SAMPLE_1580796934.jpg',
      title:'[오픈특가] 광고 대행사의 실무자가 알려주는 유튜브 광고 운영 전략',
      text:'미디어 환경의 중심, 유튜브 광고에서 살아남는 법',
      link:'#',
    },
    { name:'in',
      src :'https://s3-ap-northeast-2.amazonaws.com/mobiinsidecontent/kr/wp-content/uploads/2020/03/02135704/%EB%89%B4%EC%8A%A4%EC%A0%A4%EB%A6%AC_%EC%BD%94%EB%A1%9C%EB%82%98-%EB%B0%94%EC%9D%B4%EB%9F%AC%EC%8A%A4_%EC%9D%B8%ED%84%B0%EB%9E%99%ED%8B%B0%EB%B8%8C.png',
      title:'[데이터로 보는 마케팅 인사이트] 빅데이터는 실제 현장에서 어떻게 활용되고 있을까?',
      text:'남양주시는 기존 빅데이터 분석시스템의 문제점인 분석 소요시간이 한 달 이상이 걸렸던 점, 지속적인 데이터 현행화의 어려움, 관련 기술 대부분을 용역업체에 의존해야 했던 부분들을 개선하기 위해 빅데이터를 활용해 ‘데이터 기반의 의사결정 시스템’을 구축했다고 밝혔습니다. ',
      link:'#',
    },
    { name:'in',
      src : 'https://s3-ap-northeast-2.amazonaws.com/mobiinsidecontent/kr/wp-content/uploads/2020/02/27141530/01-1.jpg',
      title:'[오픈서베이 트렌드 아티클] 인지도 1위, 마켓컬리 중심으로 온라인 식료품 시장 살펴보기',
      text:'‘온라인 식료품’ 할 때 가장 먼저 떠오르는 브랜드가 어디인가요? 한 달에 1번 이상 온라인 식료품을 구매하는 2040 여성들은 마켓컬리를 1순위로 꼽았습니다(22.0%). 이제 소비자들에게 마켓컬리가 명실공히 온라인 식료품 시장의 대표 브랜드로 인식되기 시작한 겁니다. 마켓컬리 뒤를 쿠팡·이마트몰·홈플러스몰·SSG닷컴이 잇고 있습니다(각 20.4%, 16.2%, 6.8%, 4.7%).',
      link:'#',
    },
    { name:'in',
      src : 'https://s3-ap-northeast-2.amazonaws.com/mobiinsidecontent/kr/wp-content/uploads/2020/02/12142203/20200212_141854-1068x736.png',
      title:'[기획의 건축] 비즈니스 기획, 서비스 기획의 정의',
      text:'비즈니스 기획과 서비스 기획을 구분하여 이해할 필요가 있습니다. 명확한 정의를 토대로, 서비스 기획이 어떻게 비즈니스를 더 발전시킬 수 있는지 생각해야 합니다. 이제 막 시작하는 스타트업뿐만 아니라 아직 체계가 잡혀있지 않은 회사들은 이 둘을 잘 구분 짓지 않습니다. ',
      link:'#',
    },

  ]
}
