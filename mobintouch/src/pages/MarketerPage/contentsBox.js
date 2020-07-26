import React from 'react';

import BoxIcon from '../../components/BoxIcon';
import BoxIconButton from '../../components/BoxIconButton';
import BannerCompo from '../../components/BannerCompo';
import BoxLink from '../../components/BoxLink';
import BannerLink from '../../components/BannerLink';

export default function ContentsBox(){
  return(
    <section id="section2">
      <div className=" section-con marketer-con" >
        <BoxIcon 
          class={IconInfo.class}
          label={IconInfo.label}
          title={IconInfo.title}
          text={IconInfo.text}
          data={IconInfo.data} />

        <BannerCompo />

        <BoxIconButton 
            class={IconButtonInfo.class}
            label={IconButtonInfo.label}
            title={IconButtonInfo.title}
            text={IconButtonInfo.text}
            btn={IconButtonInfo.btn}
            btnUrl={IconButtonInfo.btnUrl}
            btnName={IconButtonInfo.btnName}
            data={IconButtonInfo.data} />

        <BoxLink 
          class={LinkInfo.class}
          title={LinkInfo.title}
          text1={LinkInfo.text1}
          text2={LinkInfo.text2}
          data={LinkInfo.data} />
      </div>

      <ListCard 
        class={listData.class}
        title={listData.title}
        data={listData.data} />

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

const ListCard = (props)=>{
  return(
    <div className={`info-listCard ${props.class}`}>
      <div className="wid">
        <h3 className="section-con-title listCard-title center-align">{props.title}</h3>
        <ul className={`listCard-content row flexBox`}>
        {props.data.map((con,i)=>{
          return(
            <li key={i} className="list-con">
              <p className="list-con-title">{con.title}</p>
              <p className="list-con-sort">{con.sort}</p>
              <p className="list-con-text">{con.text}</p>
              <p className="list-con-user">{con.user}</p> 
            </li>
          )
        })}
        </ul> 
      </div> 
    </div>
  )
}

/*-----------------
*
*  DATA
*
*----------------*/ 
// Visual banner text
const bannerData = {
  class:'left-align blind-img',
  src:'images/icon-02.png',
  alt:'icon',
  title:<>모비인터치에서는 대한민국 모든 마케터의 커리어<br className="mobile"/> 개발을 위해 맞춤 컨설팅을 진행하고 있습니다.<br />
  이직 또는 커리어 고민, 교육  관련 문의 사항을 남겨주세요.</>,
  btnUrl:'/contact',
  btnName:'문의하기'
}

// marketer소개 픽토그램 데이터
const IconInfo={ 
  class:['marketer-con-top wid m-3w'],
  label:'for marketer',
  title:'마케팅 커리어가 고민인가요?',
  text:<>마케팅 커리어를 위해 꼭 알아야 할 트렌드, 인사이트를 확인하세요!</>,
  data:[
    { src:'./images/marketer/i-marketer-1-1.png',
      text:<span>Fun &#38; Smart<br/>네트워킹 커뮤니티 형성</span> },
    { src:'./images/marketer/i-marketer-2-1.png',
      text:<span>포지션 추천부터 연봉협상까지!<br/>레벨업을 위한 이직 컨설팅</span>},
    { src:'./images/marketer/i-marketer-3-1.png',
      text:<span>탄탄한 Career Path를 위한<br/>경력 개발 컨설팅</span>}
  ]
}

// 이직후기 리스트
const listData = {
  class:'bgColor-blue',
  title:'채용 / 이직컨설팅 후기',
  data:[
    { title:'“원하는 회사에서 입사 제안 받았습니다” ',
      sort:'#이직의 기술 강의 후기',
      text:<>이직 준비 시작해, 이번 주에 최종 제안을 두 곳에서
      받고 갈 곳을 확정했습니다.새 회사는 2020년 1월
      부터 다니게 되었습니다.본부장님께서 강의해주신
      내용, 나눠주신 이력서 샘플 덕분에 좋은 결과 얻을 
      수 있었습니다.정말 감사하다는 말씀 드리고 싶어
      메일을 쓰게 되었어요.</>,
      user:'3년차, 콘텐츠 마케터' 
    },
    { title:'“만족하는 커리어를 쌓고 있습니다.”',
      sort:'#이직 컨설팅 후기',
      text:<>5년차 마케터입니다. 직무에 대한 고민이 많았던
      시점에 모비인터치에서 이직 제안을 받아 이직 
      컨설팅과 더불어 직무, 희망 산업, 규모, 연봉 등
      커리어 컨설팅도 받았었습니다. 제 커리어에 대해
      함께 고민해주신 덕분에 현재 원하는 산업에서
      직무를 잘 찾아 매우 만족하며 근무 중입니다.</>,
      user:'5년차, 퍼포먼스 마케터'
    },
    { title:'“추천 보상금 받았어요!”',
      sort:'#파트너 지인 추천',
      text:<>지인이 이직을 고민하고 있던 찰나에 모비인터치
      지인 추천 프로그램을 통해 포지션을 추천했고,
      이직에 성공하여 덕분에 저도 추천 보상금을 받게
      되었습니다. 지인에게도 좋은 포지션을 소개시켜
      주어 뿌듯했고, 저에게도 보상금이 나와서
      1석 2조였습니다.</>,
      user:'8년차, 브랜드 마케터'
    },
    // { title:'파트너 지인 추천 후기',
    //   sort:'#파트너 지인 추천',
    //   text:<>지인이 이직을 고민하고 있던 찰나에 모비인터치
    //   지인 추천 프로그램을 통해 포지션을 추천했고,
    //   이직에 성공하여 덕분에 저도 추천 보상금을 받게
    //   되었습니다. 지인에게도 좋은 포지션을 소개시켜
    //   주어 뿌듯했고, 저에게도 보상금이 나와서
    //   1석 2조였습니다.</>,
    //   user:'8년차, 브랜드 마케터'
    // },
  ]
}

//파트너프로그램 소개 픽토그램 데이터
const IconButtonInfo={ 
  class:['partner-con-top m-3w'],
  label:'About Partner Program',
  title:'모비인터치 파트너로 함께하세요!',
  text:<>마케팅 네트워크를 활용하여 지인을 추천하는<br />
  “모비인터치 파트너 프로그램”으로 다양한 혜택을 받아보세요.</>,
  btn:'kakao-chn',
  btnUrl:'/partner',
  btnName:'파트너 프로그램 참여하기',
  data:[
    { src:'./images/partner/i-partner-1-1.png',
      text:<span>지인 추천 채용 성공 시,<br/>추천 보상금 지급<br className="mobile" /> (최대 150만 원)</span>, },
    { src:'./images/partner/i-partner-2-1.png',
      text:<span>커리어 개발을 위한<br/>마케팅 교육, <br className="mobile" />컨퍼런스 초대권 제공</span>,},
    { src:'./images/partner/i-partner-3-1.png',
      text:<span>워라밸을 위한 공연 전시<br/>무료 초대권 티켓 제공</span>,}
  ],
}


// 역량강화->인사이드,아카데미 링크 긁어오기
const LinkInfo = {
  class:['marketer-con-btm wid'],
  title:<>마케터의 역량 강화를 위한 <strong>다양한 컨텐츠를 제공합니다.</strong></>,
  text1:<><img src="./images/academy-logo.png" alt="모비아카데미 로고"/><p>최상의 컨텐츠로 만드는 교육강좌</p></>,
  text2:<><img src="./images/inside-logo.png" alt="모비인사이드 로고"/><p>모바일 트렌드 미디어</p></>,
  data:[
    { name:'aca',
      src : 'https://www.mobiacademy.co.kr/data/thumbImages/SAMPLE_1582178941.jpg',
      title:'[6차앵콜] 구글 애널리틱스로 퍼포먼스 성과 내기',
      text:'GA로 전환율 161% 올리는 방법',
      link:'https://www.mobiacademy.co.kr/html/application/lecture_detail_offLine.php?idx=206&enc_data=aWR4PTIwNiZQYWdlTnVtYmVyPTEmc2VhcmNoX2l0ZW09JnNlYXJjaF9vcmRlcj0=||',
    },
    { name:'aca',
      src : 'https://www.mobiacademy.co.kr/data/thumbImages/SAMPLE_1580894963.jpg',
      title:'[오픈특가] 시장 분석 및 데이터를 활용한 앱 마케팅 전략 수립',
      text:'앱 마케팅, 감으로 하지 말고 데이터로 하자!',
      link:'https://www.mobiacademy.co.kr/html/application/lecture_detail_offLine.php?idx=197&enc_data=aWR4PTE5NyZQYWdlTnVtYmVyPTEmc2VhcmNoX2l0ZW09JnNlYXJjaF9vcmRlcj0=||',
    },
    { name:'in',
      src : 'https://s3-ap-northeast-2.amazonaws.com/mobiinsidecontent/kr/wp-content/uploads/2020/02/12142203/20200212_141854-1068x736.png',
      title:'[기획의 건축] 비즈니스 기획, 서비스 기획의 정의',
      text:'비즈니스 기획과 서비스 기획을 구분하여 이해할 필요가 있습니다. 명확한 정의를 토대로, 서비스 기획이 어떻게 비즈니스를 더 발전시킬 수 있는지 생각해야 합니다. 이제 막 시작하는 스타트업뿐만 아니라 아직 체계가 잡혀있지 않은 회사들은 이 둘을 잘 구분 짓지 않습니다.',
      link:'https://www.mobiinside.co.kr/2020/02/14/planning-service/',
    },
    { name:'in',
      src : 'https://s3-ap-northeast-2.amazonaws.com/mobiinsidecontent/kr/wp-content/uploads/2020/02/19111016/GettyImages-1190414767-1068x712.jpg',
      title:'[스타트업 주니어로 살아남기] 스타트업이 일하는 방법',
      text:'스타트업이 일반적인 기업이랑 뭐가 어떻게 다른지 궁금한 사람을 위해 글을 써본다. 나처럼 스타트업을 처음 들어가서 많이 당황한 사람도 있을 것이고, 스타트업에 지원해보고 싶은데 정확히 어떻게 다른지 알 수 없어서 불안해하는 사람도 있을 것이다.',
      link:'https://www.mobiinside.co.kr/2020/02/19/udv-startup/',
    },

  ]
}


