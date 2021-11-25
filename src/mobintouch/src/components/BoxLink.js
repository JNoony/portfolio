import React,{useState,useEffect} from 'react';

export default function BoxLink(props){
  // const [wid,setWid] = useState();
  // useEffect(()=>{
  //   setWid(window.innerWidth)
  // },[window.innerWidth]);
  // window.addEventListener("resize",()=>setWid(window.innerWidth) )
  return (
    <div className={`section-con-btm ${props.class}`}>
      <h3 className="section-con-title ">{props.title}</h3> 
      <span className="ci-imgBox aca-imgBox  ">{props.text1}</span>
      <span className="ci-imgBox in-imgBox ">{props.text2}</span>
      {/* <ul className={`section-con-btm-box row flexBox ${wid > 768 ? 'list-row':''}`}> */}
      <ul className={`section-con-btm-box row flexBox `}>
        { props.data.map( (con, i) => {
          return( <LinkContents src={con.src}
                                title={con.title}
                                text={con.text}
                                name={con.name}
                                link={con.link}
                                key={i} /> );
        })}
      </ul>
    </div>
  );
}

const LinkContents = (props)=>{
  return(
    <li className={` ${props.name}`} >
      <a href={props.link} className="card" target="_blank" rel="noopener noreferrer">
        <div className="card-image">
          <img src={props.src} alt={props.title}/>
        </div>
        <div className="card-content">
          <span className="card-title">{props.title}</span>
          <p className="">{props.text}</p>
        </div>
      </a>
    </li>
  )      
}





