import React,{useState,useEffect,useLayoutEffect} from 'react';
import { 
    // Route as Router,
    Link, 
    NavLink } from 'react-router-dom';

// import { Dropdown,Button } from 'react-materialize';
import M from "materialize-css";

export default function Nav(props){       
    // const isMobile = ()=>{
    //     return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    // }

    //반응형 window width
    function useWindowSize() {
        const [size, setSize] = useState([0]);
        useLayoutEffect(() => {
          function updateSize() {
            setSize([window.innerWidth]);
          }
          window.addEventListener('resize', updateSize);
          updateSize();
          return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }

    useEffect(()=>{
        // width<769부터 메뉴 드롭다운
        var drop = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(drop);
    },[])

    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    const handleClick = event => topFunction();

    const kakaoAdd = (event) => {
        // 1:1 채팅 
        window.Kakao.Channel.chat({
          channelPublicId: 'kakao_ID' 
        })
    }
    

    return(
        <ul className={`gnbBox ${ useWindowSize() < 769 ? 'dropdown-content' : ''}`} 
            id="mobile-gnb" 
            ref={ (drop) => {drop = drop} } >
            { navName.map( (con,i)=>{
                return(
                    <li className={`gnb-li ${ window.location.pathname === con.href ? 'on' : ''}`} 
                        key={i} >
                        <Link to={con.href} rel="noopener noreferrer" 
                            onClick={handleClick} >
                            {con.name}
                        </Link>
                    </li>
                )
            })}
            {/* <li className={`gnb-li `}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd0dKMOjJiiOYEFhEN-4lDkWX8g3GEG8AxwIjIbneWKvysG4g/viewform"
                   target="_blank" 
                   rel="noopener noreferrer">contact</a>
            </li> */}
        </ul>    
    )
}

const navName = [
    { href:'/mobintouch/company', class:'company', name:'company'  },
    { href:'/mobintouch/marketer', class:'marketer', name:'marketer'  },
    { href:'/mobintouch/partner', class:'position', name:'채용 포지션'  },
    { href:'/mobintouch/contact', class:'contact', name:'문의하기'  },
]