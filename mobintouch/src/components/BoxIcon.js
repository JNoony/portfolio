import React from 'react';


export default function BoxIcon(props){
    return (
        <div className={`section-con-top ${props.class}`}>
            <span className="section-con-label ">{props.label}</span>
            <h3 className="section-con-title ">{props.title}</h3>
            <p className="section-con-text ">{props.text}</p>
            <ul className={`section-con-top-box row flexBox`}>
            {props.data.map( (con, i) => {
                return( <IconContnets src={con.src}
                                      text={con.text}
                                      key={i} /> );
                })}
            </ul>
        </div>
    );
}


//icon ani
const scrollAnimation = ()=>{
  var iconBox = document.querySelectorAll('.info-icon')
  var offsetArr = [];
  var scroll = window.pageYOffset;
  var wid = window.innerWidth;
  
  for( var i=0;i< iconBox.length;i++){
    const positionY = window.pageYOffset + iconBox[i].getBoundingClientRect().top;
    wid > 500 ? offsetArr.push( Math.floor(positionY) - 600 )
              : offsetArr.push( Math.floor(positionY) - 500 )
    
    if( scroll >= offsetArr[i] ){ iconBox[i].classList.add('move'); }
    else{ iconBox[i].classList.remove('move'); }
  }

}
window.addEventListener('scroll', scrollAnimation );


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


