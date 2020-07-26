import React,{useState,useEffect} from 'react';

import { 
    Select,
    TextInput,
    Textarea,
    Modal
 } from 'react-materialize';
import M from "materialize-css";

// const gmail = 'https://www.googleapis.com/upload/gmail/v1/users';
// const gmailAPI = 'AIzaSyBefCotMWHy0pVhqTdUyzHCJOsKErNO34g/drafts/send'

export default function Form(){      
    //selsect option
    const handleSelect = ()=>{
        const selBox1 = document.querySelector('#type1');
        const selBox2 = document.querySelector('#type2');
        const idx = selBox1.selectedIndex;
        var objOption = document.createElement("option");

        const opt1 = ['기업 마케팅 / 채용 컨설팅 문의','기업 마케터 / 인재 채용 문의','기업 제휴 / 파트너쉽 문의' ]
        const opt2 = ['마케터 커리어 개발 / 컨설팅 문의','마케터 이직/구직 문의'] 
        const opt3 = ['기타문의']

        if(idx == 1){
            selBox2.options.length = 0;
            selBox2.style.display = 'inline-block'
            for( var i=0;i<opt1.length;i++){
                selBox2.options[i] = new Option(opt1[i],i);
            }
        }
        if(idx == 2){
            selBox2.options.length = 0;
            for( var i=0;i<opt2.length;i++){
                selBox2.options[i] = new Option(opt2[i],i);
            }
        }
        if(idx == 3){
            selBox2.options.length = 0;
            for( var i=0;i<opt3.length;i++){
                selBox2.options[i] = new Option(opt3[i],i);
            }
        }
        return;
        
    }

    return(
        <div className="section-form">
            <form className="gform" id="gform"
                  method="POST"
                  action="https://script.google.com/a/mobidays.com/macros/s/AKfycby0oJMqibm0T45bsloDgwsyV_IJBHppUlzEunGuryxqyTyAyUNy/exec"
                  data-email="mjhan@mobidays.com"
            >   
                <div className="form-elements">
                    <fieldset className="pure-group">
                        <label className="pure-group-label active" >문의 유형</label>
                        <div className="custom-select pure-group-text" >
                            <select id="type1" name="type1" className="first"
                                    onChange={()=>handleSelect()} >
                                 <option value="" selected disabled>--유형을 선택하세요---</option>
                                <option value="company">company</option>
                                <option value="marketer">marketer</option>
                                <option value="기타">기타</option>                               
                            </select>
                            <select id="type2" name="type2" className="second"></select>
                        </div>
                    </fieldset>

                    <fieldset className="pure-group ">
                        <label className="pure-group-label " >성함</label>
                        <input id="name" name="name" className="pure-group-text"
                               type="text" required />
                    </fieldset>

                    <fieldset className="pure-group ">
                        <label className="pure-group-label">소속기업 <span className="small">(선택사항)</span></label>
                        <input id="job" name="job" className="pure-group-text"
                               type="text" />
                    </fieldset>

                    <fieldset className="pure-group">
                        <label className="pure-group-label">직함 <span className="small">(선택사항)</span> </label>
                        <input id="position" name="position" className="pure-group-text"
                               type="text" />
                    </fieldset>

                    <fieldset className="pure-group">
                        <label className="pure-group-label" >연락처</label>
                        <input id="number" name="number" className="pure-group-text"
                               type="text" required
                               placeholder="'-'없이 번호만 입력해주세요" />
                    </fieldset>

                    <fieldset className="pure-group">
                        <label className="pure-group-label" >이메일</label>
                        <input id="email" name="email" required
                               type="email"
                               className="pure-group-text"
                               placeholder="yourEmail@email.com" />
                    </fieldset>

                    <fieldset className="pure-group">
                        <label className="pure-group-label" >문의사항</label>
                        <textarea id="message" name="message" rows="10" className="pure-group-text" 
                          placeholder="채용 또는 커리어 관련 문의사항을 남겨주세요.&#13;&#10;모비인터치 담당자가 배정되어 연락을 드릴 예정입니다.&#13;&#10;(*영업일 3일 기준)" ></textarea>
                    </fieldset>
                </div>

                <div className="pure-group-modal">
                    <label>
                        <input className="filled-in" name="agr" type="checkbox"  />
                        <span>
                        <Modal className="form"
                               actions={[
                                   <div className="modal-btn">   
                                       <div className="modal-close " > 
                                       <i className="Medium material-icons">close</i> 
                                       </div>
                                   </div>
                               ]}
                               trigger={ <span className="text-deco">개인정보 취급방침</span> }
                        >  
                          <ul className="text-contents">
                                <li>수집항목 : 이름, 휴대전화번호, 이메일주소, 경력정보 등의 지원자가 직접 작성한 본 서베이 및 향후 제출하는 이력서 내 모든 정보</li>
                                <li>수집 및 활용목적 : 면접 관련 정보 제공, 면접자 불만처리 및 상담 등 민원 처리, 분쟁조정 및 해결을 위한 기록보존, 모비데이즈에서 제공하는 다양한 광고/마케팅 관련 정보 공유</li>
                                <li>보관기간
                                    <ul>
                                        <li>개인정보 제공일로부터 1년간 보관되며, 보관기간 내에 신청자가 직접 개인정보 파기 요청을 하지 않는 경우, 자동으로 1년 연장</li>
                                        <li>단, 상법 및 ‘전자상거래 등에서의 소비자 보호에 관한 법률’ 등 관련 법령에 의하여 일정 기간 보관이 필요한 경우에는 해당 기간 동안 보관함</li>
                                    </ul>
                                </li>
                                <li>동의 거부권 등에 대한 고지: 정보주체는 개인정보의 수집 및 이용 동의를 거부할 권리가 있으나, 이 경우 채용 프로세스 지원에 제한이 있을 수 있습니다.</li>
                            </ul>
                        </Modal>에 동의합니다
                        </span>
                    </label>
                </div>

                <div className="pure-group pure-group-btn">
                    <button className="button-success pure-button button-xlarge btn-style">문의하기</button>
                </div>


                <div className="thankyou_message" >
                    <h2>문의사항이 성공적으로 접수되었습니다. 모비인터치 담당자가 배정되어 연락을 드릴 예정입니다. (*영업일 3일 기준)</h2>
                </div>

                <div className="error_message" >
                    <h2>문의사항 접수에 실패하였습니다. 아래 메일로 문의 바랍니다. mobintouch@mobidays.com</h2>
                </div>
            </form>
        </div>
    )
}

// const frm = document.getElementById('gform')
// document.addEventListener('submit',frm, (e)=>{
//     // 일단 기본행동을 중단하고
//     e.preventDefault();
    
//     // 폼을 잡고
//     var form = e.target;
//     // 입력값을 잡아서
//     var name = form.getElementById('name').value;
//     // POST로 부칠 URL 파라미터 인코딩을 해둡니다.
//     var params = encodeURIComponent('name=' + name);
    
//     // 여기서부터는 전형적인 XHR통신...
//     var url = form.action;
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", url);
    
//     // URL 인코딩 형식으로 변수를 넘기겠다고 선언하고
//     xhr.setRequestHeader("Content-type", "application/x-form-urlencoded");
    
//     // 발송이 되면 실행할 콜백을 정의합니다.
//     xhr.onreadystatechange = function() {
//         // 문서 어딘가의 #thankyou_message 요소를 그냥 보여주기로함
//         // document.getElementById('thankyou_message').style.display = "block";
//         alert('헿')
//         window.location.reload = window.location.reload          
//     };
    
//     // 발송을 해버립니다.
//     xhr.send(params);
// }, false);