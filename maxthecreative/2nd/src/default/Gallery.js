import React ,{ Component,useEffect } from 'react';
import Swiper from 'react-id-swiper';
// import { Icon } from 'react-materialize';

export default function Gallery(props){
    let reactSwipeEl;
    let images = [];
    const gallerySrc = (src)=>{
        for(var i=1;i<10;i++){
            if( i < 10) i = '0'+i;
            images.push( {
                id:i, 
                // src:process.env.PUBLIC_URL +"/2019/images/pic_fin/img-"+i+".jpg",
                src:process.env.PUBLIC_URL + src +"/img-"+i+".jpg",
                alt:"img-"+i })
        }
    }
    gallerySrc(props.src)

    const pcOption = {
        slidesPerView: 3,
        spaceBetween: 0,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        // spaceBetween: 20
    }

    const mobileOption = {
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    }

    const isMobile = ()=>{
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    

    return(
        <article className="section-gallery swipe">
            <div className="section-con gallery-box swipe-wrap" >
                { isMobile() ? 
                    <Swiper {...mobileOption}>
                        {images.map((img) => (
                            <img src={img.src} alt={img.alt} key={img.id}/>
                        ))}
                    </Swiper>
                    :
                    <Swiper {...pcOption}>
                        {images.map((img) => (
                            <img src={img.src} alt={img.alt} key={img.id}/>
                        ))}
                    </Swiper>
                }                    
            </div>
        </article>
    )
}
