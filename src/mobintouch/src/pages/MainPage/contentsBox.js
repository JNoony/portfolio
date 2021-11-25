import React,{ useEffect }from 'react';

// import BoxIcon from '../../components/BoxIcon';
import BoxIconButton from '../../components/BoxIconButton';
import BannerCompo from '../../components/BannerCompo';
import LinkButton from '../../components/LinkButton';

export default function ContentsBox(){
    // const isMobile = ()=>{
    //   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    // }
    // const kakaoAdd = (event) => {
    //     if(isMobile()){
    //       //채널 추가
    //        window.Kakao.Channel.addChannel({
    //          channelPublicId: '_yUfrT' // 채널 홈 URL에 명시된 id로 설정합니다.
    //       })
    //       console.log('mobile')
    //     }else{
    //       let newWindow = window.open('about:blank');
    //       newWindow.location.href = 'http://pf.kakao.com/_yUfrT';
    //       console.log('pc')
    //     }
    // };

    // useEffect(()=>{
    //     window.Kakao.init('76a62eaf98534a906b31f501348f0548');
    //     // window.Kakao.Channel.createAddChannelButton({
    //     //   container: '#kakao-channel-button',
    //     //   channelPublicId: '_yUfrT' // 채널 홈 URL에 명시된 id로 설정합니다.
    //     // })
    // })

    return(
      <div className="section-info">
        <div className="section-con partner-con" >
          <BoxIconButton 
            class={IconInfo.class}
            title={IconInfo.title}
            text={IconInfo.text}
            btn={IconInfo.btn}
            btnUrl={IconInfo.btnUrl}
            btnName={IconInfo.btnName}
            data={IconInfo.data} />
        </div>

        <LinkButton
          class={LinkInfo.class}
          title={LinkInfo.title}
          text={LinkInfo.text}
          data={LinkInfo.data} />

        <BannerCompo />
      </div>
    )
}

const IconInfo={ 
  class:['partner-con-top blind-label m-3w'],
  label:'About Partner Program',
  title:'모비인터치 파트너로 함께하세요!',
  text:<>대한민국 마케터들의 보다 나은 커리어 개발을 위해 다양한 혜택을 제공하고 있습니다.</>,
  btn:'kakao-chn',
  btnUrl:'/partner',
  btnName:'모비인터치 오픈 채용 포지션',
  data:[
    { src:'./images/partner/i-partner-1-1.png',
      text:<span>지인 추천 채용 성공 시,<br/>추천 보상금 지급<br className="mobile"/> (최대 150만 원)</span>, },
    { src:'./images/partner/i-partner-2-1.png',
      text:<span>커리어 개발을 위한<br />마케팅 교육,
      <br className="mobile"/>컨퍼런스 초대권 제공</span>,},
    { src:'./images/partner/i-partner-3-1.png',
      text:<span>워라밸을 위한 공연 전시<br/>무료 초대권 티켓 제공</span>,}
  ]
}

const LinkInfo={ 
  title:'MOBI NETWORK',
  text:<>모비인터치는 다양한 마케팅 네트워크를 보유하고 있습니다.</>,
  data:[
    { link:'http://www.mobidays.com/',
      src:'./images/mobidays-logo.png',
      title:'Mobidays',
      text:'모바일 퍼포먼스 마케팅 전문 에이전시',
      name:'바로가기', },
    { link:'https://maxsummit.co/',
      src:'./images/max-logo.png',
      title:'MaxSummit',
      text:'국내 최대 규모의 마케팅 컨퍼런스',
      name:'바로가기', },
    { link:'https://www.mobiacademy.co.kr/',
      src:'./images/academy-logo.png',
      title:'MobiAcademy',
      text:'마케팅 전문 교육 플랫폼',
      name:'바로가기', },
    { link:'https://www.mobiinside.co.kr/',
      src:'./images/inside-logo.png',
      title:'MobiInside',
      text:'마케팅, Ad-tech, 스타트업 전문 웹진',
      name:'바로가기', },
  ]
}
