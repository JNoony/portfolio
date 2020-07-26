import React,{useState,useEffect} from 'react';
import { Icon, Modal } from 'react-materialize';
import M from "materialize-css";

// import './visual.css';

const handleClick = event => {  
    let video = document.getElementById('myVideo'); 
    video.src="https://www.youtube.com/embed/x4TWV8ztomc?enablejsapi=1;version=3;playerapiid=ytplayer"
    // video.contentWindow.postMessage(JSON.stringify({event:"command",func:"' + 'playVideo' + '"}), '*');
    // video.src=`${process.env.PUBLIC_URL}/images/mtc_2.mp4`;
    // video.play();  
    M.Modal.init(Modal);  
} 

const videoStop = ( event ) => {
    let video = document.getElementById('myVideo'); 
    // if (navigator.appName == 'Microsoft Internet Explorer') {
    //     window.frames[0].document.execCommand('Stop');
    // } else {
    //     window.frames[0].stop();
    // }
    // video.contentWindow.postMessage(JSON.stringify({event:"command",func:"' + 'stopVideo' + '"}), '*')
    // video.pause();
    video.src=null; //opera
    video.src=""; //chrome
    video.mozSrcObject=null; //firefox
}


function Visual(){
    return(
        <div className="visual">
            <div className="visual-con container">
                        
                <div className="visual-con-box visual-con-box1">
                    <h2 className="visual-con-box">
                        <span className={`visual-con-box-txt move font-color-red`}>max</span>
                        <span className={`visual-con-box-txt move `}>the</span>
                        <span className={`visual-con-box-txt move `}>creative</span>
                        <span className={`visual-con-box-txt move last`}>2nd</span>
                    </h2>
                    <div className={`visual-con-box-txt move ko`}>
                        Discover the next creative <img src={`${process.env.PUBLIC_URL}/2019/images/icon_01.png`} alt="번개모양" />
                    </div>
                </div>
        
                <div className="visual-con-box visual-con-box2">
                    <div className="visual-video">
                         <a href="#modalVideo" className="visual-video-btn modal-trigger" rel="noopener noreferrer" 
                            onClick={ handleClick }>
                            <img src={`${process.env.PUBLIC_URL}/2019/images/icon_02.png`} alt="동영상플레이버튼" />
                        </a>
                    </div>       

                    <ModalVideo />
                </div>
                        
                <div className="fin-btn">
                    <a href="https://www.mobiacademy.co.kr/html/application/package_view.php?idx=13" 
                       className="btn-style2" 
                       rel="noopener noreferrer" 
                       target="_blank"
                       onClick={ handleClick }>세션영상 보러가기</a>
                </div>
            </div>
        </div>
    )
}

//비디오 모달 띄우기
const ModalVideo = ()=>{
    return(
        <Modal id="modalVideo" className="modal modal-video">
            <div className="modal-content">
                <a href="#!" className="modal-close modal-close-right waves-effect waves-green btn-flat" 
                   rel="noopener noreferrer" >
                    <Icon className="font-color-w">close</Icon>
                </a>
                <iframe src="https://www.youtube.com/embed/x4TWV8ztomc?enablejsapi=1;version=3;playerapiid=ytplayer" 
                        width="1094" height="615" allowFullScreen
                        allow="accelerometer; autoplay; encrypted-media;" 
                        id="myVideo" ></iframe>
 
                {/* <video id="myVideo" width="1094" height="615" controls >
                    <source src={`${process.env.PUBLIC_URL}/images/mtc_2.mp4`} type="video/mp4" />
                </video> */}
            </div>
        </Modal>
    )
}


export default Visual;