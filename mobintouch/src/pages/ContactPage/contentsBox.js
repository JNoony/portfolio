import React from 'react';

import Form from '../../components/Form';
import Form3 from '../../components/Form3';

export default function ContentsBox(){
    return(
        <section className="section-contact">
            <div className="wid banner-list">
                <ul className="banner-cardBox">
                    {cardData.map((con,i)=>(
                        <CardList src={con.src} 
                            alt={con.nameKo} 
                            nameKo={con.nameKo}
                            nameEn={con.nameEn}
                            mente={con.mente} 
                            key={i} />
                    ))}
                </ul>
            </div>

            {/* 현재 사용중인 폼 */}
            {/* <Form3 /> */}
            <Form />
        </section>
    )
}

    
const CardList = (props)=>{
    return(
        <li>
            <div className="card">
                <div className="card-image">
                    <img src={props.src} alt={props.nameKo}/>
                </div>
                <div className="card-content">
                    <p className="txt-name-ko">{props.nameKo}</p>
                    <p className="txt-name-en">{props.nameEn}</p>
                    <p className="txt-mente">{props.mente}</p>
                </div>
            </div>
        </li>
    )
}

const cardData = [
    { src:"./images/contact/team01.png", 
      nameKo:"김필재" , nameEn:"Feeljae Kim",
      mente:<>마케터의 더 나은 내일을 생각하는 
      대기업 HR 출신 직무 역량 개발 전문가</> },
    { src:"./images/contact/team02.png", 
      nameKo:"최휘영" , nameEn:"Hweeyoung Choi",
      mente:<>스타트업 브랜드 마케팅 기획, 실무
      현업 출신 마케팅 커리어 컨설턴트</> },
    { src:"./images/contact/team03.png", 
      nameKo:"장유나" , nameEn:"Yuna Jahng",
      mente:<>신입부터 CMO까지 
      모든 마케터의 커리어를 책임지는 
      글로벌 헤드헌팅사 출신 커리어 전문가</> },
    { src:"./images/contact/team04.png", 
      nameKo:"이상민" , nameEn:"Sangmin Lee",
      mente:<>다양한 직무를 경험한 
      외국계 마케팅 기업 출신
      채용 컨설팅 / 직무 분석 전문가</> },
]


