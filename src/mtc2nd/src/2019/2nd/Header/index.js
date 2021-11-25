import React,{ useEffect,useState } from 'react';
import { Link,Router,Switch,Route, } from 'react-router-dom';
// import { Icon } from 'react-materialize';
import M from "materialize-css";

import TopButton from '../../../default/TopBtn';
import Gnb from '../../../default/Gnb';

const scrollTop = event =>{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
const scrollOffset = event => {
    let apply = document.querySelector('#apply');
    window.innerWidth < 800 ? window.scrollTo(0, 1100 ) 
                            : window.scrollTo(0, 1400 )
};

// let wid = window.innerWidth;
let origin = process.env.PUBLIC_URL;
let gnb = document.querySelector('#mobile-gnb');
const path = '/2019/2nd';

// const addMobileClass=()=>{
//     let wid = window.innerWidth;
//     let name = 'dropdown-content';
//     wid < 800 ? name : '';
//     window.addEventListener('resize',()=>{
//         wid = window.innerWidth;
//         wid < 800 ? name : '';
//     })
//     return name;
//     console.log(wid)
//     console.log(name)
//     // addMobileClass('dropdown-content')
// }


export default function Header(){
    const [visible,setVisible ]= useState(false);
    const headFix = ()=>{
        const head = document.querySelector('header');
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        scrollTop > 100 ? setVisible(true) : setVisible(false);
    }  

    useEffect(()=>{
        //모바일 메뉴 - 드롭다운
        let menuBtn = document.querySelectorAll('.dropdown-trigger');//햄버거아이콘
        M.Dropdown.init( menuBtn );
        let dropBtn = document.querySelectorAll('.drop-menu-btn');
        M.Dropdown.init( dropBtn );

        var elems = document.querySelectorAll('.scrollspy');
        var instances = M.ScrollSpy.init(elems,{
            scrollOffset:50
        });

        window.addEventListener('scroll', headFix );   
    },[]);

    const [winWid,setWinWid] = useState(false);
    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setWinWid( window.innerWidth < 800 )
        });
    },false);
    const mobileClass = winWid ? gnbData.class+' dropdown-content' 
                               : gnbData.class;
    
    return(
        <>
        <header className={` ${visible ? 'fix' : ''}`} >
            {/* 종료일 추가 하는 배너 */}
            <div className="head-banner">
                <div className="container">
                    <span>MAX THE CREATIVE 2nd 성황리에 종료되었습니다.
                            <br className="mobile"/> 행사 후기를 남겨주시면 추천을 통해 경품을 드려요!</span>
                    <a href="https://forms.gle/4fu2ZEb3r2TQ6UzX6" target="_blank"
                        className="btn-style" rel="noopener noreferrer" >리뷰작성하기</a>
                </div>
             </div>
            {/* 기본 */}
            <div className="head head-pc row container flexBox-nowrap">
                <h1 className="blind">{defaultHeadInfo.blindTitle}</h1>
                <Link to={defaultHeadInfo.Logo.to} 
                      className="head-logo" 
                      onClick={scrollTop } rel="noopener noreferrer">
                     <span className={defaultHeadInfo.Logo.imgClass}></span>
                     <span className="head-logo-txt">{defaultHeadInfo.Logo.text}</span>
                </Link>
                <div className="head-contents " >
                    <Gnb class={mobileClass} 
                         id={gnbData.id} 
                         data={gnbData.data} />

                    <Link to={`javascirpt:;`} className="mobile-gnb-btn dropdown-trigger mobile" data-target="mobile-gnb" rel="noopener noreferrer" >
                        <i className="large material-icons">menu</i>
                    </Link >
                    <div className="head-btn mobile">
                        <a href={'/2019/1st/index.html'} className="btn-style waves-effect waves-red" target="_blank">2019 1st</a>
                    </div>

                </div>
            </div>
        </header>
            
        <TopButton />
        </>
    )
   
}

const defaultHeadInfo = {
    blindTitle:'max the creative | 맥스더크리에이티브 | 맥스 더 크리에이티브',
    Logo:{
        to:path,
        imgClass:'head-logo-img',
        text:<>eltower 7F Grand Hall<br />2019.11.12-13</>
    }
}

const gnbData={
    class:`flexBox-nowrap head-con-navi mobile-gnb `,
    id:'mobile-gnb',
    data:[
        { class:'tab',
          href:`${path}/session`,
          name:'session',
          click: scrollTop },
        // { class:'tab',
        //   href:`${path}/award`,
        //   name:'award',
        //   click: scrollTop},
        // { class:'tab',
        //   href:`${path}/faq`,
        //   name:'faq',
        //   click: scrollTop },
        { class:'tab pc target',
          href:`https://www.facebook.com/maxsummit2019/`,
          name:<><i className="custom-icon">&#xe800;</i></>,
          linkClass:'btn-link i-facebook'
        },
        { class:'tab',
          href:`${path}/#apply`,
          name:'apply',
          linkClass:'btn-style waves-effect waves-red',
          click: scrollOffset,
        },
        { class:'tab target',
          href:`/2019/1st/index.html`,
          name:'2019 1st',
          linkClass:'btn-style waves-effect waves-red',
          click: scrollTop 
        },          
    ]
}


