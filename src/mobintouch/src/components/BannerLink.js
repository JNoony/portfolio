import React from 'react';
import { Link } from 'react-router-dom';

export default function BannerLink (props){
    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return(
        <div className={`section-banner ${props.class}`}>
            <div className="section-banner-mail wid ">  
                <div className="banner-contents ">
                    <img src={props.src} alt={props.alt}/>
                    <div className="section-con-title banner-title">{props.title}</div>
                </div>
                <Link to={props.btnUrl} 
                      className="card-btn "
                      rel="noopener noreferrer"
                      onClick={()=>topFunction()} >{props.btnName}</Link>
                {/* <a href={props.btnUrl} 
                   className="card-btn "
                   target="_blank" 
                   rel="noopener noreferrer" >{props.btnName}</a> */}
            </div>
        </div>
    )
}

