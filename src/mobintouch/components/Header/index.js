import React,{useState,useEffect} from 'react';
import { Router, Route, Link, NavLink } from 'react-router-dom';
import Swiper from 'react-id-swiper';

import 'swiper/css/swiper.css'
import './header.css';
import Navi from './Nav';


export default function Header(props) {  
  const [visible,setVisible ]= useState(false);

  const isMobile = ()=>{
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  // const kakaoAdd = (event) => {
  //   // 1:1 채팅 
  //   window.Kakao.Channel.chat({
  //     // channelPublicId: '_yUfrT' 
  //     channelPublicId: '_xmxoWhxb' 
  //   })
  // }
  const kakaoAdd =(event)=>{
    if(isMobile() == true){
      // 1:1 채팅 
      window.Kakao.Channel.chat({ 
        channelPublicId: 'kakao_ID' 
      })
    }else{
      let newWindow = window.open("about:blank");
      newWindow.location.href = 'http://pf.kakao.com/kakao_ID'
    }
  }

  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  const handleClick = event => topFunction();

  const headFix = ()=>{
    const head = document.querySelector('header');
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    scrollTop > 100 ? setVisible(true) : setVisible(false);
  }  
  
  useEffect(()=>{
    window.addEventListener('scroll', headFix);
    window.addEventListener('touchmove', headFix);
  },[])

  return (
    <>      
      <header className={` ${visible ? 'fix' : ''}`}>
        <div className="head wid flexBox">
            <h1 className="mobi-logo">
              <Link to={'/'} rel="noopener noreferrer" 
                    onClick={handleClick} >
                <img src={`${process.env.PUBLIC_URL}/mobintouch/images/intouch-logo.svg`} />
              </Link>
            </h1>

            <div className="head-gnb"> 
                <a href="#" data-target="mobile-gnb" 
                  className="mobile dropdown-trigger"
                  rel="noopener noreferrer"  >
                  <i className="large material-icons">menu</i>
                </a> 
                <Navi onClick={handleClick}/>

                <div className=" mobile-float">
                  <a href="#" onClick={kakaoAdd} 
                    className="btn-style kakao-chn ">
                      <div className="text">
                        <span className="icon"></span>
                        <span className="pc">1:1 상담</span>
                      </div>
                  </a>
                  {/* <a href="https://forms.gle/GnRWZBPCrGAmHzHz6" 
                    target="_blank"
                    className="btn-style ">
                      <div className="text">문의<br className="mobile"/>하기</div>
                  </a>  */}
                </div>

            </div>

        </div>

        <p className="alert"> {props.alert} </p> 
      </header>

    {props.class === undefined ? 
      <VisualBannerSlide 
        title={props.title}
        text={props.text} /> :

      <VisualBanner 
        class={props.class}
        title={props.title}
        text={props.text} />
    }
    
    
    </>
  );
}

const VisualBannerSlide=(props)=>{
  const [swiper, updateSwiper] = useState(null);
 
  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };
 
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const params = {
    pagination: {
      el: '.swiper-pagination',
      // type: 'bullets',//doted
      type: 'fraction',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    spaceBetween: 0
  }

  return(
    <div className={`visual`}>
        <div className="visual-banner ">
          
            <Swiper {...params}>
              <div className="">
                <a href="https://forms.gle/qykn7ppNXscgKczm6" 
                   className="bg-banner wid" target="_blank"></a>
              </div>
              <div className="">
                <Link to={'/company'} rel="noopener noreferrer"
                      className="bg-banner wid" >
                    <div className="mobi-logo big"></div>
                    <h2 className="content-title textAni">
                        {props.title}
                    </h2>
                    <p className="content-text textAni">
                        {props.text}
                    </p>
                </Link>
              </div>
              <div className="">
                <a href="https://www.mobiacademy.co.kr/html/application/theory_lecture_offLine.php?part1_idx=36"
                   className="bg-banner wid" target="_blank" ></a>
              </div>
            </Swiper>
          
        </div>
    </div>
  )
}


const VisualBanner=(props)=>{
  return(
    <div className={`visual ${props.class}`}>
        <div className="visual-banner ">
            <div className="bg-banner wid">
                <div className="mobi-logo big"></div>
                <h2 className="content-title textAni">
                    {props.title}
                </h2>
                <p className="content-text textAni">
                    {props.text}
                </p>
            </div>
        </div>
    </div>
  )
}


