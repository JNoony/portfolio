import React from 'react';
import { Link } from 'react-router-dom';

// import SubHead from '../../components/Header/SubHead';
import Header from '../../components/Header';
import ContentsBox from './contentsBox';
import Footer from '../../components/Footer';
import TopBtn from '../../components/TopBtn';

export default function Company ({match}){
    return(<>
        <Header text={textData.text} title={textData.title} class={textData.visual}/>
        <ContentsBox />
        <TopBtn path={match.path}/>
        <Footer />
    </>)
}

//header
const textData = {
    visual:'sub-visual company',
    title: <>기다린다고 오지 않아요, 좋은 마케터</>,
    text:<>모비인터치는 실력있는 마케터를 찾는 회사와
    <br className=""/>이직을 희망하는 마케터를 연결하는 마케터 전문 인재추천/헤드헌팅 서비스입니다.
    <div className="sub-btn"><Link to={'/contact'} rel="noopener noreferrer" className="btn-style btn-style-visual">문의 바로가기</Link></div>
    </>
} 


