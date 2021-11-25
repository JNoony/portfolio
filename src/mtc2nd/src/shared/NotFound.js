import React from 'react';

// import Footer from '../component/Footer';
// import Header from '../component/Header';

import './NotFound.css';

function Main (){

    return(
        <>
            <div className="subpage-visual "></div>
            <div className="not-container">
                <div className="not-contents">
                    <h2>404</h2>
                    <h3>죄송합니다.<br/>요청하신 페이지를 찾을 수 없습니다.</h3>
                    <p className="contents-sub-text">
                        방문하시려는 페이지의 주소가 잘못 입력되었거나,<br/>
                        페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.<br/>
                        입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
                    </p>
                    <div className="btn-area">
                        <a href="https://maxthecreative.co/" className="home-btn" title="MAX SUMMIT 2019 홈으로">
                            <span>MAX the Creative 홈</span>
                            <p className="boxpass"></p>
                        </a>
                    </div>
                    <div className="contact-area">
                        <dl>
                            <dt>CONTACT</dt>
                            <dd>일반문의 : <a href="mailto:hello@maxthecreative.co" title="일반문의">hello@maxthecreative.co</a></dd>
                            <dd>후원문의 : <a href="mailto:sponsor@maxthecreative.co" title="후원문의">sponsor@maxthecreative.co</a></dd>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Main;