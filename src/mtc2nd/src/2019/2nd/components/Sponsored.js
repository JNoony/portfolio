import React, { Component } from 'react';

const Data ={
    SponsoredInfo:[
        { src:process.env.PUBLIC_URL +'/images/ci/logo-eventus.png', alt:'이벤터스', link:'https://event-us.kr/home/renewalcheck?type=new' },
        { src:process.env.PUBLIC_URL +'/images/ci/logo-flow.png', alt:'마드라스체크', link:'https://www.flow.team' },
        { src:process.env.PUBLIC_URL +'/images/ci/logo-singular.png', alt:'싱귤러', link:'https://www.singular.net/' },
        { src:process.env.PUBLIC_URL +'/images/ci/logo-adjust.png', alt:'애드저스트', link:'https://www.adjust.com/' },
        { src:process.env.PUBLIC_URL +'/images/ci/logo-criteo.png', alt:'크리테오', link:'https://www.criteo.com/kr/' },
        { src:process.env.PUBLIC_URL +'/images/ci/logo-business.png', alt:'스마트빌', link:'http://smartbill.co.kr/' },
    ],
}
const { SponsoredInfo } = Data

export default function Sponsored(){
    return(
        <section className="section section-family sponsored ">
            <h2 className="container"><span className="section-title sponsored-title color-dark ">Sponsored</span></h2>
            <div className="section-con sponsored-con container">
                { SponsoredInfo.map( (con, i) => {
                    return( <SponserBox src={con.src}
                                        alt={con.alt}
                                        link={con.link}
                                        key={i} /> );
                })}
            </div>
        </section>
    )
}

const SponserBox = (props) => {
    return(
        <div className="sponsored-con-box">
            <div className="family-logo"><a href={props.link} target="_blank"><img src={props.src} alt={props.alt} /></a></div>
        </div>
    )
}
