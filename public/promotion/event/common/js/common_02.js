var fullbirthDt = "";

function addEvent(obj, type, fn){
  if(obj.addEventListener){
    obj.addEventListener(type, fn, false);
  }else if(obj.attachEvent){
    obj['e'+type+fn] = fn;
    obj[type+fn] = function(){
      obj['e'+type+fn](window.event);
    }
    obj.attachEvent('on'+type,obj[type+fn]);
  }
}
function security(){
  addEvent(document, 'mousedown', function(event){if(event.button == 2){event.preventDefault();}});
  addEvent(document, 'contextmenu', function(event){event.preventDefault();});
  addEvent(document, 'selectstart', function(event){event.preventDefault();});
  addEvent(document, 'dragstart', function(event){event.preventDefault();});
}

$(document).ready( function(){
  addEvent(window, 'load', security);

  $("input[name=rn_cust_name]").attr("maxlength", 4);
  $("input[name=rn_jumin1]").attr("maxlength", 6).keyup(function(e){
    $(this).val($(this).val().replace(/[^0-9]/g,''));
  });
  $("input[name=cr_mphone]").attr("maxlength", 13).keyup(function(e){
    $(this).val(numToTel($(this).val()));
  });
});

function isValidInsert(idx, from, to){

  if(!validate_name(idx)){
    return false;
  }
  if(!validate_birth(idx, from, to)){
    return false;
  }
  if(!validate_phone(idx)){
    return false;
  }
  if(!validate_cust_euyn(idx)){
    return false;
  }

  return true;
}


function validate_name(idx){
  var nameObj = $("form[name=frm"+idx+"] input[name=rn_cust_name]");
  var nameVal=$(nameObj).val();
  var temp_nm = "";
  if(isEmpty(nameVal)){
    alert("이름을 입력하세요.");
    $(nameObj).focus();
    return false;
  }

  var regexp = '';
  regexp = /[^가-힝\s]/g;
  temp_nm = nameVal.replace(regexp, '');

  if ( (nameVal != temp_nm) || "홍길동"==temp_nm || "바보"==temp_nm || "이름"==temp_nm
        || "테스트"==temp_nm || "테스터"==temp_nm
        || temp_nm.length < 2 || temp_nm.length > 3) {
    alert("이름을 정확하게 입력해주세요.");
    $(nameObj).focus();
    return false;
  }
  return true;
}



function validate_birth(idx, from, to){
  var birthObj = $("form[name=frm"+idx+"] input[name=rn_jumin1]");
  var birthVal = $(birthObj).val();

  if (isEmpty(birthVal)) {
    alert("생년월일을 입력하세요.\n\n       입력예) 780814");
    $(birthObj).val("");
    $(birthObj).focus();
    return false;
  }

  if (birthVal.length != 6 || parseInt(birthVal.substring(0,2)) == 19 || parseInt(birthVal.substring(0,2)) == 20
     || parseInt(birthVal.substring(2,4)) < 1 || parseInt(birthVal.substring(2,4)) > 12
     || parseInt(birthVal.substring(4,6)) < 1 || parseInt(birthVal.substring(4,6)) > 31) {
    alert("생년월일을 올바르게 입력하세요.\n\n           입력예) 780814");
    $(birthObj).val("");
    $(birthObj).focus();
    return false;
  }

  if("01|03|05|07|08|10|12".indexOf(birthVal.substring(2,4)) > -1 )
  {
    if(parseInt(birthVal.substring(4,6)) > 31)
    {
      alert("생년월일을 올바르게 입력하세요.\n\n         입력예) 780814");
    $(birthObj).val("");
    $(birthObj).focus();
      return false;
    }
  }

  if("04|06|09|11".indexOf(birthVal.substring(2,4)) > -1 )
  {
    if(parseInt(birthVal.substring(4,6)) > 30)
    {
      alert("생년월일을 올바르게 입력하세요.\n\n           입력예) 780814"); //생년월일 입력 오류 안내 수정 09.09.25
    $(birthObj).val("");
    $(birthObj).focus();
      return false;
    }
  }

  if("02" == birthVal.substring(2,4) && parseInt(birthVal.substring(4,6)) > 29 )
  {
    alert("생년월일을 올바르게 입력하세요.\n\n         입력예) 780814"); //생년월일 입력 오류 안내 수정 09.09.25
    $(birthObj).val("");
    $(birthObj).focus();
    return false;
  }

  var firstDigit = birthVal.substring(0,1);
  if( firstDigit == '0' || firstDigit == '1' || firstDigit == '2' || firstDigit == '3' ){
    alert("2000년 이전 출생자만 가능합니다.");
    return false;
  }

  if (parseInt(birthVal.substring(0,2)) >= 0 && parseInt(birthVal.substring(0,2)) < 30) {
    fullbirthDt = "20" + birthVal;
  }else{
    fullbirthDt = "19" + birthVal;
  }
  if(from && to){
    if (isBelowAge(fullbirthDt, from) || isOverAge(fullbirthDt, to)) {
      alert("가입가능 연령이 아닙니다. 가입가능범위는 "+from+"세 ~ "+to+"세입니다.");
      $(birthObj).val("");
      $(birthObj).focus();
      return false;
    }
  }

  return true;
}


function validate_phone(idx){
  var phoneObj = $("form[name=frm"+idx+"] input[name=cr_mphone]");
  var phoneVal = $(phoneObj).val();

  if (isEmpty(phoneVal)) {
    alert("연락처를 입력하세요.");
    $(phoneObj).focus();
    return false;
  }

  var phoneVal =  phoneVal.replace(/-/g,"");

  if (phoneVal.length < 10) {
    alert("연락처를 정확하게 입력해주세요.");
    $(phoneObj).focus();
    return false;
  }

  var phoneNum1 = phoneVal.substring(0,3);
  var phoneNum2 = phoneVal.substring(3,phoneVal.length - 4);
  var phoneNum3 = phoneVal.substring(phoneVal.length - 4);

  if( !(phoneNum1=="010" || phoneNum1=="011" || phoneNum1=="016" || phoneNum1=="017" || phoneNum1=="018" || phoneNum1=="019") ){
    alert("연락처를 정확하게 입력해주세요.");
    $(phoneObj).focus();
    return false;
  }

  // 010 으로 시작하면 무조건 11자리, 010이 아니면 10자리 또는 11자리
  if (phoneNum1=="010" && phoneVal.length != 11){
    alert("연락처를 정확하게 입력해주세요.");
    $(phoneObj).focus();
    return false;
  }
  if (phoneNum1!="010"&& (phoneVal.length > 11 || phoneVal.length < 10)) {
    alert("연락처를 정확하게 입력해주세요.");
    $(phoneObj).focus();
    return false;
  }

  // 0000, 1111 과 같이 동일한 경우
  if (phoneNum3.charAt(0) == phoneNum3.charAt(1)
        && phoneNum3.charAt(1) == phoneNum3.charAt(2)
        && phoneNum3.charAt(2) == phoneNum3.charAt(3)) {
    alert("연락처를 정확하게 입력해주세요.");
    $(phoneObj).focus();
    return false;
  }

  return true;
}

function validate_cust_euyn(idx){
  if($("form[name=frm"+idx+"] .uyn").is("input:checkbox")){
    if( !$("form[name=frm"+idx+"] .uyn").is(":checked") ){
      alert("'개인정보 수집 이용에 관한 동의'를 체크해 주셔야만 상담 신청이 가능합니다.");
      return false;
    }
  }else{
    if( $("form[name=frm"+idx+"] .uyn").val() != "Y" ){
      alert("'개인정보 수집 이용에 관한 동의'를 체크해 주셔야만 상담 신청이 가능합니다.");
      return false;
    }
  }
  if($("form[name=frm"+idx+"] .eyn").is("input:checkbox")){
    if( !$("form[name=frm"+idx+"] .eyn").is(":checked") ){
      alert("'개인정보 제공 관한 동의'를 체크해 주셔야만 상담 신청이 가능합니다.");
      return false;
    }
  }else{
    if( $("form[name=frm"+idx+"] .eyn").val() != "Y" ){
      alert("'개인정보 제공 관한 동의'를 체크해 주셔야만 상담 신청이 가능합니다.");
      return false;
    }
  }
  return true;
}






// 비어있는지 체크
function isEmpty(inVal) {
  if (inVal==null ||  inVal.replace(/ /gi,"") == "") {
    return true;
  }
  return false
}

function isBelowAge(scn1, age) {
  var today = new Date();
  var thisYear = today.getFullYear();
  var thisMonth = today.getMonth() + 1;
  var thisDay = today.getDate();

  var userBirthYear = parseInt(scn1.substring(0, 4), 10);
  var userBirthMonth = parseInt(scn1.substring(4, 6), 10);
  var userBirthDay = parseInt(scn1.substring(6, 8), 10);

  /* 보험나이 계산 */
  userBirthMonth = userBirthMonth - 6;
  if( userBirthMonth<0 ){
    userBirthMonth = userBirthMonth + 12;
    userBirthYear = userBirthYear - 1;
  }

  var yearDiff = thisYear - userBirthYear;
  var monthDiff = thisMonth - userBirthMonth;
  var dayDiff = thisDay - userBirthDay;

  if (yearDiff == age) {
    if (monthDiff < 0) {
      return true;
    } else if (monthDiff == 0) {
      if (dayDiff < 0) {
        return true;
      }else{
        return false;
      }
    } else {
      return false;
    }
  } else if (yearDiff < age) {
    return true;
  } else {
    return false;
  }
}

function isOverAge(scn1, age) {
  var today = new Date();
  var thisYear = today.getFullYear();
  var thisMonth = today.getMonth() + 1;
  var thisDay = today.getDate();

  var userBirthYear = parseInt(scn1.substring(0, 4), 10);
  var userBirthMonth = parseInt(scn1.substring(4, 6), 10);
  var userBirthDay = parseInt(scn1.substring(6, 8), 10);

  /* 보험나이 계산 */
  userBirthMonth = userBirthMonth - 6;
  if( userBirthMonth<0 ){
    userBirthMonth = userBirthMonth + 12;
    userBirthYear = userBirthYear - 1;
  }

  var yearDiff = thisYear - userBirthYear;
  var monthDiff = thisMonth - userBirthMonth;
  var dayDiff = thisDay - userBirthDay;

  if (yearDiff == age+1) {
    if (monthDiff > 0) {
      return true;
    } else if (monthDiff == 0) {
      if (dayDiff >= 0) {
        return true;
      }else{
        return false;
      }
    } else {
      return false;
    }
  } else if (yearDiff > age+1) {
    return true;
  } else {
    return false;
  }
}


function makeFormData(idx){
  var dJson = new Object();
  var fName = encodeURIComponent($("form[name=frm"+idx+"] input[name=rn_cust_name]").val());
  var fSex = "";
  if($("form[name=frm"+idx+"] .rn_sex").is("input:checkbox")){
    fSex = $("form[name=frm"+idx+"] input[name=rn_sex]:checked").val();
  }else{
    fSex = $("form[name=frm"+idx+"] input[name=rn_sex]").val();
  }
  var fBirth = $("form[name=frm"+idx+"] input[name=rn_jumin1]").val();
  var fPhone = $("form[name=frm"+idx+"] input[name=cr_mphone]").val();

  dJson.rn_cust_name_e = fName;
  dJson.rn_sex = fSex;
  dJson.rn_jumin1 = fBirth;
  dJson.cr_mphone = fPhone;
  dJson.cust_uyn = "Y";
  dJson.cust_eyn = "Y";
  dJson.fullbirthDt = fullbirthDt;

  return dJson;
}

function numToTel(telVal){
  var retVal='';
  retVal = telVal.replace(/[^0-9]/g,'');
  if(retVal.length <= 3){
    retVal = retVal;
  }else if(retVal.length >3 && retVal.length < 7){
    retVal = retVal.substring(0,3) + "-" + retVal.substring(3);
  }else if(retVal.length >= 7 && retVal.length < 11){
    retVal = retVal.substring(0,3) + "-" + retVal.substring(3,6)+ "-" + retVal.substring(6);
  }else if(telVal.length == 11){
    retVal = retVal.substring(0,3) + "-" + retVal.substring(3,7)+ "-" + retVal.substring(7);
  }else{
    retVal = retVal.substring(0,3) + "-" + retVal.substring(3,7)+ "-" + retVal.substring(7,11);
  }
  return retVal;
}

function clear_objs_value(obj_list){
  for(var i=0; i<obj_list.length; i++){
    obj_list[i].val("");
  }
}

function nbseFormatCurr(num) {

  num = num.toString().replace(/\$|\,/g,'');

  if(isNaN(num))
    num = "0";

  sign = (num == (num = Math.abs(num)));
  num = Math.floor(num*100+0.50000000001);
  cents = num%100;
  num = Math.floor(num/100).toString();

  if(cents<10)
    cents = "0" + cents;

  for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
    num = num.substring(0,num.length-(4*i+3))+','+
    num.substring(num.length-(4*i+3));

  return (((sign)?'':'-') + num);
}
