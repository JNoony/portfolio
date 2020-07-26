import React,{useState,useEffect} from 'react';
import axios from 'axios';
// import validator from 'email-validator';

import { Modal } from 'react-materialize';
import M from "materialize-css";
import { arrayOf } from 'prop-types';


//문의 메일 정보
const _MASTER = 'mobintouch@mobidays.com';
const _GMAIL = 'https://mail.google.com/mail/?view=cm&fs=1&to=' 
const _OUTLOK = 'https://outlook.live.com/owa/#subject=SUBJECT&body=BODY&to=TO@EXAMPLE.COM&path=%2fmail%2faction%2fcompose'
const _YAHOO = 'http://compose.mail.yahoo.com/?to='
const _BASIC = 'mailto:' //TO@EXAMPLE.COM?subject=SUBJECT&body=BODY



export default function Form2(){ 
    // window.onload=()=>{
    //     let elems = document.querySelector('select');
    //     let selBox = M.FormSelect.init(elems);
    // }

    // const [CONTENTS,setCONTENTS] = useState({
    //     type1:'',
    //     type2:'',
    //     name:'',
    //     job:'',
    //     position:'',
    //     number:'',
    //     email:'',
    //     agr:false,
    //     message:''
    // });
    // useEffect(()=>{
    //     const frm = document.mailtoFrm;
    //     setCONTENTS({
    //         type1:frm.type1.value,
    //         type2:frm.type2.value,
    //         name:frm.name.value,
    //         job:frm.job.value,
    //         position:frm.position.value,
    //         number1:frm.number1.value,
    //         number2:frm.number2.value,
    //         number3:frm.number3.value,
    //         email:frm.email.value,
    //         agr:frm.agr.value,
    //         message:frm.message.value
    //     })
    //     return;
    // },[])

    //max
    function maxLengthCheck(obj){
        if (obj.value.length > obj.maxLength){
            obj.value = obj.value.slice(0, obj.maxLength);
        }    
    }
    //// number
    // const [val,setVal]=useState()
    // const handleChange=(e)=>{
    //     const re = /^[0-9\b]+$/;
    //     if (e.target.value === '' || re.test(e.target.value)) {
    //         setVal(e.target.value)
    //      }
    // }

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
            selBox2.style.display = 'block'
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

    

    //mail send 
    function mail(){
        var frm = document.mailtoFrm;

        var type1=frm.type1.value
        var type2=frm.type2.value
        var name=frm.name.value
        var job=frm.job.value
        var position=frm.position.value
        var number1=frm.number1.value
        var number2=frm.number2.value
        var number3=frm.number3.value
        var email=frm.email.value
        var message=frm.message.value

        const ACTION_MAIL = _GMAIL+_MASTER+'&su=[ 문의하기 ] '+ type1+type2
                        +'&body='
                        +'[ 성    함 ]  '+name+'%0D%0A'
                        +'[ 소속기업 ]  '+job+'%0D%0A'
                        +'[ 직    함 ]  '+position+'%0D%0A'
                        +'[ 연 락 처 ]  '+number1+'-'+number2+'-'+number3+'%0D%0A'
                        +'[ 이 메 일 ]  '+email+'%0D%0A'
                        +'[ 문의사항 ]%0D%0A'+message;  

        //브라우저 구분
        var agent = navigator.userAgent.toLowerCase(),
            name = navigator.appName,
            browser = '';
        
            // MS 계열 브라우저를 구분
            if(name === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1) {
                browser = 'ie';
                if(name === 'Microsoft Internet Explorer') { // IE old version (IE 10 or Lower)
                    agent = /msie ([0-9]{1,}[\.0-9]{0,})/.exec(agent);
                    browser += parseInt(agent[1]);
                } else { // IE 11+
                    if(agent.indexOf('trident') > -1) { // IE 11
                        browser += 11;
                    } else if(agent.indexOf('edge/') > -1) { // Edge
                        browser = 'edge';
                    }
                    const ACTION_MAIL = _BASIC+_MASTER+'?subject=[ 문의하기 ] '+ type1+type2
                        +'&body='
                        +'[ 성    함 ]  '+name+'%0D%0A'
                        +'[ 소속기업 ]  '+job+'%0D%0A'
                        +'[ 직    함 ]  '+position+'%0D%0A'
                        +'[ 연 락 처 ]  '+number1+'-'+number2+'-'+number3+'%0D%0A'
                        +'[ 이 메 일 ]  '+email+'%0D%0A'
                        +'[ 문의사항 ]%0D%0A'+message; 
                    
                    frm.action = ACTION_MAIL;
                }
            } else if(agent.indexOf('safari') > -1) { // Chrome or Safari
                if(agent.indexOf('opr') > -1) { // Opera
                    browser = 'opera';
                } else if(agent.indexOf('chrome') > -1) { // Chrome
                    browser = 'chrome';

                } else { // Safari
                    browser = 'safari';
                }
                const ACTION_MAIL = _GMAIL+_MASTER+'&su=[ 문의하기 ] '+ type1+type2
                        +'&body='
                        +'[ 성    함 ]  '+name+'%0D%0A'
                        +'[ 소속기업 ]  '+job+'%0D%0A'
                        +'[ 직    함 ]  '+position+'%0D%0A'
                        +'[ 연 락 처 ]  '+number1+'-'+number2+'-'+number3+'%0D%0A'
                        +'[ 이 메 일 ]  '+email+'%0D%0A'
                        +'[ 문의사항 ]%0D%0A'+message;  
                
                frm.action = ACTION_MAIL;

            } else if(agent.indexOf('firefox') > -1) { // Firefox
                browser = 'firefox';
            }
        
        const isMobile = ()=>{
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }
        if( isMobile() ){
            const ACTION_MAIL = _BASIC+_MASTER+'?subject=[ 문의하기 ] '+ type1+type2
                        +'&body='
                        +'[ 성    함 ]  '+name+'%0D%0A'
                        +'[ 소속기업 ]  '+job+'%0D%0A'
                        +'[ 직    함 ]  '+position+'%0D%0A'
                        +'[ 연 락 처 ]  '+number1+'-'+number2+'-'+number3+'%0D%0A'
                        +'[ 이 메 일 ]  '+email+'%0D%0A'
                        +'[ 문의사항 ]%0D%0A'+message; 
                    
            frm.action = ACTION_MAIL;
        }
        console.log(browser);
        
        // if(warning.length>0){
        //     alert(warning)
        // }
        // else{
        //     frm.method = "POST";
        //     frm.action = ACTION_MAIL;
        //     frm.target = 'winName'; 
        // }
        // console.log('submit : ',CONTENTS)
        frm.method = "POST";
        frm.target = 'winName';
        frm.action = ACTION_MAIL;
        frm.submit();
        frm.reset();
    }
    
    
   
    

    return(
        <div className="section-form">
            <form name="mailtoFrm" 
                //   method="POST"
                //   action="https://mail.google.com/mail/?view=cm&fs=1&to=mjhan@mobidays.com&amp;subject=[문의하기] &amp;body="
                //   data-email="mjhan@mobidays.com"
                // action={}
                onSubmit={mail}
            >   
                <div className="form-elements">
                    <fieldset className="pure-group">
                        <label className="pure-group-label active" >문의 유형</label>
                        <div className="custom-select pure-group-text" >
                            <select id="type1" name="type1" className="input-field first" 
                                    onChange={handleSelect} >
                                <option value="" selected disabled>유형을 선택하세요</option>
                                <option value="company" >company</option>
                                <option value="marketer">marketer</option>
                                <option value="기타">기타</option>                               
                            </select>
                            <select id="type2" name="type2" className="second"></select>
                        </div>
                    </fieldset>

                    <fieldset className="pure-group ">
                        <label className="pure-group-label " >성함</label>
                        <input id="name" name="name" className="pure-group-text"
                               type="text" required 
                               placeholder="모비인"
                               maxLength="10" />
                    </fieldset>

                    <fieldset className="pure-group ">
                        <label className="pure-group-label">소속기업 <span className="small">(선택사항)</span></label>
                        <input id="job" name="job" className="pure-group-text"
                               type="text" 
                               placeholder="모비데이즈"
                               maxLength="10" />
                    </fieldset>

                    <fieldset className="pure-group">
                        <label className="pure-group-label">직함 <span className="small">(선택사항)</span> </label>
                        <input id="position" name="position" className="pure-group-text"
                               type="text" 
                               placeholder="팀장"
                               maxLength="10" />
                    </fieldset>

                    <fieldset className="pure-group">
                        <label className="pure-group-label" >연락처</label>
                        <input id="number1" name="number1" className="pure-group-text pure-group-number"
                               type="number" required 
                               max="9999" min="0" />
                        <input id="number2" name="number2" className="pure-group-text pure-group-number"
                               type="number" required 
                               max="9999" min="0" />
                        <input id="number3" name="number3" className="pure-group-text pure-group-number"
                               type="number" required 
                               max="9999" min="0" />
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
                          placeholder="채용 또는 커리어 관련 문의사항을 남겨주세요.&#13;&#10;모비인터치 담당자가 배정되어 연락을 드릴 예정입니다.&#13;&#10;(*영업일 3일 기준)" 
                          maxLength="1000" ></textarea>
                    </fieldset>
                </div>

                <div className="pure-group-modal">
                    <label>
                        <input className="filled-in" name="agr" type="checkbox"  
                               required />
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
                    <button className="button-success pure-button button-xlarge btn-style" >문의하기</button>
                </div>
            </form>
        </div>
    )
}

