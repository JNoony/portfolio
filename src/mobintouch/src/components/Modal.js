import React, { Component,useState,useEffect } from "react";
import M from "materialize-css";
// import "materialize-css/dist/css/materialize.min.css";
// import { withCookies, Cookies, ReactCookieProps } from 'react-cookie';
// import ModalView from './ModalView';

// interface ModalProps extends ReactCookieProps {}

export default function Modal(props){
  window.onload=()=>{
    let modalele = document.querySelector('.modal');
    let popup = M.Modal.init(modalele,{
      endingTop: '20%',
      preventScrolling:false
    });
    popup.open()
  }
 
  return(
    <div id="modal1" className={`modal ${props.class}`} >
      <div className="modal-btn">   
        <div className="modal-close " > 
          <i className="Medium material-icons">close</i> 
        </div>
      </div>
      <div className="modal-content">   
        <div className="section-con-box">
          <img src={props.src} alt={props.alt} />
        </div>
      </div>
      <div className="modal-footer">
          <a href={props.btnUrl} 
            className="card-btn"
            target="_blank" 
            rel="noopener noreferrer" >{props.btnName}</a>
      </div>
    </div>
  )
}


// class Modal extends Component {
//   componentDidMount() {
//     // const options = {
//     //   // onOpen: function(){},
//     //   // onClose:function(){}
//     // };
//     let modalele = document.querySelector('.modal');
//     let popup = M.Modal.init(modalele);
//     // let instances = M.Modal.init(this.Modal, options);
//     popup.open()
//   }
//   // let instance = M.Modal.init(modalele,{
//   //   dismissible: false,
//   //   preventScrolling:true,
//   //   // onCloseStart:function(){
//   //   //   var chkBox = document.querySelector('#chk');
//   //   //   chkBox.checked ? setCookie( 'modal1', 'Y' , 1 ) //Y로 표기, 1=하루지정
//   //   //                 : setCookie( 'modal1', '' , 1 );
//   //   //   console.log( chkBox.checked  )
//   //   // },
//   //   // onOpenEnd:function(){
//   //   //   getCookie("modal1")
//   //   // }
//   // });

//   render(){
//     return(
//       <div id="modal1" className="modal" >
//         <div className="modal-btn">     
//             {/* <label htmlFor="chk">
//                 <input type="checkbox" className="filled-in" id="chk" name="chk" />
//                 <span>오늘 하루 열지 않음</span>
//             </label> */}
//             <a href="javascript:;" className="modal-close " > <i className="Medium material-icons">close</i> </a>
//         </div>
//         <div className="modal-content section-banner section-banner2">   
//             <div className="">
//               <div className="section-con-box">
//                 <img src="./images/modal/hompage-modal-01.jpg" alt="홈페이지 오픈채팅방" />
//               </div>
//                 {/* <h4 className="section-con-title banner-title center-align"></h4>
//                 <div className="section-con-box section-con-left">
//                     <span className="section-con-text">나의 마케팅 직무 역량을 진단하고<br />나에게 맞는 채용 포지션을<br />추천받아보세요!</span>
//                 </div>
//                 <div className="section-con-box section-con-right">
//                     <img src="./images/icon-03.png" alt="" />
//                 </div> */}
//             </div>
//         </div>
//         <div className="modal-footer">
//             <a href='https://open.kakao.com/o/gelKPFvb' 
//               className="card-btn"
//               target="_blank" 
//               rel="noopener noreferrer" >카카오톡 오픈채팅방 바로가기</a>
//         </div>
//       </div>
//     )
//   }
// }
// export default Modal;
