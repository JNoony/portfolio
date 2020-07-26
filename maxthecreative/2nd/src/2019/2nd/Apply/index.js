import React from 'react';

import TextBox from '../../../default/TextBox';
import CardButton from '../../../default/CardButton';

export default function Apply(){
    return(
        <section className="section section-main  ">
            <div className="container ">
                <TextBox title={applyText.title} 
                         text={applyText.text} />
                <article className="section-target scrollspy" id="#apply">
                    <CardButton class={cardButtonData.class} 
                                id={cardButtonData.id} 
                                data={cardButtonData.data} />
                </article>
            </div>
        </section>
    )
}

// DATA
const applyText = {
    class:'',
    title:'행사 개요',
    text:<>5년간 광고 업계의 주요 행사로 자리잡은 MAX Summit이 크리에이티브 전략을 중심으로<br className="pc"/>
            하는 MAX The Creative를 개최합니다. 광고업계에서 자기만의 개성과 새로운 크리에이티브 전략을<br className="pc"/>
            중심으로 떠오르고 있는 회사들이 인사이트를 공유하며 광고주분들과 교류의 장을 함께 합니다.<br/>
            특히 이번 행사는 글로벌 미디어 Google과 함께 디지털 중심의 크리에이티브 전략의 인사이트를 공유합니다.</>
}

const cardButtonData = {
    class:'section-con row',
    data:[
        {   class:'col s6',
            title:'참여 기업',
            strapline:'다양한 형태로 광고주의 크리에이티브적 고민을 해결해주는 회사',
            text:'( 광고대행사, 웹드라마 제작사, MCN 기업 등 )\n25개 참여 기업이 크리에이티브 관련 세션 진행',
            href:'https://docs.google.com/forms/d/1BAtzbZUSmRqOm-gMZCqllbHBnml9iIQ1jqhRcSg7JIg/edit?usp=sharing',
            buttonName:'참여기업으로 신청하기'
        },
        {   class:'col s6',
            title:'참석 광고주',
            strapline:'새로운 크리에이티브에 관심있고, 연간 일정 예산을 집행 중인 광고주',
            text:'300개 기업으로 한정, 어워드 심사위원 참여',
            href:'https://docs.google.com/forms/d/1Jh9vRtmyd7jphPXe3iDOSIYWKttVfYmBO-3hqG13rpU/edit?usp=sharing',
            buttonName:'참석 광고주로 신청하기'
        },
    ]
}
