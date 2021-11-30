import React from 'react';
// import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="foot" >
      <div className="foot-wrap wid">
          <div className="foot-box foot-box1">
              <p className="foot-box-title">Family Site</p>
              <p><a href="#" target="_blank" rel="noopener noreferrer">Family1</a></p>
              <p><a href="#" target="_blank" rel="noopener noreferrer">Family2</a></p>
              <p><a href="#" target="_blank" rel="noopener noreferrer">Family3</a></p>
              <p><a href="#" target="_blank" rel="noopener noreferrer">Family4</a></p>
          </div>
          <div className="foot-box foot-box2">
              <p className="foot-box-title">portfolio DEMO | 대표 MJ</p>
              <p>Tel: 02-0000-0000 (내선번호 714)</p>
              <p>E-mail: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tarot0312@kakao.com" 
                            className="mailto" target="_blank">tarot0312@kakao.com</a> </p>
              <p>서울특별시 관악구</p>
              <p><a href="/privacy" target="_blank">개인정보 취급방침</a> | 개인정보책임관리자.나</p>
          </div>
          <div className="foot-copy">©2020 Mobidays, Inc. All Rights Reserved.</div>
      </div>
    </footer>
  );
}


export default Footer;



