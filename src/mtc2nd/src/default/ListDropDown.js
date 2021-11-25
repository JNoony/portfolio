import React, {useState,useEffect} from 'react'
import M from "materialize-css";

export default function ListDropDown(props){
    useEffect(()=>{
        let faqBox = document.querySelectorAll('.collapsible');
        let faqBoxDown = M.Collapsible.init(faqBox, {
            accordion: true
        });
    },[])

    return(
        <ul className={`section-con-txt ${props.class}`}>
        {props.data.map((con,i)=>{
            return(
                <li className="faq-box" key={i} >
                    <p className="faq-box-title collapsible-header">
                        Q-{con.id} {con.title}
                    </p>
                    <p className="faq-box-text collapsible-body">
                        <span className="small">A-{con.id}</span>
                        <span className="small full">{con.text}</span>
                    </p>
                </li>
            )
        })}
        </ul>
    )
}

