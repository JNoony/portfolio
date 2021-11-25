import React from 'react';

import ListDropDown from '../../../default/ListDropDown'

export default function Faq(){
  return(
      <section className="section section-faq  ">
          <div className=" container ">
              <h2 className="section-title "><span>FAQ</span></h2>
              <ListDropDown class={FaqData.class} data={FaqData.data} />
           </div>
      </section>
  )

}

const FaqData = {
  class:'collapsible',
  data:[
    { id:1,
      title:'행사장 내 주차가 가능한가요 ?',
      text:'별도로 주차권을 제공해드리지 않고 있습니다. 가급적이면 대중교통을 사용 부탁드립니다',
    },
    { id:2,
      title:'식사는 제공되나요?',
      text:<span className="full">점심은 별도로 제공이 되지 않아 식사는 개별적으로 행사장 부근 식당 이용 부탁드립니다.<br/>다만, 저녁 식사는 네트워킹 포함 티켓 소지자에 한하여 네트워킹 파티에서 제공될 예정이며,<br className="pc"/>다과와 커피는 행사 중간에 제공되오니 많은 이용 부탁드립니다</span>,
    },
    { id:3,
      title:'취소 및 환불은 어떻게 할 수 있나요?',
      text:<span className="full">행사 신청 취소 및 환불 관련해서 상세 내용은 이벤터스 규정을 따르며, 행사 시작 전까지는 취소/환불이 가능하나,<br className="pc"/>결제 수단에 따라 10%의 수수료가 부과될 수 있습니다. 행사 시작 후에는 결제 취소/환불이 불가합니다.</span>,
    },
    { id:4,
      title:'참가 증명서 신청 가능한가요?',
      text:<span className="full">참가 증명서가 필요하신 분들은 <a href="https://forms.gle/mHcF8Tn2A5eYaU666" target="_blank">https://forms.gle/mHcF8Tn2A5eYaU666</a>에<br className="pc"/>[성함/소속/연락처]를 기입해 주시면 행사 종료 후 영업일 기준 3일 이내에 참가 증명서를 발송드립니다.</span>,
    },
    { id:5,
      title:'VIP초대로 등록시 13일 저녁 네트워킹 파티도 초대권에 포함되어 있는 혜택인가요?',
      text:<span className="full">VIP초대권과 11월 13일에 진행되는 저녁 네트워킹 파티의 입장권은 별개입니다.<br/>[VIP 초대권 소지자]저녁 네트워킹 파티 등록 방법: <br/>① 이벤터스에서 등록시에 그룹선택 항목에서 행사 참여 날짜를 선택하여 주시고 네트워킹 입장권도 함께 선택하여 주시길 바랍니다. <br className="mobile"/>(추가 결제 50,000원 필요)<br/>② 초대 모비데이즈 담당자에게 별도 문의 요망</span>,
    },
  ]
}




