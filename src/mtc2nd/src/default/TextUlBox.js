import React from 'react';

export default function UlBox(props){
    return(
        <ul className={props.class}>
            {props.data.map((con,i)=>{
                return(<li key={i}>
                            <img src={con.src} alt={con.alt}/> 
                            <strong>{con.tit}</strong> 
                            <span className="small">{con.name}</span>
                        </li>)
            })}
        </ul>
    )
}
