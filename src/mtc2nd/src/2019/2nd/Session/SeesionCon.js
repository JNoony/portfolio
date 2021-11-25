import React from 'react';

export default function SessionCon(props){
    let t = ['10:30','12:00','15:00','16:30','18:00 ~'];
    return(<li className={ props.time === t[5] || props.time === t[4] || 
                           props.time === t[3] || props.time === t[2] || 
                           props.time === t[1] || 
                           props.time === t[0] ? 'breakTime' : '' }>
                <span className="sess-time ">{props.time}</span>
                <span className="sess-txt ">{props.title}</span>
                <span className="sess-user ">
                <span className="sess-user-job ">{props.userJob}</span>
                <span className="sess-user-name ">{props.userName}</span>
                </span>
            </li>)
}