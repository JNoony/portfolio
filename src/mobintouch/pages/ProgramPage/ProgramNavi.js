import React, { Component, useState, useEffect } from 'react';
import { Router, Route, Link, NavLink } from 'react-router-dom';

import './programNavi.css';

/***** slide 형식 버튼 layout/event ***********/
// let cnt=0;
// function tabButton(e){
//   const set = {
//     wrap : document.querySelector('#tabButton_wrap'),
//     tabWrap : document.querySelector('.tab-btnList'),
//     tabLi : document.querySelectorAll('.dataButton-list'),
//     next : document.querySelector('.btn-next'),
//     prev : document.querySelector('.btn-prev'),
//     target : e.target.value,
//     winWidth : window.innerWidth
//   }
//   const{ wrap,tabWrap,tabLi,next,prev,target,winWidth } = set;

//   const wrapWid = wrap.offsetWidth;//wrap(div) wid
//   const totalWid = tabWrap.offsetWidth;//tab(ul) wid
//   const move = (totalWid-wrapWid)/(tabLi.length-7);

//   const moveEvent=(num,btn,sta)=>{
//     wrap.scrollLeft = num;
//     btn.style.display=sta;
//   }
 
//   if(winWidth < 600){
//     //mobile
//     const move = (totalWid-wrapWid)/(tabLi.length-3);
//     if( target == 'prev' ){
//       cnt--;
//       cnt < 1 ? moveEvent( 0,prev,'none')
//               : moveEvent( move*cnt,next,'block' );
//     }else{
//       cnt++;
//       cnt > tabLi.length-4 ? moveEvent( totalWid-wrapWid,next,'none')
//                            : moveEvent( move*cnt,prev,'block');
//     }
//   }else{
//     //pc
//     if( target == 'prev' ){
//       cnt--;
//       cnt < 1 ? moveEvent( 0,prev,'none')
//               : moveEvent( move*cnt,next,'block' );
//     }else{
//       cnt++;
//       cnt > tabLi.length-8 ? moveEvent( totalWid-wrapWid,next,'none')
//                            : moveEvent( move*cnt,prev,'block');
//     }
//   }
// }

const NameTag = [
  { class:'all',name:'전체' },
  { class:'cmo',name:'CMO/팀장' },
  { class:'planning',name:'전략기획/영업' },
  { class:'brand',name:'브랜드/PR' },
  { class:'performance',name:'퍼포먼스' },
  { class:'contents',name:'콘텐츠' },
  { class:'md',name:'상품기획/MD' },
  { class:'promotion',name:'프로모션/CRM' },
  { class:'aeMedia',name:'AE/미디어플래닝' },
  { class:'service',name:'서비스기획/디자인' }
]
  
function DailyButton (props){
  return(
    <div className=" data-button ">
        <h3 className="content-title ">오픈 채용 공고</h3>
        <div className="content-text " id="tabButton_wrap">
            <ul className="flexBox tab-btnList " >
              { NameTag.map( (con,i)=>{
                var type = con.class;
                const active= {
                  background:'#336aab',
                  color:'#fff',
                  borderRadius:'5px',
                  boxShadow:'0px 3px .3em rgba(65,79,99,.4)'
                }
                return(
                  <li className={`dataButton-list ${con.class}`} key={i} >
                    <NavLink exact to={`/mobintouch/partner/position/${con.class}`}
                             type={con.class}
                             // onClick={()=>props.handleName(con.class)}
                             activeStyle={active}
                    >{con.name}</NavLink>
                  </li>
                )
              })}
            </ul>
        </div>
        {/* 슬라이드형식 버튼 next/prev */}
        {/* <div className="tab-btnBox wid">
            <button type="button" className="tab-btn btn-prev" value="prev"
                    onClick={ tabButton } >navigate_before</button>
            <button type="button" className="tab-btn btn-next" value="next"
                    onClick={ tabButton } >navigate_next</button>
        </div> */}
    </div>
  )
}


export default DailyButton;