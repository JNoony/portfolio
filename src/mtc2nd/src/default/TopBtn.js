import React ,{useEffect, useState} from 'react';

export default function TopButton (props){
    const [visible,setVisible ]= useState(false);

    const isMobile = ()=>{
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    const handleScroll=()=>{
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const bodyScrollTop = document.body.scrollHeight;
        scrollTop > 100 ? setVisible(true) : setVisible(false);
    }

    useEffect(()=>{ 
        window.addEventListener('scroll', handleScroll );
        window.addEventListener('touchmove', handleScroll );
    },[props.path])


    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }


    return(
        <div className={`btn-top ${visible ? 'on' : ''}`} 
             onClick={ ()=>topFunction() } 
        >
            <span className="btn-top-txt"><i className="material-icons Large">keyboard_arrow_up</i></span>
        </div>
    )
}



