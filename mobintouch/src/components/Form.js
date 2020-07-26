import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form'

import { Modal } from 'react-materialize';

// const SPREADSHEET_ID  = '1CBAUZ1_4pVyg8AYgVo4DF_sg2SOLZzcCzT3sqelsF0w';
// const CLIENT_ID = '860950019480-769savlgubf09qc11m06itllii5oi6e0.apps.googleusercontent.com';
// const API_KEY = 'AIzaSyBefCotMWHy0pVhqTdUyzHCJOsKErNO34g';
// const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

const formUrl = 'https://script.google.com/macros/s/AKfycbw3J1Tx0zlO1MhqhQ6bfRfVwt53jNYTl5rewW8cKp0qG-gMIhk/exec'

export default function FrmTable(){  
    //selsect option
    const handleSelect = ()=>{
        const selBox1 = document.querySelector('#type1');
        const selBox2 = document.querySelector('#type2');
        const idx = selBox1.selectedIndex;
        var objOption = document.createElement("option");

        var optData = [
            {text:['기업 마케팅 / 채용 컨설팅 문의','기업 마케터 / 인재 채용 문의','기업 제휴 / 파트너쉽 문의' ]},
            {text:['마케터 커리어 개발 / 컨설팅 문의','마케터 이직/구직 문의']},
            {text:['기타문의']}
        ]

        selBox2.options.length = 0;
        if(idx){
            selBox2.style.display = 'inline-block';
            for( var i=0;i<optData[idx-1].text.length;i++){
                selBox2.options[i] = new Option(optData[idx-1].text[i],optData[idx-1].text[i]);
            }
        }
        
    }

    const { register, errors, required ,handleSubmit } = useForm();
    const [loading,setLoading] = useState(false);

    const onSubmit = (data) => {
        console.log( 'data : ',data );   
        // setLoading(true);
        // if(errors){
        //     alert('문의사항 접수에 실패하였습니다. 아래 메일로 문의 바랍니다. mobintouch@mobidays.com')
        //     setLoading(false);
        // }else{
        //     form.setAttribute("method", "Post");
        //     form.setAttribute("action", formUrl);
        //     setLoading(false);
        //     alert('문의사항이 성공적으로 접수되었습니다. 모비인터치 담당자가 배정되어 연락을 드릴 예정입니다. (*영업일 3일 기준)')
        //     form.reset();
        // }
        document.frm.setAttribute("method", "Post");
        document.frm.setAttribute("action", formUrl);
        document.frm.submit();
        
    }


 
    return(
        <div className="section-form">
            <form name="frm"  
                  onSubmit={handleSubmit(onSubmit)} >   
                <div className="form-elements">
                    <fieldset className="pure-group">
                        <label className="pure-group-label active" >문의 유형</label>
                        <div className="custom-select pure-group-text" >
                            <select id="type1" name="header" className="input-field first" 
                                    onChange={()=>handleSelect()} 
                                    ref={register({ required: true })} >
                                <option value="" selected disabled>세부 문의 유형을 선택하세요.</option>
                                <option value="company" >company</option>
                                <option value="marketer">marketer</option>
                                <option value="기타">기타</option>                               
                            </select>
                            <select id="type2" name="subject" className="second"
                                    ref={register({ required: true })} ></select>
                        </div>
                        {errors.type1 && <span className="alert-txt teal-text">선택해주세요</span>}
                    </fieldset>

                    <fieldset className="pure-group ">
                        <label className="pure-group-label " >성함</label>
                        <input id="name" name="userName" className="pure-group-text"
                               type="text"  
                               placeholder="모비인"
                               maxLength="10"
                               ref={
                                   register({ 
                                       required: true, 
                                       maxLength: 10,
                                       pattern: /^[가-힣a-zA-Z]+$/ 
                                    })
                               }
                        />
                        {errors.name && <span className="alert-txt teal-text">공백 또는 특수문자는 사용하실수 없습니다.</span>}
                    </fieldset>

                    <fieldset className="pure-group ">
                        <label className="pure-group-label">소속기업 <span className="small">(선택사항)</span></label>
                        <input name="companyName" className="pure-group-text"
                               type="text" 
                               placeholder="모비데이즈"
                               maxLength="10"
                               ref={ register({ maxLength: 10 }) }
                        />
                    </fieldset>

                    <fieldset className="pure-group">
                        <label className="pure-group-label">직함 <span className="small">(선택사항)</span> </label>
                        <input id="position" name="position" className="pure-group-text"
                               type="text" 
                               placeholder="팀장"
                               maxLength="10"
                               ref={ register({ maxLength: 10 }) }
                        />
                    </fieldset>

                    <fieldset className="pure-group">
                        <label className="pure-group-label" >연락처</label>
                        <input type="text" name="phoneNum" className="pure-group-text" 
                               placeholder="00012340000"
                               maxLength="12"
                               onChange={e=> e.target.value = e.target.value.replace(/[^0-9]/g,"") }
                               ref={ register({ required: true, pattern:/^[0-9]+$/ }) } />
                        {errors.phoneNum && <span className="alert-txt teal-text">숫자만 입력하세요</span>}
                    </fieldset>

                    <fieldset className="pure-group">
                        <label className="pure-group-label" >이메일</label>
                        <input id="email" name="email" 
                               type="email"
                               className="pure-group-text"
                               placeholder="yourEmail@email.com" 
                               ref={ register({ required: true,pattern:/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/ }) }
                        />
                        {errors.email && <span className="alert-txt teal-text">정확한 주소를 입력해주세요</span>}
                    </fieldset>

                    <fieldset className="pure-group">
                        <label className="pure-group-label" >문의사항</label>
                        <textarea id="message" name="message" rows="10" className="pure-group-text" 
                          placeholder="채용 또는 커리어 관련 문의사항을 남겨주세요.&#13;&#10;모비인터치 담당자가 배정되어 연락을 드릴 예정입니다.&#13;&#10;(*영업일 3일 기준)" 
                          maxLength="1000"
                          ref={ register({ required: true,maxLength:1000 }) } 
                        ></textarea>
                    </fieldset>
                </div>

                <div className="pure-group-modal">
                    <label>
                        <input className="filled-in" name="agr" type="checkbox"  
                               ref={ register({ required: true }) } />
                        {errors.agr && <span className="alert-chk teal-text"></span>}
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
                <p className="loading-txt">{loading == true ? 'Loading.....' : ''}</p>
                <div className="pure-group pure-group-btn">
                    <button className="button-success pure-button button-xlarge btn-style" >문의하기</button>
                </div>
            </form>
        </div>
    )
}
