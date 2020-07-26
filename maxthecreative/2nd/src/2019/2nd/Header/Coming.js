import React,{ useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-materialize';

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

let wid = window.innerWidth;
const local = window.location.origin
const path = '/';

export default function HeaderComing(){
    const [visible,setVisible ]= useState(false);
    const headFix = ()=>{
        const head = document.querySelector('header');
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        scrollTop > 100 ? setVisible(true) : setVisible(false);
    }  

    //모바일 메뉴 - 드롭다운
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

        window.addEventListener('scroll', headFix )

    },[]) 

    const [winWid,setWinWid] = useState(false);
    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setWinWid( window.innerWidth < 800 )
        });
    },false);
    const mobileClass = winWid ? gnbData.class+' dropdown-content' 
                               : gnbData.class;

    //위치값 구하기
    //element.getBoundingClientRect().top; 는 모바일 ios(ios7에서도)에서 작동되지 않는다.  
    const view_divTop = (obj) => {
        if(obj.offsetParent==document.body)
            return obj.offsetTop;
        else
            return obj.offsetTop+view_divTop(obj.offsetParent);
    }
    const applyScrollTop = (id) =>{
        let target = document.querySelector(id)
        document.body.scrollTop = view_divTop(target); // For Safari
        document.documentElement.scrollTop = view_divTop(target); // For Chrome, Firefox, IE and Opera
        setTimeout( 'applyScrollTop()',30 );
    }

    //     const varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
    //     if (varUA.indexOf("iphone")>-1||varUA.indexOf("ipad")>-1||varUA.indexOf("ipod")>-1) { 
    //         //ios
    //         alert( id )
    //     }
    // }
    return(
        <>
        <header className={`head-coming ${visible ? 'fix' : ''}`}>
            
            <div className="head-banner">
                <div className="container">
                    <span>MAX THE CREATIVE 2nd 성황리에 종료되었습니다. 행사 후기를 남겨주시면 추천을 통해 경품을 드려요!</span>
                    <a href="https://forms.gle/4fu2ZEb3r2TQ6UzX6" className="btn-style" rel="noopener noreferrer" target="_blank">리뷰작성하기</a>
                </div>
            </div>

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
                
                    <Link to={'javascript:;'} className="mobile-gnb-btn dropdown-trigger mobile" data-target="mobile-gnb" 
                          rel="noopener noreferrer" >
                        <i className="large material-icons">menu</i>
                    </Link >
                    <div className="head-btn ">
                        <a href={`/2019/1st/index.html`} className="btn-style waves-effect waves-red" data-target="drop-menu" target="_blank">지난 행사보기</a>
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
          href:`/session`,
          name:'session',
          click: scrollTop },
        { class:'tab',
          href:`/award`,
          name:'award',
          click: scrollTop},
        { class:'tab pc target',
          href:`https://www.facebook.com/maxsummit2019/`,
          name:<><i className="custom-icon">&#xe800;</i></>,
          linkClass:'btn-link i-facebook'
        },
        // { class:'tab',
        //   href:`#apply`,
        //   name:'apply',
        //   linkClass:'btn-style waves-effect waves-red',
        //   click: scrollOffset,
        // },
        { class:'tab pc target',
          href:`/2019/1st/index.html`,
          name:'지난 행사보기',
        //   linkClass:'btn-style waves-effect waves-red',
          click: scrollTop 
        },          
    ]
}


