
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

// import { Icon } from 'react-materialize';
// import ReactLoading from "react-loading";

import MetaHead from './helmet';

import Footer from '../Footer';
import Header from '../Header';
import TabNavi from '../../../default/TabNavi';

import Visual from '../Visual';
import Services from '../components/Services';
import Sponsored from '../components/Sponsored';
import Agency from '../components/Agency';
import Apply from '../Apply';
import Gallery from '../../../default/Gallery';
import Award from '../Award';
import Ticket from '../Apply/Ticket';
import Location from '../../../default/Location';
import Faq from '../Faq/FaqLayout';
import Contactus from '../components/Contactus';



export default function Main ({ match }){
    return (
        <>  
            {/* <Loading />  */}
            {/* meta tag */}
            <MetaHead />

            <Header path={match.path}/>
            {/* <MainNav /> */}
            <TabNavi class={TabNaviData.class} data={TabNaviData.data} />
            <Visual />
            <div className="contents">
                <Sponsored />
                <Apply />
                <Gallery src={gallerySrc} />
                <Agency />
                <Award />
                <Ticket />
                <Location imgSrc={locationData.imgSrc}
                          imgAlt={locationData.imgAlt}
                          data={locationData.data} />
                <Faq />
                <Services />
                <Contactus data={MetaHead.defaultProps}/>
            </div>
            <Footer /> 
        </>
    );
}

const locationData = {
  class:'',
  imgSrc: process.env.PUBLIC_URL +'/images/map.jpg',
  imgAlt:'map',
  data:[
    { title:'주소',
      text:<>서울특별시 서초구 양재동 24번지 (강남대로 213번지)<br className="pc"/>
      7층 그랜드홀</>
    },
    { title:'교통편',
      text:'3호선 양재역/신분당선 양재역-9번 출구'
    },
  ]
}

const gallerySrc = '/2019/images/pic';

MetaHead.defaultProps = {
    ogTitleCon:"맥스더크리에이티브|MAX the Creative 2nd|11월 12일-13일 엘타워 7층 그랜드홀",
    ogDescriptionCon:"5년간의 Max-summit 경험을 바탕으로 크리에이티브 전략을 완성하는 자리를 마련했습니다. 광고업계에서 개성적인 광고 전략으로 성공하고 있는 회사들과 인사이트를 공유하고 교류하며 광고주분들만의 크리에이티브 전략을 완성하는 MAX the Creative 2nd."
}

const TabNaviData = {
    class:'main-sub-head',
    data:[
        { class:'tab',
          href:'#agency',
          linkClass:'btn-link',
          dataRel:'#agency',
          name:'대행사 매칭'
        },
        { class:'tab',
          href:'#award',
          linkClass:'btn-link',
          dataRel:'#award',
          name:'award'
        },
        { class:'tab',
          href:'#ticket',
          linkClass:'btn-link',
          dataRel:'#ticket',
          name:'ticket'
        },
        { class:'tab',
          href:'#location',
          linkClass:'btn-link',
          dataRel:'#location',
          name:'location'
        },
        { class:'tab blind',
          href:'#apply',
          linkClass:'btn-link',
          dataRel:'#apply',
          name:'apply'
        },
    ]
}


