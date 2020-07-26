import React from 'react';

export default function ListButton(props){
    return(
        <div className={`section-con-txt border-conBox ${props.class}`}>
            { props.data.map((con,i)=>{
                return(<a className="ticket-box" href={con.href} 
                          target="_blank" rel="noopener noreferrer" 
                          key={i}>
                          <p className="ticket-day">{con.day}</p>
                          <p className="ticket-pay">{con.pay}</p>
                      </a> );
            }) }
        </div>
    )
}
