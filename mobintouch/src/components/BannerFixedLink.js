import React ,{useEffect, useState} from 'react';

const handleScroll=()=>{
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var linkFixBox = document.querySelector('.link-fix');
    var banner = document.querySelector('.section-banner2')
    var bodyScrollTop = document.body.scrollHeight;
    var win = window.location.pathname;
    if( win == '/' || win == '' ){
        scrollTop < 100 || scrollTop >= (banner.offsetTop)-(bodyScrollTop-banner.offsetTop) 
        // scrollTop < 100  
        ? linkFixBox.classList.remove('on') 
        : linkFixBox.classList.add('on');       
    }
    if( win == '/partner' ){
        scrollTop > 100 ? linkFixBox.classList.add('on') 
                        : linkFixBox.classList.remove('on'); 
    }
}

export default function BannerFixedLink (props){
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchmove', handleScroll);

    return(
        <div className={`link-fix ${props.class} `}>
            <div className="link-fix-wrap">  
                <div className="link-fix-box">
                    <h4 className="link-fix-box-title">{props.title}</h4>
                    <p className="link-fix-box-text">{props.text}</p>
                </div>
                <a href={props.btnUrl}
                   className={`card-btn ${props.btn}`}
                   target="_blank" 
                   rel="noopener noreferrer" >{props.btnName}</a>
            </div>
        </div>
    )
}

