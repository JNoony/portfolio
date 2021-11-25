import React from 'react';

import SessionCon from './SeesionCon'

export default function Session(props){
  return(
    <>    
      <section className="section section-timeline" >
        <div className="section-con container " >
            <h2 className="section-title section-title-btn">
              <a className="btn-style2" target="_blank" 
                 href="https://forms.gle/oXTHapW5jVL3We7f8">대행사 만나러 가기</a></h2>
            
            <div className="section-con-box scrollspy" id="day1">
                <h3 className="section-con-title ">day 1</h3>
                <ul className="section-con-txt ">
                    {day1.map( (con, index) => {
                        return( <SessionCon time={con.time}
                                            title={con.title}
                                            userJob={con.userJob}
                                            userName={con.userName}
                                            key={index}  /> );
                    })}
                </ul>
            </div>
            
            <div className="section-con-box scrollspy" id="day2">
                <h3 className="section-con-title ">day 2</h3>
                <ul className="section-con-txt ">
                    {day2.map( (con, index) => {
                        return( <SessionCon time={con.time}
                                            title={con.title}
                                            userJob={con.userJob}
                                            userName={con.userName}
                                            key={index} /> );
                    })}
                </ul>
            </div>

        </div>
    </section>
  </>
  )
}

const Data = {
  day1:[
    { time:'09:00', userJob:'모비데이즈', userName:'이광수 부문대표',
      title:'개회사'
    },
    { time:'09:30', userJob:'구글', userName:'박슬기 매니저',
      title:'팬덤의 시대 유튜브 활용 전략'
    },
    { time:'10:00', userJob:'KREMA Worldwide', userName:'최중호 팀장',
      title:'명사(名士)마케팅의 Digital Framework '
    },
    { time:'10:30', title:'break time'},
    { time:'11:00', userJob:'도그지어', userName:'박지환 대표',
      title:'Meaning and Purpose'
    },
    { time:'11:30', userJob:'빅픽처팀', userName:'현우진 대표',
      title:'누구든 인생에 한번은 당한다 '
    },
    { time:'12:00', title:'lunch time' },
    { time:'13:30', userJob:'싱귤러', userName:'김민성 지사장',
      title:'크리에이티브, 분석 그리고 유저 인게이지먼트'
    },
    { time:'14:00', userJob:'디블렌트', userName:'이승훈 기획팀장, 박진상 ECD',
      title:'복붙금지'
    },
    { time:'14:30', userJob:'모비인터치', userName:'김필재 본부장',
      title:'리크루팅이 크리에이티브를 만났을 때'
    },
    { time:'15:00', title:'tea time' },
    { time:'15:30', userJob:'돌고래유괴단', userName:'이주형 감독',
      title:'크리에이티브와 클리셰(Cliché)'
    },
    { time:'16:00', userJob:'아이디엇', userName:'이승재 대표',
      title:'창의적인 광고회사 만들기'
    },
    { time:'16:30', title:'break time' },
    { time:'17:00', userJob:'Group IDD', userName:'이정찬 대표',
      title:'브랜드의 변화, 크리에이티브로 시작하다'
    },
  ],
  day2:[
      { time:'09:30', userJob:'모비데이즈 ', userName:'이은솔 파트장',
        title:'Video Meets Performance'
      },
      { time:'10:00', userJob:'스튜디오좋', userName:'남우리 CD, 송재원 감독',
        title:'관심종자의 씨 뿌리기'
      },
      { time:'10:30', title:'break time'},
      { time:'11:00', userJob:'플래닛드림', userName:'정세현 셀장',
        title:'엄지와의 전쟁'
      },
      { time:'11:30', userJob:'랩543', userName:'송지우 대표',
        title:'데이터마케팅 기반의 크리에이티브'
      },
      { time:'12:00', title:'lunch time' },
      { time:'13:30', userJob:'애드저스트', userName:'임자운 팀장',
        title:'Attribution 툴을 활용한 모바일 크리에이티브 분석'
      },
      { time:'14:00', userJob:'구글', userName:'김용우 과장',
        title:'유튜브 시대에 맞는 크리에이티브 제작 전략'
      },
      { time:'14:30', userJob:'엑스라지픽처스', userName:'서준범 대표',
        title:'이광고만든사람승진시켜주세요소리듣는광고제작기 '
      },
      { time:'15:00', title:'tea time' },
      { time:'15:30', userJob:'더에스엠씨그룹', userName:'김용태 대표',
        title:'유튜브를 소비자가 찾아보는 브랜드 미디어로 구축하는 6가지 방법'
      },
      { time:'16:00', userJob:'코마스 인터렉티브', userName:'임동준 팀장',
        title:'크리에이티브 전략의 실행'
      },
      { time:'16:30', title:'break time' },
      { time:'17:00', userJob:'더아이콘TV', userName:'김욱현 대표이사',
        title:'콘텐츠로 마케팅의 판도를 바꾸다  CONTENTS MARKET - TheICONtv'
      },
      { time:'17:30', userJob:'태그바이컴퍼니', userName:'노준 대표',
        title:'인플루언서 마케팅 전략'
      },
      { time:'18:00 ~', 
        title:<>Networking / Award 네트워킹 파티 (럭키드로우) 및 어워드 시상</> },
  ]
}
const { day1, day2 } = Data;


