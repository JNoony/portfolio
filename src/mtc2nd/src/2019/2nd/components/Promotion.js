import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown-now';

import M from "materialize-css";

// Random component
const Completionist = () =>  <><div>프로모션 혜택이 종료되었습니다</div></>;

//total second
const milli = date => new Date(date).getTime();

const allMilliseconds = ( finDate )=>{
    let today = new Date();
    let finDay = new Date(finDate);
    let result = today.getTime() - finDay.getTime();
    return Math.sign( result*-1 ) == 1 ? result*-1 : 0;
}
// console.log( allMilli('2019-11-15T15:00:00') )

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <>
         프로모션 혜택이 <strong className="countTime" >
            <>{ days }일 </>
            <>{ hours < 10 ? '0'+hours : hours}시간 </>
            <>{ minutes < 10 ? '0'+minutes : minutes }분 </>
            <>{ seconds < 10 ? '0'+seconds : seconds }초 후</>
         </strong> 종료됩니다
        </>
      );
    }
};


export default function Promotion(props){
  return(
      <>
      <div className="link-banner">
          <div className="container ">
              <p className="link-banner-txt">MAX The Creative 2nd Award</p>
              <div className="link-banner-btn">
                <Link to={`/award`} className="btn-style2">어워드 바로가기</Link>
              </div>
          </div>
      </div>

      <section className="section section-main pro">
          <div className="container ">
              <h2 className="section-title ">Promotion</h2>
              <div className="section-con section-promotion flexBox-wrap">
                {props.data.map( (con, i) => {
                    return(
                        <PromotionBox name={con.name}
                                      title={con.title}
                                      text={con.text}
                                      url={con.url}
                                      button={con.button}
                                      key={i}/>
                    )
                })}
              </div>
              
              <div className="count-box">
                  <Countdown date={Date.now() + allMilliseconds(props.date) }  
                             renderer={renderer} />
              </div>
          </div>
      </section>
      </>
  )
}


const PromotionBox = (props)=>{
    return(
        <div className={`box ${props.name}`}>
            <div className="box-con">
                <h5>{props.title}</h5>
                {props.text}
                <div><a href={props.url} className="btn-style2-black" target="_blank">{props.button}</a></div>
             </div>
        </div>
    )
}



