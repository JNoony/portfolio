import React, { Component } from 'react';

export default function Client(){
    return(
        <div className="section section-client ">
            <div className="wid center-align">
                <h2 className="content-title">모비인터치는 다양한 기업의 마케터 채용을<br className="mobile" /> 지원하고 있습니다.</h2>
                <div className="flexBox">
                    <img src={`${process.env.PUBLIC_URL }/images/client/client-logo-02.png`} 
                         alt="기업 로고들" />
                {/* {ClientBanner.map( (con, i) => {
                    return( <FlexBox src={con.src}
                                     img={con.img}
                                     key={i}
                                     alt={`img${i}`} /> );
                })} */}
                </div>
            </div>
        </div>
    )
}

// const ClientBanner=[
//     { src:'', img:process.env.PUBLIC_URL +'/images/client/blank-logo.png' },
//     { src:'', img:process.env.PUBLIC_URL +'/images/client/um-logo.png' },
//     { src:'', img:process.env.PUBLIC_URL +'/images/client/granmonster-logo.png' },
//     { src:'', img:process.env.PUBLIC_URL +'/images/client/tutoring-logo.png' },
//     { src:'', img:process.env.PUBLIC_URL +'/images/client/dano-logo.png' },
//     { src:'', img:process.env.PUBLIC_URL +'/images/client/bejewel-logo.png' },
//     { src:'', img:process.env.PUBLIC_URL +'/images/client/musinsa-logo.png' },
//     { src:'', img:process.env.PUBLIC_URL +'/images/client/melife-logo.png' },
// ]

// const FlexBox = (props) => {
//     return(
//         <p className="flexBox-img">
//             <a href={props.src}>
//                 <img src={props.img} alt={props.alt}/>
//             </a>
//         </p>
//     )
// }

