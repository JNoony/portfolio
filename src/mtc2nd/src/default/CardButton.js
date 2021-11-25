import React from 'react';

export default function CardButton(props){
    return(
            <div className={props.class}>
                {props.data.map( (con, i) => {
                     return( <ButtonBox class={con.class} 
                                        title={con.title}
                                        strapline={con.strapline}
                                        text={con.text}
                                        href={con.href}
                                        buttonName={con.buttonName}
                                        key={i} /> );
                 })}
            </div>
    )
}

const ButtonBox = (props) => {
    return(
        <div className={`section-con-box ${props.class}`}>
            <h2 className="section-title ">{props.title}</h2>
            <div className="section-con-txt box-con-txt">
                <p className="b">{props.strapline}</p>
                <p>{props.text}</p>
                <a href={props.href} target="_blank" className="section-con-btn ">
                    <span className="btn-style2 waves-effect waves-red font-color-red ">
                        {props.buttonName}
                    </span>
                </a>
            </div>
        </div>
    )
}