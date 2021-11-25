import React from 'react';


export default function BoxIconButton(props){
    return (
        <div className={`section-con-top wid ${props.class}`}>
            <span className="section-con-label ">{props.label}</span>
            <h3 className="section-con-title ">{props.title}</h3>
            <p className="section-con-text ">{props.text}</p>
            <ul className={`section-con-top-box flexBox`}>
            {props.data.map( (con, i) => {
                return( <IconContnets src={con.src}
                                        text={con.text}
                                        key={i} /> );
                })}
            </ul>
            <p className={`section-con-text last-text ${props.txtClass}`}>{props.txtCon}</p>
            <div className={`boxIcon-btn ${props.btn}`} >
                <a href={props.btnUrl} target="_blank" className="btn-style">{props.btnName}</a>
            </div>
        </div>
    );
}


const IconContnets = (props) => {
  return(
    <li className={`info-icon `}>
      <div className="card">
        <div className="card-image">
          <img src={props.src} alt={props.text}/>
        </div>
        <div className="card-content">
           <p className="">{props.text}</p>
        </div>
      </div>
    </li>
  )
}


