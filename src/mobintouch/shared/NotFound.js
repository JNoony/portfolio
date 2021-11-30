import React from 'react';


import './NotFound.css';

function NotFound (){

    return(
        <div className="not-container ">
            <div className="head wid">
                <h1 className="mobi-logo"><img src={`${process.env.PUBLIC_URL}/mobintouch/images/intouch-logo.svg`} /></h1>
            </div>
            <div className="not-contents wid">
                <h2>404</h2>
                <h3>죄송합니다.<br/>요청하신 페이지를 찾을 수 없습니다.</h3>
                <p className="contents-sub-text">
                    방문하시려는 페이지의 주소가 잘못 입력되었거나,<br/>
                    페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.<br/>
                    입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
                </p>
                <div className="btn-area">
                    <a href="https://mobintouch.co.kr/" className="btn-style" >모비인터치 홈</a>
                </div>
            </div>
        </div>
    )
}



export default NotFound;