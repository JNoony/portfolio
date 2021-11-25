import React,{ Component , useState, useEffect } from 'react';
// import { Switch, Route ,Link } from 'react-router-dom';
// import Scrollspy from 'react-scrollspy'

import M from "materialize-css";

// 페이지 안에 document로 이동
export default function MainNav(props){  
    useEffect(()=>{
        var elems = document.querySelectorAll('.scrollspy');
        var instances = M.ScrollSpy.init(elems,{
            scrollOffset:120
        });
    },[])

    return(
        <div className={props.class}>
            <div className="container">
                <ul className="tabs" >
                    {props.data.map((con,i)=>{
                        return(<li className={con.class} key={i} >
                                   <a href={con.href} 
                                      className={con.linkClass} 
                                      data-rel={con.dataRel} 
                                      rel="noopener noreferrer" >{con.name}</a >
                               </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}
