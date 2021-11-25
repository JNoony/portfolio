import React,{useEffect,useState} from 'react';
import { Link,Router,Switch,Route, } from 'react-router-dom';

import M from "materialize-css";

export default function Gnb(props){
    // let wid = window.innerWidth;
    // let origin = process.env.PUBLIC_URL;
    // const path = '/2019/2nd';

    const scrollTop = event =>{
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    // class에 target 이 보이면 Link에서 A태그로 전환,
    // 외부사이트 링크를 위한 조치(Link는 외부사이트 연결이 안되므로)...
    return(
        <ul className={props.class} 
            id={props.id}>
            {props.data.map((con,i)=>{
                return(
                    <li className={con.class} key={i} >
                        {con.class.indexOf('target') > -1 ?
                            <a href={con.href}  
                               onClick={con.click }
                               className={con.linkClass} 
                               target="_blank" >{con.name}</a> 
                        : <Link to={con.href} 
                                onClick={con.click }
                                className={con.linkClass}
                                rel="noopener noreferrer" >{con.name}</Link >
                        }
                    </li>
                )
            })}
        </ul>
    )
}

