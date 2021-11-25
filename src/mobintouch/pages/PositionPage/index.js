import React, { Component,useState, useEffect, useRef,useReducer } from 'react';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
// import { Link, Route, NavLink } from "react-router-dom";
// import InfiniteScroll from 'react-infinite-scroller';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import InfiniteGrid, {GridLayout} from "@egjs/infinitegrid";
// import { GridLayout } from "@egjs/react-infinitegrid";

import './positionpage.css'
// import SubHead from '../../components/Header/SubHead';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TopBtn from '../../components/TopBtn';
import ProgramNavi from '../ProgramPage/ProgramNavi';

import List from './List';


//-----default data render
export default function PositionPage ({match}){
  return(
    <>
    <Header 
      title={textData.title}
      text={textData.text} 
      class={textData.visual} />
    
    <div className="dataList-tab wid">
      <ProgramNavi />
    </div>

    <div className="data-list wid" >
      <List value={match.params.id}/>
    </div>

    <TopBtn />
    <Footer />
    </>
  )
}


const textData = {
  visual:'sub-visual',
  title:<>Society of Marketers<br />모비인터치 오픈 채용 포지션</>,
  text:<>매일매일 신규 업데이트 되는 포지션을 확인하고
  <br className="mobile"/> 직접 지원하거나 지인을 추천하세요!</>
} 