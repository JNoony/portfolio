

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
	addEvent(window, 'load', security);


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

	function openWindow(url, name, w, h, noScroll) {
		var winX = 0;
		var winY = 0;

		var scroll = noScroll ? 0 : 1;

		if (parseInt(navigator.appVersion) >= 4) {
			winX = (screen.availWidth - w) * .5;
			winY = (screen.availHeight - h) * .5;
		}

		var features = 'width=' + w + ',height=' + h + ',left=' + winX + ',top=' + winY + ', scrollbars=' + scroll;
		popupWin = window.open(url, name, features);
	}

	function isNumber(input) {
		var chars = "0123456789";
		return containsCharsOnly(input,chars);
	}

	function isNumberWithBar(input) {
		var chars = "0123456789-";
		return containsCharsOnly(input,chars);
	}

	function containsCharsOnly(input,chars) {
		for (var inx = 0; inx < input.value.length; inx++) {
		   if (chars.indexOf(input.value.charAt(inx)) == -1)
			   return false;
		}
		return true;
	}

	// 숫자만 입력했는지 여부 체크
	function onlyNumber(checkTag) {
		if (!isNumber(checkTag)) {
			alert("숫자만 입력하세요");
			checkTag.value = "";
			checkTag.focus();
		}
	}

	function onlyNumberWithBar(checkTag) {
		if (!isNumberWithBar(checkTag)) {
			alert("숫자만 입력하세요");
			checkTag.value = "";
			checkTag.focus();
		}
	}

	// 비어있는지 체크
	function isEmpty(input) {
		if (input==null || input.value == null || input.value.replace(/ /gi,"") == "") {
			return true;
		}
		return false
	}

	//숫자만 누를수 있게 처리.
	function checkInt() {
		if (event.keyCode < 48 || event.keyCode > 57)
			event.returnValue = false
		else
			event.returnValue = true;
	}

	function validate_name(var_name){

		var nm = var_name;
		var regexp = '';
		var repexp = '';
		regexp = /[^가-힝\s]/g;
		nm = nm.replace(regexp, repexp);

		if(nm != var_name){
			return false;
		}

		if ("홍길동"==var_name || "바보"==var_name || "이름"==var_name
					|| "테스트"==var_name || "테스터"==var_name
					|| var_name.length < 2 || var_name.length > 3) {
			return false;
		}
		return true;
	}

	function validate_phone1(phone){
		// 0000, 1111 과 같이 동일한 경우
		if (phone.charAt(0) == phone.charAt(1)
					&& phone.charAt(1) == phone.charAt(2)
					&& phone.charAt(2) == phone.charAt(3)) {
			return false;
		}

		// 1234, 4321 과 같이 연속된 숫자의 경우
		var cal_array = new Array(3);
		for (var i = 0; i < 3; i++) {
			cal_array[i] =  phone.charAt(i + 1) - phone.charAt(i);
		}
		if (cal_array[0] == cal_array[1]
					&& cal_array[1] == cal_array[2]
					&& Math.abs(cal_array[0]) == 1) {
			return false;
		}
		return true;
	}


	function validate_phone2(phone1,phone2,phone3){

		var cr_mphone = phone1 + phone2 + phone3;

		if (phone1=="010" && cr_mphone.length != 11){
			return false;
		}
		if (phone1!="010"&& (cr_mphone.length > 11 || cr_mphone.length < 10)) {
				return false;
		}
		return true;
	}

	function validate_cust_euyn(obj_uyn, obj_eyn){
		if (!obj_uyn.checked) {
			alert("'개인정보 수집 이용에 관한 동의'를 체크해 주셔야만 상담 신청이 가능합니다.");
			return false;
		}
		if (!obj_eyn.checked) {
			alert("'개인정보 제공 관한 동의'를 체크해 주셔야만 상담 신청이 가능합니다.");
			return false;
		}
		return true;
	}

	function validate_phone(obj_phone1, obj_phone2, obj_phone3){
		if (isEmpty(obj_phone2) || obj_phone2.value.length < 3) {
			alert("연락처를 입력하세요.");
			obj_phone2.focus();
			return false;
		}
		if (isEmpty(obj_phone3) || obj_phone3.value.length < 4) {
			alert("연락처를 입력하세요.");
			obj_phone3.focus();
			return false;
		}
		if (!validate_phone1(obj_phone3.value)){
			alert("연락처를 정확하게 입력해주세요.");
			obj_phone3.focus();
			return false;
		}

		if (!validate_phone2(obj_phone1.value, obj_phone2.value, obj_phone3.value)){
			alert("연락처를 정확하게 입력해주세요.");
			obj_phone1.focus();
			return false;
		}

		return true;
	}

	function validate_name1(obj_name){
		if (isEmpty(obj_name)) {
			alert("이름을 입력하세요.");
			obj_name.focus();
			return false;
		}
		if(!validate_name(obj_name.value)) {
			alert("이름을 정확하게 입력해주세요.");
			obj_name.focus();
			return false;
		}
		return true;
	}


	function validate_jumin1(obj_jumin1){
		if (isEmpty(obj_jumin1)) {
			alert("생년월일을 입력하세요.\n\n       입력예) 780814"); //생년월일 입력 오류 안내 수정 09.09.25
			obj_jumin1.value = "예)780814";
			obj_jumin1.focus();
			return false;
		}

		if (obj_jumin1.value.length != 6 || parseInt(obj_jumin1.value.substring(0,2)) == 19 || parseInt(obj_jumin1.value.substring(0,2)) == 20
		   || parseInt(obj_jumin1.value.substring(2,4)) < 1 || parseInt(obj_jumin1.value.substring(2,4)) > 12
		   || parseInt(obj_jumin1.value.substring(4,6)) < 1 || parseInt(obj_jumin1.value.substring(4,6)) > 31) {
			alert("생년월일을 올바르게 입력하세요.\n\n           입력예) 780814"); //생년월일 입력 오류 안내 수정 09.09.25
			obj_jumin1.value = "예)780814";
			obj_jumin1.focus();
			return false;
		}

		if("01|03|05|07|08|10|12".indexOf(obj_jumin1.value.substring(2,4)) > -1 )
		{
			if(parseInt(obj_jumin1.value.substring(4,6)) > 31)
			{
				alert("생년월일을 올바르게 입력하세요.\n\n         입력예) 780814"); //생년월일 입력 오류 안내 수정 09.09.25
				obj_jumin1.value = "예)780814";
				obj_jumin1.focus();
				return false;
			}
		}

		if("04|06|09|11".indexOf(obj_jumin1.value.substring(2,4)) > -1 )
		{
			if(parseInt(obj_jumin1.value.substring(4,6)) > 30)
			{
				alert("생년월일을 올바르게 입력하세요.\n\n           입력예) 780814"); //생년월일 입력 오류 안내 수정 09.09.25
				obj_jumin1.value = "예)780814";
				obj_jumin1.focus();
				return false;
			}
		}

		if("02" == obj_jumin1.value.substring(2,4) && parseInt(obj_jumin1.value.substring(4,6)) > 29 )
		{
			alert("생년월일을 올바르게 입력하세요.\n\n         입력예) 780814"); //생년월일 입력 오류 안내 수정 09.09.25
			obj_jumin1.value = "예)780814";
			obj_jumin1.focus();
			return false;
		}

		var firstDigit = obj_jumin1.value.substring(0,1);
		if( firstDigit == '0' || firstDigit == '1' || firstDigit == '2' || firstDigit == '3' ){
			alert("2000년 이전 출생자만 가능합니다.");
			return false;
		}

		return true;
	}

	/**
	 *	생년월일이 8자리인 경우
	 */
	function validate_jumin2(obj_jumin1){
		if (isEmpty(obj_jumin1)) {
			alert("생년월일을 입력하세요.\n\n       입력예) 19700814");
			obj_jumin1.value = "예)19700814";
			obj_jumin1.focus();
			return false;
		}

		if (obj_jumin1.value.length != 8 || !(parseInt(obj_jumin1.value.substring(0,2)) == 19 || parseInt(obj_jumin1.value.substring(0,2)) == 20)
		   || parseInt(obj_jumin1.value.substring(4,6)) < 1 || parseInt(obj_jumin1.value.substring(4,6)) > 12
		   || parseInt(obj_jumin1.value.substring(6,8)) < 1 || parseInt(obj_jumin1.value.substring(6,8)) > 31) {
			alert("생년월일을 올바르게 입력하세요.\n\n           입력예) 19700814");
			obj_jumin1.value = "예)19700814";
			obj_jumin1.focus();
			return false;
		}

		if("01|03|05|07|08|10|12".indexOf(obj_jumin1.value.substring(4,6)) > -1 )
		{
			if(parseInt(obj_jumin1.value.substring(6,8)) > 31)
			{
				alert("생년월일을 올바르게 입력하세요.\n\n           입력예) 19700814");
				obj_jumin1.value = "예)19700814";
				obj_jumin1.focus();
				return false;
			}
		}

		if("04|06|09|11".indexOf(obj_jumin1.value.substring(4,6)) > -1 )
		{
			if(parseInt(obj_jumin1.value.substring(6,8)) > 30)
			{
				alert("생년월일을 올바르게 입력하세요.\n\n           입력예) 19700814");
				obj_jumin1.value = "예)19700814";
				obj_jumin1.focus();
				return false;
			}
		}

		if("02" == obj_jumin1.value.substring(4,6) && parseInt(obj_jumin1.value.substring(6,8)) > 29 )
		{
			alert("생년월일을 올바르게 입력하세요.\n\n           입력예) 19700814");
			obj_jumin1.value = "예)19700814";
			obj_jumin1.focus();
			return false;
		}

		return true;
	}




	function validate_brthDt(obj_jumin2, obj_brthDt, from, to){

		var rslt = "";

		if(!validate_jumin1(obj_jumin2)){
			return false;
		}

		if (parseInt(obj_jumin2.value.substring(0,2)) > 0 && parseInt(obj_jumin2.value.substring(0,2)) < 30) {
			rslt = "20" + obj_jumin2.value;
		} else {
			rslt = "19" + obj_jumin2.value;
		}

		if (isBelowAge(rslt, from) || isOverAge(rslt, to)) {
			alert("가입가능 연령이 아닙니다. 가입가능범위는 "+from+"세 ~ "+to+"세입니다.");
			obj_jumin2.value = "예) 700814";
			obj_jumin2.focus();
			return false;
		}

		return rslt;
	}

	function clear_objs_value(obj_list){
		for(var i=0; i<obj_list.length; i++){
			obj_list[i].value = "";
		}
	}

	function loadFlash_1(fname,w,h, id) {
		oStr  = "<Object classid=clsid:d27cdb6e-ae6d-11cf-96b8-444553540000 id='" + id + "'"
		oStr += "	codebase=http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,32,18  "
		oStr += "	width="+w+" height="+h+" align=middle>"
		oStr += "	<Param name=allowScriptAccess value=always />"
		oStr += "	<Param name=movie value="+fname+" />"
		oStr += "	<Param name=quality value=best />"
		oStr += "	<Param name=wmode value=transparent />"
		oStr += "	<param name=FlashVars value='bgNum=3' />"
		oStr += "	<Embed src="+fname+" wmode=transparent width="+w+" height="+h+" name='" + id + "' align=middle allowScriptAccess=sameDomain type=application/x-shockwave-flash pluginspage=http://www.macromedia.com/go/getflashplayer />"
		oStr += "</Object>"
		document.write(oStr);
	}

	function f_link_privacy_1(num) {
		switch (num) {
			case 1: //개인정보 수집 동의
				url = "http://www.aiadirect.co.kr/account/popPrivate.jsp";
				window.open(url, "aia_popup", "width=336 height=524 resizable=yes, scrollbars=no");
				break;
			case 2: //이벤트 개인정보 수집 동의
				url = "http://www.aiadirect.co.kr/account/popPrivateEvent.jsp";
				window.open(url, "aia_popup", "width=336 height=514 resizable=yes, scrollbars=no");
				break;
		}
	}



	function isValidInsert(ofrm){
		if(!validate_name1(ofrm.rn_cust_name)){
			return false;
		}
		if(!validate_jumin1(ofrm.rn_jumin1)){
			return false;
		}
		if(!validate_phone(ofrm.phone1, ofrm.phone2, ofrm.phone3)){
			return false;
		}
		if(!validate_cust_euyn(ofrm.cust_uyn1, ofrm.cust_eyn1)){
			return false;
		}else{
			try{
				ofrm.cust_uyn.value = 'Y';
				ofrm.cust_eyn.value = 'Y';
			}catch(e){}
		}

		return true;
	}

	function isValidKmInsert(ofrm){
		if(!validate_name1(ofrm.km_cust_name)){
			return false;
		}
		if(!validate_jumin1(ofrm.rn_jumin2)){
			return false;
		}
		if(!validate_phone(ofrm.km_phone1, ofrm.km_phone2, ofrm.km_phone3)){
			return false;
		}
		if(!validate_cust_euyn(ofrm.cust_uyn2, ofrm.cust_eyn2)){
			return false;
		}else{
			try{
				ofrm.cust_uyn.value = 'Y';
				ofrm.cust_eyn.value = 'Y';
			}catch(e){}
		}

		var calcBirth = "";
		if (parseInt(ofrm.rn_jumin2.value.substring(0,2)) > 0 && parseInt(ofrm.rn_jumin2.value.substring(0,2)) < 30) {
			calcBirth = "20" + ofrm.rn_jumin2.value;
		} else {
			calcBirth = "19" + ofrm.rn_jumin2.value;
		}
		try{
			ofrm.brthDt.value = calcBirth;
		}catch(e){}

		return true;
	}

	/*
	* 생년월일이 8자리인 경우
	*/
	function isValidKmInsert2(ofrm){
		if(!validate_name1(ofrm.km_cust_name)){
			return false;
		}
		if(!validate_jumin2(ofrm.brthDt)){
			return false;
		}
		if(!validate_phone(ofrm.km_phone1, ofrm.km_phone2, ofrm.km_phone3)){
			return false;
		}
		if(!validate_cust_euyn(ofrm.cust_uyn2, ofrm.cust_eyn2)){
			return false;
		}else{
			try{
				ofrm.cust_uyn.value = 'Y';
				ofrm.cust_eyn.value = 'Y';
			}catch(e){}
		}

		return true;
	}




	// 밸리데이션 통일화 작업 추가
	function validate_phone_n(phoneObj){

		if (isEmpty(phoneObj)) {
			alert("연락처를 입력하세요.");
			phoneObj.focus();
			return false;
		}

		var phoneNum = phoneObj.value;
		phoneNum = phoneNum.replace(/-/g,"");

		if (phoneNum.length < 10) {
			alert("연락처를 정확하게 입력해주세요.");
			phoneObj.focus();
			return false;
		}

		var phoneNum1 = phoneNum.substring(0,3);
		var phoneNum2 = phoneNum.substring(3,phoneNum.length - 4);
		var phoneNum3 = phoneNum.substring(phoneNum.length - 4);

		if( !(phoneNum1=="010" || phoneNum1=="011" || phoneNum1=="016" || phoneNum1=="017" || phoneNum1=="018" || phoneNum1=="019") ){
			alert("연락처를 정확하게 입력해주세요.");
			phoneObj.focus();
			return false;
		}

		// 010 으로 시작하면 무조건 11자리, 010이 아니면 10자리 또는 11자리
		if (phoneNum1=="010" && phoneNum.length != 11){
			alert("연락처를 정확하게 입력해주세요.");
			phoneObj.focus();
			return false;
		}
		if (phoneNum1!="010"&& (phoneNum.length > 11 || phoneNum.length < 10)) {
			alert("연락처를 정확하게 입력해주세요.");
			phoneObj.focus();
			return false;
		}

		// 0000, 1111 과 같이 동일한 경우
		if (phoneNum3.charAt(0) == phoneNum3.charAt(1)
					&& phoneNum3.charAt(1) == phoneNum3.charAt(2)
					&& phoneNum3.charAt(2) == phoneNum3.charAt(3)) {
			alert("연락처를 정확하게 입력해주세요.");
			phoneObj.focus();
			return false;
		}

		return true;
	}








	function isValidInsertCheck(ofrm){
		if(!validate_name1(ofrm.rn_cust_name)){
			return false;
		}
		if(!validate_jumin1(ofrm.rn_jumin1)){
			return false;
		}
		if(!validate_phone_n(ofrm.cr_mphone)){
			return false;
		}
		if(!validate_cust_euyn(ofrm.cust_uyn1, ofrm.cust_eyn1)){
			return false;
		}else{
			try{
				ofrm.cust_uyn.value = 'Y';
				ofrm.cust_eyn.value = 'Y';
			}catch(e){}
		}

		return true;
	}

	function isValidInsert2(ofrm, kmB){
		if(kmB){
			var calcBirth = "";
			if (parseInt(ofrm.rn_jumin1.value.substring(0,2)) > 0 && parseInt(ofrm.rn_jumin1.value.substring(0,2)) < 30) {
				calcBirth = "20" + ofrm.rn_jumin1.value;
			} else {
				calcBirth = "19" + ofrm.rn_jumin1.value;
			}
			try{
				ofrm.brthDt.value = calcBirth;
			}catch(e){}
		}
		return isValidInsertCheck(ofrm);
	}


	function numToTel(obj){
		var telNum = obj.value;
		telNum = telNum.replace(/-/g,"");
		if(telNum.length <= 3){
			obj.value = telNum;
		}else if(telNum.length >3 && telNum.length < 7){
			obj.value = telNum.substring(0,3) + "-" + telNum.substring(3);
		}else if(telNum.length >= 7 && telNum.length < 11){
			obj.value = telNum.substring(0,3) + "-" + telNum.substring(3,6)+ "-" + telNum.substring(6);
		}else if(telNum.length == 11){
			obj.value = telNum.substring(0,3) + "-" + telNum.substring(3,7)+ "-" + telNum.substring(7);
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
