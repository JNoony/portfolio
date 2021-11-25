import React from 'react';

export default function ListImgPdfButton(props){
    return(
        <div className="sponsored-con-box">
            <div className="family-logo">
                <img src={props.src} alt={props.alt} />
            </div>
            <div className="family-link">
                <a className="family-link-pdf " 
                   href={props.pdf} 
                   download 
                   rel="noopener noreferrer" 
                   type="application/pdf">pdf</a>
                   
                <a className="family-link-site " 
                   href={props.site} target="_blank" 
                   rel="noopener noreferrer">site</a>
            </div>
        </div>
    )
}
