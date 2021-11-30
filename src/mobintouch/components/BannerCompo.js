import React from 'react';

export default function Banner(){
    return(
        <div className={`section-banner ${defaultData.class}`}>
            <div className="section-banner-check wid">
                <h4 className="section-con-title banner-title center-align">나의 마케팅 직무 역량은?</h4>
                <div className="section-con-box section-con-left">
                    <span className="section-con-text">나의 마케팅 직무 역량을 진단하고<br />나에게 맞는 채용 포지션을 추천받아보세요!</span>
                     <a href={defaultData.href} target="_blank" className="card-btn" rel="noopener noreferrer">무료진단 시작하기</a>
                </div>
                <div className="section-con-box section-con-right">
                    <img src="/mobintouch/images/icon-03.png" alt="배경픽토그램" />
                </div>
             </div>
        </div>
    )
}

const defaultData = {
    class:'section-banner2',
    href:'https://forms.gle/qykn7ppNXscgKczm6'
}