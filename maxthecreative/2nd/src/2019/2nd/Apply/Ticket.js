import React from 'react';

import ListButton from '../../../default/ListButton';

export default function Ticket(){
    return(
        <section className="section section-ticket scrollspy " id="ticket">
            <div className="container">
                <h2 className="section-title font-transform ">Ticket</h2>
                <div className="section-con ">
                    <ListButton class={ticketData.class} data={ticketData.data} />
                    <p className="ticket-alert">* 네트워킹은 양일이 아닌 13일에만 진행합니다.</p>
                </div>
            </div>
        </section>
    )
}

const ticketData = {
    class:'scrollspy',
    data:[
        { href:'https://forms.gle/peM5TKw9MxJhZYH18',
          day:'1일권',
          pay:<>vat 포함 <strong>100,000</strong>원</>
        },
        { href:'https://forms.gle/peM5TKw9MxJhZYH18',
          day:<>1일권 <br className="mobile"/>+ 저녁 네트워킹 참여</>,
          pay:<>vat 포함 <strong>150,000</strong>원</>
        },
        { href:'https://forms.gle/peM5TKw9MxJhZYH18',
          day:'2일권',
          pay:<>vat 포함 <strong>180,000</strong>원</>
        },
        { href:'https://forms.gle/peM5TKw9MxJhZYH18',
          day:<>2일권 <br className="mobile"/>+ 저녁 네트워킹 참여</>,
          pay:<>vat 포함 <strong>230,000</strong>원</>
        }
    ]
}

