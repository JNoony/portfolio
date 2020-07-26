import React ,{ Component } from 'react';

import TextUlBox from '../../../default/TextUlBox';

export default function Award(){
    return(
        <>
        <section className="section section-award scrollspy " id="award">
            <h2 className="container"><span className=" section-title font-transform ">award</span></h2>
            <div className="section-con-txt ">
                <div className="section-con-txt-box">
                    <p className="box-title">수상자 특전</p>
                    <TextUlBox class={awardText.class} data={awardText.data} />
                </div>
            </div>

            <h3 className="container"><span className="section-con-title ">1st MTC 수상부문</span></h3>
            <div className="section-con-txt ">
                <div className="section-con-txt-box">
                    <p className="box-title-img "></p>
                    <TextUlBox class={awardTextImg.class} data={awardTextImg.data} />
                </div>
            </div>

        </section>
        </>
    )
}

const awardText = {
    class:'award-txt blind-img blind-span award-open',
    data:[
        {tit:'- 상패 및 상금' },
        {tit:'- 차회 Max The Creative 자동 참여' },
        {tit:<>- 구글 크리에이티브 프로그램 온보드<br className="mobile" />(크리에이티브사와 광고주 연계 프로그램)</> },
        {tit:<>- 구글 글로벌 크리에이티브 파트너쉽 프로그램 연결<br className="mobile" />(글로벌 제작 역량이 있는 곳에 한함)</> },
        {tit:<>- Active Pitching Day<br className="mobile" />(추후 구글 광고주 행사 등 초청)</> },
        {tit:'- 모비인사이드 단독 수상 기념 인터뷰' },
    ]
}

const awardTextImg = {
    class:'award-txt award-img',
    data:[
        { src:process.env.PUBLIC_URL+"/2019/images/icon_04.png",
          alt:"대상", 
          tit:"모비데이즈상", 
          name:"오버맨" 
        },
        { src:process.env.PUBLIC_URL+"/2019/images/icon_05.png",
          alt:"금상", 
          tit:"모비인사이드상", 
          name:"오버맨,유브갓픽처스" 
        },
        { src:process.env.PUBLIC_URL+"/2019/images/icon_06.png",
          alt:"은상", 
          tit:"모비인터치상", 
          name:"플래닛드림, 스튜디오좋" 
        },
        { src:process.env.PUBLIC_URL+"/2019/images/icon_07.png",
          alt:"동상", 
          tit:"모비아카데미상", 
          name:"돌고래유괴단, 디블렌트" 
        },
    ]
}
