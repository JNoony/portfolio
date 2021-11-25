import React ,{ Component } from 'react';

import TextUlBox from '../../../default/TextUlBox';
import CardListImg from '../../../default/CardListImg';

const imgSrc = '/images/ci/logo-';

export default function AwardComing(props){
    return(
        <section className="section section-award-coming " >
            <article className="container">
                <h3 className="section-con-title ">
                    <span>MAX the creative</span><br/><span>2nd award</span>
                </h3>
                <CardListImg class={awardDataPraise.praise1.class}
                             data={awardDataPraise.praise1.data} />

                <div className="award-coming-box bottom">
                    <CardListImg class={awardDataPraise.praise2.class}
                                data={awardDataPraise.praise2.data} />

                    <CardListImg class={awardDataPraise.praise3.class}
                                data={awardDataPraise.praise3.data} />

                    <CardListImg class={awardDataPraise.praise4.class}
                                data={awardDataPraise.praise4.data} />
                </div>
            </article>

            <article className="award-coming-txt container ">
                <h5 className="box-title">수상 선정 방식</h5>
                <TextUlBox class={awardDataInfo1.class} 
                           data={awardDataInfo1.data}/>
            </article>

            <article className="award-coming-txt container">
                <h5 className="box-title">수상자 특전</h5>
                <TextUlBox class={awardDataInfo2.class} 
                           data={awardDataInfo2.data}/>
            </article>

        </section>
    )
}


//DATA---------------
//수상자
const awardDataPraise = {
    praise1:{
        class:'award-coming-box top',
        data:[
            {   class:"win",awardName:"모비데이즈상", day:"all", 
                src:process.env.PUBLIC_URL + imgSrc + "dblent.png", 
                name:"디블렌트" }
        ]
    },
    praise2:{
        class:'',
        data:[
            { class:"award1",awardName:"플로우상", day:"day1", 
              src:process.env.PUBLIC_URL + imgSrc + "dblent.png", 
              name:"디블렌트" },
            { class:"award1",awardName:"플로우상", day:"day2", 
              src:process.env.PUBLIC_URL + imgSrc + "studio.png", 
              name:"스튜디오 좋" }
        ],
    },
    praise3:{
        class:'',
        data:[
            { class:"award2",awardName:"애드저스트상", day:"day1", 
              src:process.env.PUBLIC_URL + imgSrc + "bigpicture.png", 
              name:"빅픽처팀" },
            { class:"award2",awardName:"애드저스트상", day:"day2", 
              src:process.env.PUBLIC_URL + imgSrc + "planetdream.png", 
              name:"플래닛드림" }
        ],
    },
    praise4:{
        class:'',
        data:[
            { class:"award3",awardName:"싱귤러상", day:"day1", 
              src:process.env.PUBLIC_URL + imgSrc + "dogsear.png", 
              name:"도그지어" },
            { class:"award3",awardName:"싱귤러상", day:"day2", 
              src:process.env.PUBLIC_URL + imgSrc + "xlpictures.png", 
              name:"엑스라지픽쳐스" }
        ],
    }
}

// 심사
const awardDataInfo1={
    class:'award-txt blind-img blind-span award-open',
    data:[
        { tit:"참석사가 행사 당일 온라인 투표 진행" },
        { tit:"총 7개 부문 수상" },
        { tit:"- 모비데이즈상 [ 1팀 ]" },
        { tit:"- 플로우상 [ 2팀 ]" },
        { tit:"- 애드 저스트상 [ 2팀 ]" },
        { tit:"- 싱귤러상 [ 2팀 ]" },
        { tit:"양일 중 1일 기준 모비데이즈상 외 부문별 각 1개사 선정" },
        { tit:"양일 포함 가장 많은 투표를 획득한 참여사를 모비데이즈상으로 선정" }
    ],
}
const awardDataInfo2 = {
    class:'award-txt blind-img blind-span award-open',
    data:[
        { tit:"차회 Max The Creative 자동 참여" },
        { tit:<>구글 크리에이티브 프로그램 온보드 <br className="mobile" />(크리에이티브사와 광고주 연계 프로그램)</> },
        { tit:<>구글 글로벌 크리에이티브 파트너쉽 프로그램 연결 <br className="mobile" />(글로벌 제작 역량이 있는 곳에 한함)</> },
        { tit:<>Active Pitching Day <br className="mobile" />(추후 구글 광고주 행사 등 초청)</> },
        { tit:"모비인사이드 단독 수상 기념 인터뷰" }
    ]
}
