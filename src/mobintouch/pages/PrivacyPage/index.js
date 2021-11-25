import React from 'react';

// import SubHead from '../../components/Header/SubHead';
import Header from '../../components/Header';
// import ContentsBox from './contentsBox';
import Footer from '../../components/Footer';
import TopBtn from '../../components/TopBtn';

export default function Privacy ({match}){
    return(<>
        <Header text={textData.text} title={textData.title} class={textData.visual}/>
        <TextDiv />
        <TopBtn path={match.path}/>
        <Footer />
    </>)
}


const TextDiv=()=>{
    return(
        <section className="wid section-con">
            <ul className=" text-contents ">
                <li>수집항목 : 이름, 휴대전화번호, 이메일주소, 경력정보 등의 지원자가 직접 작성한 본 서베이 및 향후 제출하는 이력서 내 모든 정보</li>
                <li>수집 및 활용목적 : 면접 관련 정보 제공, 면접자 불만처리 및 상담 등 민원 처리, 분쟁조정 및 해결을 위한 기록보존, 모비데이즈에서 제공하는 다양한 광고/마케팅 관련 정보 공유</li>
                <li>보관기간<br/>
                    <ul>
                        <li>개인정보 제공일로부터 1년간 보관되며, 보관기간 내에 신청자가 직접 개인정보 파기 요청을 하지 않는 경우, 자동으로 1년 연장</li>
                        <li>단, 상법 및 ‘전자상거래 등에서의 소비자 보호에 관한 법률’ 등 관련 법령에 의하여 일정 기간 보관이 필요한 경우에는 해당 기간 동안 보관함</li>
                    </ul>
                </li>
                <li>동의 거부권 등에 대한 고지: 정보주체는 개인정보의 수집 및 이용 동의를 거부할 권리가 있으나, 이 경우 채용 프로세스 지원에 제한이 있을 수 있습니다.</li>
            </ul>
        </section>
    )
}

const textData = {
    visual:'sub-visual blind-text',
    title: <>개인정보취급방침</>,
    text:<></>
} 


