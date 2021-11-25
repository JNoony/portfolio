import React from 'react';

// import SubHead from '../../components/Header/SubHead';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TopBtn from '../../components/TopBtn';
import ContentsBox from './contentsBox';

export default function Contactus({match}){

    return(<>
        <Header text={textData.text} title={textData.title} class={textData.visual}/>
        <ContentsBox />
        <TopBtn path={match.path}/>
        <Footer />
    </>)
}

const textData = {
    visual:'sub-visual sub-visual-contact',
    title: <>We Connect Marketing</>,
    text:<>HR, 마케팅, 헤드헌팅 각 분야의 전문가가 모여<br/>
    최고의 마케터 채용을 도와드립니다.</>
} 