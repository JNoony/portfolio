import React from 'react';

export default function BoxIconInfo(props){
    return (
        <div className={`section-conBox section-con-bottom infographicsBox ${props.class}`}>
            <div className="wid">
                <h3 className="section-con-title ">{props.title}</h3>
                <p className="section-con-text ">{props.text}</p>
                <ul className="section-con-bottom-box flexBox">
                {props.data.map( (con, i) => {
                    return( <IconContnets src={con.src}
                                        text={con.text}
                                        key={i} /> );
                })}
                </ul>
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



