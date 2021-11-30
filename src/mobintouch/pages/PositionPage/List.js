import React,
{useState,useEffect,useCallback } from "react";

import JsonData from '../../Data/position_list.js';
const nowDate = ()=>{
  const today = new Date();
  const y = today.getFullYear();
  const m = today.getMonth()+1;
  const d = today.getDate();
  return `${y}-${m}-${d}`
}

JsonData.sort( (a,b) => {
    let dateA = new Date(a.date).getTime();
    let dateB = new Date(b.date).getTime();
    if( a.state !== 'close' && b.state !== 'close' ){
      if( dateA < dateB ) return 1;
      if( dateA > dateB ) return -1;
      if( a.company > b.company ) return 1;
      if( a.company < b.company ) return -1;
    }
    return 0;
  })
  

  
  


//--------- LIST Render
export default function List(props){

  const [list,setList] = useState(JsonData);
  const OFFSET = 16;
  const [listItems, setListItems] = useState(Array.from( list.slice(0,OFFSET), 
                                                        (v ,n) => list[n] ));
  const [isFetching, setIsFetching] = useState(false);
  
   //하단 스크롤감지
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchmove', handleScroll);
    return () => { 
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('touchmove', handleScroll);
    }
  }, []);

  function getDocumentHeight() {
    const body = document.body;
    const html = document.documentElement;
    
    return Math.max(
        body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight
    );
  };
 
  function getScrollTop() {
      return (window.pageYOffset !== undefined) ? 
              window.pageYOffset : 
              (document.documentElement || document.body.parentNode || document.body).scrollTop;
  }

  function handleScroll() {  
    if( window.innerHeight < 870 ){
      if( window.innerHeight + Math.ceil(getScrollTop()) < 
          Math.floor( getDocumentHeight() ) ) return;
    }else{
      if ( Math.floor(window.innerHeight + getScrollTop() ) !== 
           Math.floor( getDocumentHeight() ) ) return;
    }
    setIsFetching(true);
  }
 
  //리스트 추가하기
  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  function fetchMoreListItems() {
    setTimeout(() => {
      setListItems(prevState => (
        [...prevState, 
         ...Array.from( list.slice( prevState.length, prevState.length+OFFSET ),
                        (v,n) => list[prevState.length+n] )]
      ));
      setIsFetching(false);
    }, 200);
  }

  // value값 바뀌면 list re-render
  useEffect(()=>{
    props.value  !== 'all' ?
      setList( JsonData.filter( type => type.type.match(props.value)) ) :
      setList( JsonData );    
  },[props.value]);

  // list가 변경되면 listItems re-render
  useEffect(()=>{
    setListItems(Array.from( list.slice(0,OFFSET), (v ,n) => list[n] ) )
  },[list]);

   window.onscroll = ()=> handleScroll();
  
  return(
    <>
      { listItems.map( (con,i) => (
        <Item 
          url={'#'}
          key={i}
          class={con.state.length>0 ? 'close' : ''}
          src={'/mobintouch'+con.src} alt={con.company}
          company={con.company}
          position={con.position} job={con.job}
          point={con.point}
          location={con.location}
          pay={con.pay}
          num={i}
        />
      )) }
      <p className="list-loading-txt">{isFetching ? 'Loading...' : 'End of List'}</p>
    </>
  )
}



const Item = props => {
  return(
    <a className={`data-list-box ${props.class}`} href={props.url} target="_blank"> 
      <div className="data-list-box-img">
         <img src={props.src} alt={props.company} />
      </div>
      <div className="data-list-box-text">
          <div className="data-company">{props.company}</div>
          <div className="data-position">
            {props.position} &#40;{props.job}&#41;
          </div>
           <div className="data-info">
            <div className="data-info-point small">{props.point}</div>
            <div className="data-info-location small">{props.location}</div>
          </div>
          <div className="data-pay">추천보상금 {props.pay}</div>
      </div>
    </a>
  )
}

