import React, { Component } from 'react';

import ListImgPdfButton from '../../../default/ListImgPdfButton'

export default function Services(){
  return(
    <section className="section section-family services ">
        <h2 className="container"><span className="section-title sponsored-title color-dark ">Mobidays Services</span></h2>
        <div className="section-con sponsored-con container">
            {SponsoredInfo.map( (con, i) => {
                return( <ListImgPdfButton src={con.src}
                                          alt={con.alt}
                                          pdf={con.pdf}
                                          site={con.site}
                                          key={i} /> );
            })}
        </div>
    </section>
  )
}

//DATA
const SponsoredInfo = [
  {
    src:process.env.PUBLIC_URL +'/images/ci/logo-max.png',
    alt:'맥스서밋',
    pdf:process.env.PUBLIC_URL +'/pdf/maxsummit_2019.pdf',
    site:'https://maxsummit.co',
  },
  {
    src:process.env.PUBLIC_URL +'/images/ci/logo-academy.png',
    alt:'모비아카데미',
    pdf:process.env.PUBLIC_URL +'/pdf/mobiacademy_2019.pdf',
    site:'https://www.mobiacademy.co.kr/',
  },
  {
    src:process.env.PUBLIC_URL +'/images/ci/logo-inside.png',
    alt:'모비인사이드',
    pdf:'./pdf/mobiinside.pdf',
    site:'https://www.mobiinside.co.kr/',
  },
  {
    src:process.env.PUBLIC_URL +'/images/ci/logo-connect.png',
    alt:'모비커넥트',
    pdf:process.env.PUBLIC_URL +'/pdf/mobiconnect.pdf',
    site:'http://www.mobiconnect.co.kr/',
  },
  {
    src:process.env.PUBLIC_URL +'/images/ci/logo-intouch.png',
    alt:'모비인터치',
    pdf:process.env.PUBLIC_URL +'/pdf/mobintouch.pdf',
    site:'https://mobintouch.co.kr/',
  },
  {
    src:process.env.PUBLIC_URL +'/images/ci/logo-mobione.png',
    alt:'모비원',
    pdf:process.env.PUBLIC_URL +'/pdf/mobione.pdf',
    site:'http://www.mobione.co/',
  }
]
