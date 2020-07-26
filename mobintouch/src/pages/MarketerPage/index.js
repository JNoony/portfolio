import React from 'react';

// import SubHead from '../../components/Header/SubHead';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TopBtn from '../../components/TopBtn';
import ContentsBox from './contentsBox';

export default function Marketer ({match}){
    return (<>
        <Header title={textData.title} class={textData.visual} text={textData.text} />
        <ContentsBox />
        <TopBtn path={match.path} />
        <Footer />
    </>);
}

const textData = {
    visual:'sub-visual ',
    title: <>당신의 커리어는 안녕하신가요?</>,
    text:<>모비인터치는 ‘마케팅 전문 커리어 컨설팅 서비스’로  
    <br className=""/>대한민국 모든 마케터의 보다 나은 커리어 개발을 지원합니다. </>
} 

