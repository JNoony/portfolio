import React from 'react';

export default function TextBox(props){
    return(
        <article className={props.class}>
            <h2 className="section-title ">{props.title}</h2>
            <div className="section-con">
                <div className="section-con-txt">{props.text}</div>
            </div>
        </article>
    )
}