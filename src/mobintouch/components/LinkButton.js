import React from 'react';

export default function LinkButton(props){
    return(
        <div className={`linkBox wid ${props.class}`}>
            <h3 className="section-con-title linkBox-title ">{props.title}</h3> 
            <span className="section-con-text linkBox-text ">{props.text}</span>
            <ul className={`linkBox-button flexBox-nowrap`}>
              { props.data.map( (con, i) => {
                return( <LinkContents src={con.src}
                                      title={con.title}
                                      text={con.text}
                                      link={con.link}
                                      name={con.name}
                                      key={i} /> );
              })}
            </ul>
        </div>
    )
}

const LinkContents = (props)=>{
    return(
      <li className="linkBox-con">
        {/* <a href={props.link} className="linkBox-con" target="_blank" rel="noopener noreferrer"> */}
          <div className="linkBox-con-logo">
            <img src={props.src} alt={props.title}/>
          </div>
          <div className="linkBox-con-textBox">
            <span className="linkBox-con-title">{props.title}</span>
            <p className="linkBox-con-text">{props.text}</p>
          </div>
          <div className="linkBox-con-btn">
            <a className="btn-style link-button"
               target="_blank" rel="noopener noreferrer"
               href={props.link}>{props.name}</a>
          </div>
        {/* </a> */}
      </li>
    )      
}