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

        const topBtn = document.querySelector('.topBtn');
        const linkFixed = document.querySelector('.link-fix.on');
        let btm = topBtn.style.bottom;

        if( linkFixed ){
            topBtn.style.bottom = '18%';
            if(isMobile() === true){
                topBtn.style.bottom = '13%';
                topBtn.style.right = '3%';
            } 
        }else{
            topBtn.style.bottom = '5%';
            if( isMobile() === true ) topBtn.style.right = '3%';
        }

    }

    useEffect(()=>{ 
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('touchmove', handleScroll);
    },[props.path])


    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }


    return(
        <button type="button" 
                className={`waves-effect waves-light btn-large topBtn ${visible ? 'on' : ''}`} 
                onClick={ ()=>topFunction() } 
        >
            <i className="material-icons Large">keyboard_arrow_up</i>
        </button>
    )
}


