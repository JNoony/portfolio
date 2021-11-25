import React, { useState } from 'react';

interface ModalViewProps {}

function ModalView(props: ModalViewProps){
    const [selCheck, setSelCheck] = useState<boolean>(false);
    const onClosePopUp = (): void => {    
        // Do nothing yet
      }
    
    const onCheck = (): void => {
        setSelCheck(!selCheck);
    }

    return(
        <div>
            <div className="modal-btn">     
                <label htmlFor="chk">
                    <input type="checkbox" className="filled-in" id="chk" name="chk" />
                    { selCheck ? 'Checked'
                               : '오늘 하루 열지 않기' }
                    <span>오늘 하루 열지 않음</span>
                </label>
                <a href="#!" className="modal-close " > <i className="Medium material-icons">close</i> </a>
            </div>
            <div className="modal-content section-banner section-banner2">   
                <div className="section-banner-check">
                    <h4 className="section-con-title banner-title center-align">나의 마케팅 직무 역량은?</h4>
                    <div className="section-con-box section-con-left">
                        <span className="section-con-text">나의 마케팅 직무 역량을 진단하고<br />나에게 맞는 채용 포지션을<br />추천받아보세요!</span>
                    </div>
                    <div className="section-con-box section-con-right">
                        <img src="./images/icon-03.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href='https://forms.gle/depg7KanHcVdEw9B9' 
                   className="card-btn"
                   target="_blank" 
                   rel="noopener noreferrer" >무료진단 시작하기</a>
            </div>
        </div>
    )
}


export default ModalView;