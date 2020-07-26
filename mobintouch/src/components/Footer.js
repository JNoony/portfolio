import React from 'react';
// import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="foot" >
      <div className="foot-wrap wid">
          <div className="foot-box foot-box1">
              <p className="foot-box-title">Family Site</p>
              <p><a href="http://www.mobidays.com/" target="_blank" rel="noopener noreferrer">모비데이즈</a> </p>
              <p><a href="http://www.mobiinside.com/kr/" target="_blank" rel="noopener noreferrer">모비인사이드</a></p>
              <p><a href="http://www.mobiacademy.co.kr" target="_blank" rel="noopener noreferrer">모비아카데미</a></p>
              <p><a href="https://www.maxsummit.co/" target="_blank" rel="noopener noreferrer">맥스서밋</a></p>
          </div>
          <div className="foot-box foot-box2">
              <p className="foot-box-title">(주)모비데이즈 | 대표 유범령</p>
              <p>Tel: 02-6929-1620 (내선번호 714)</p>
              <p>E-mail: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mobintouch@mobidays.com" 
                            className="mailto" target="_blank">mobintouch@mobidays.com</a> </p>
              <p>서울특별시 강남구 역삼동 834-34 2층</p>
              <p><a href="/privacy" target="_blank">개인정보 취급방침</a> | 개인정보책임관리자.최휘영</p>
          </div>
          <div className="foot-copy">©2020 Mobidays, Inc. All Rights Reserved.</div>
      </div>
    </footer>
  );
}


export default Footer;



