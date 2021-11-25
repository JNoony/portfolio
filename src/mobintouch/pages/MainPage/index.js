import React from 'react';
import { Route,Link } from 'react-router-dom';
// import {CookiesProvider} from 'react-cookie';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TopBtn from '../../components/TopBtn';
import Client from '../../components/Client';
import ContentsBox from './contentsBox';
import Modal from '../../components/Modal';
import BannerLink from '../../components/BannerLink';
import BannerFixedLink from '../../components/BannerFixedLink';

const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
const handleClick = event => topFunction();

export default function Main({match}) {
    return (
    <>  
        <Header 
            path={match.path}
            text={textData.text} 
            title={textData.title} />

        <div className="section visual-text wid ">
            <div className="visual-text-con ">
                <h2 className="content-title">모비인터치 ?</h2>
                <p className="content-text">
                    모비인터치는 역량 있는 마케터 채용을 원하는 회사와,<br />
                    이직을 희망하는 마케터를 연결하는 마케팅 전문 인재추천<br />
                    서비스로, 업계 마케터들의 커리어 성장을 다방면으로<br />
                    지원하고, 기업의 채용 리소스를 최소화 하기 위해<br />
                    론칭한 모비데이즈의 신규 비즈니스입니다.
                </p>
            </div>
            <div className="visual-text-con visual-text-img ">
                <img src="images/mobi-icon.png" alt="모비데이즈 설명 이미지" />
            </div>
        </div>
        <Client />
        <div className="section section-nav ">
             <div className="wid center-align section-nav-con">
                 <h2 className="content-title content-title-small ">당신은 누구신가요?</h2>

                 <div className="row">       
                     <div className="col s12 m6 section-nav-con-box ">
                         <div className="card ">
                             <div className="card-content ">
                                 <p className="card-img card-img1"></p>
                                 <span className="card-title">실력있는 마케터가 필요한</span>
                                 <Link to={'/company'} className="card-btn btn-company"
                                       onClick={handleClick } >company</Link>
                             </div>
                         </div>
                     </div>

                     <div className="col s12 m6 section-nav-con-box ">
                        <div className="card ">
                             <div className="card-content ">
                                <p className="card-img card-img2"></p>
                                <span className="card-title">마케팅 커리어가 고민인</span>
                                <Link to={'/marketer'} className="card-btn btn-marketer"
                                      onClick={handleClick } >marketer</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
        <BannerLink
            class={bannerData.class}
            src={bannerData.src}
            alt={bannerData.alt}
            title={bannerData.title}
            btnUrl={bannerData.btnUrl}
            btnName={bannerData.btnName} />

        <ContentsBox />

        <TopBtn/>
        <BannerFixedLink 
            path={match.path}
            class={fixedData.class}
            title={fixedData.title}
            text={fixedData.text}
            btnName={fixedData.btnName}
            btnUrl={fixedData.btnUrl}
            btn={fixedData.btn}/>
        
        {/* <Modal 
            class={modalData.class}
            src={modalData.src}
            alt={modalData.alt}
            btnUrl={modalData.btnUrl}
            btnName={modalData.btnName} /> */}

        <Footer />
        
    </>
  );
}

// header banner data
const textData = {
    title: <>당신의 커리어는 안녕하신가요?</>,
    text:<>마케팅 전문 커리어 컨설팅 서비스 모비인터치는
    <br />대한민국 모든 마케터들의 보다 나은 커리어 개발을 지원합니다.</>
} 

// contents banner data
const bannerData = {
    class:'center-align bgColor-gray',
    src:'images/icon-02.png',
    alt:'icon',
    title:<>
    <h3 className="section-con-title ">마케터 전문 인재추천 / 커리어 컨설팅</h3>
    <div className="section-con-text ">플랫폼 모비인터치에서는 기업 채용 / 마케터 이직 / 커리어<br className="mobile"/> 개발과 관련하여 맞춤형 컨설팅을 제공하고 있습니다.
    <br/>문의 사항이 있으시거나 맞춤 컨설팅이 필요하시다면<br className="mobile"/> 하단 버튼을 통해 문의바랍니다.</div>
    </>,
    btnUrl:'/contact',
    btnName:'문의하기'
}

const fixedData = {
    class:'',
    title:'나의 마케팅 직무 역량은?',
    text:'나의 마케팅 직무 역량을 진단하고 나에게 맞는 채용 포지션을 추천받아보세요!',
    btnName:'무료진단하기',
    btnUrl:'https://forms.gle/qykn7ppNXscgKczm6',
    btn:'link-fix-btn'
}

const modalData = {
    class:'modal-bgFull ',
    src:'images/modal/news-01re.jpg',
    alt:'카드뉴스',
    btnUrl:'https://forms.gle/qykn7ppNXscgKczm6',
    btnName:''
}
