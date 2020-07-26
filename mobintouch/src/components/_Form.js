import React from 'react';

// var x, i, j, selElmnt, a, b, c;
// /* Look for any elements with the class "custom-select": */
// x = document.getElementsByClassName("custom-select");
// for (i = 0; i < x.length; i++) {
//     selElmnt = x[i].getElementsByTagName("select")[0];
//     /* For each element, create a new DIV that will act as the selected item: */
//     a = document.createElement("DIV");
//     a.setAttribute("class", "select-selected");
//     a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
//     x[i].appendChild(a);
//     /* For each element, create a new DIV that will contain the option list: */
//     b = document.createElement("DIV");
//     b.setAttribute("class", "select-items select-hide");
//     for (j = 1; j < selElmnt.length; j++) {
//         /* For each option in the original select element,
//         create a new DIV that will act as an option item: */
//         c = document.createElement("DIV");
//         c.innerHTML = selElmnt.options[j].innerHTML;
//         c.addEventListener("click", function(e) {
//             /* When an item is clicked, update the original select box,
//             and the selected item: */
//             var y, i, k, s, h;
//             s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//             h = this.parentNode.previousSibling;
//             for (i = 0; i < s.length; i++) {
//             if (s.options[i].innerHTML == this.innerHTML) {
//                 s.selectedIndex = i;
//                 h.innerHTML = this.innerHTML;
//                 y = this.parentNode.getElementsByClassName("same-as-selected");
//                 for (k = 0; k < y.length; k++) {
//                 y[k].removeAttribute("class");
//                 }
//                 this.setAttribute("class", "same-as-selected");
//                 break;
//             }
//             }
//             h.click();
//         });
//         b.appendChild(c);
//     }
//     x[i].appendChild(b);
//     a.addEventListener("click", function(e) {
//         /* When the select box is clicked, close any other select boxes,
//         and open/close the current select box: */
//         e.stopPropagation();
//         closeAllSelect(this);
//         this.nextSibling.classList.toggle("select-hide");
//         this.classList.toggle("select-arrow-active");
//     });
// }

// function closeAllSelect(elmnt) {
//     /* A function that will close all select boxes in the document,
//     except the current select box: */
//     var x, y, i, arrNo = [];
//     x = document.getElementsByClassName("select-items");
//     y = document.getElementsByClassName("select-selected");
//     for (i = 0; i < y.length; i++) {
//         if (elmnt == y[i]) {
//         arrNo.push(i)
//         } else {
//         y[i].classList.remove("select-arrow-active");
//         }
//     }
//     for (i = 0; i < x.length; i++) {
//         if (arrNo.indexOf(i)) {
//         x[i].classList.add("select-hide");
//         }
//     }
// }
// /* If the user clicks anywhere outside the select box,
//     then close all select boxes: */
// document.addEventListener("click", closeAllSelect);

const formUrl = 'https://script.google.com/a/mobidays.com/macros/s/AKfycby0oJMqibm0T45bsloDgwsyV_IJBHppUlzEunGuryxqyTyAyUNy/exec'

export default function Form(){    
    return(
        <div className="wid section-con">
            <form id="mailto" method="POST"
                //   action="https://mail.google.com/mail/?view=cm&fs=1&to=mjhan@mobidays.com"
                  action={formUrl}
                //   action="https://script.google.com/a/mobidays.com/macros/s/AKfycbwKh8gILgHJn0wiWufQeU-ohe48rWeyf6x9qBj82LhnESrG2ox3/exec"
                  data-email="mjhan@mobidays.com"
            >   
                <div className="form-elements">
                    {/* 스팸방지 */}
                    {/* <label class="sr-only">Keep this field blank</label>
                    <input id="honeypot" type="text" name="honeypot" value="" /> */}

                    <fieldset className="pure-group">
                        <label htmlFor="title" className="pure-group-label" >title</label>
                        <input id="title" name="title" className="pure-group-text"
                               type="text"
                               placeholder="title" />
                    </fieldset>

                    <fieldset className="pure-group">
                        <label htmlFor="type" className="pure-group-label active" >type</label>
                        <div className="custom-select" >
                            <select id="type" name="type" >
                                <option value="">--문의유형 선택해주세요------</option>
                                <option value="[company] 기업 마케팅/채용 컨설팅 문의">채용</option>
                                <option value="[company] 기업 마케터/인재 채용 문의">인재</option>
                                <option value="[company] 기업 제휴/파트너쉽 문의">파트너쉽</option>
                                <option value="[marketer] 마케터 커리어 개발/컨설팅 문의">개발</option>
                                <option value="[marketer] 기업마케팅/채용 컨설팅 문의">기업마케팅</option>
                            </select>
                        </div>
                        {/* <select id="type" name="type" className="pure-group-text" >
                            <option id="type1" value="">--문의유형 선택해주세요------</option>
                            <option id="type1" value="[company] 기업 마케팅/채용 컨설팅 문의">채용</option>
                            <option id="type2" value="[company] 기업 마케터/인재 채용 문의">인재</option>
                            <option id="type3" value="[company] 기업 제휴/파트너쉽 문의">파트너쉽</option>
                            <option id="type4" value="[marketer] 마케터 커리어 개발/컨설팅 문의">개발</option>
                            <option id="type5" value="[marketer] 기업마케팅/채용 컨설팅 문의">기업마케팅</option>
                        </select>
                        <span className="pure-group-arrow"></span> */}
                    </fieldset>

                    <fieldset className="pure-group">
                        <label htmlFor="name" className="pure-group-label" >Name: </label>
                        <input id="name" name="name" className="pure-group-text"
                               type="text"
                               placeholder="name" />
                    </fieldset>

                    <fieldset className="pure-group">
                        <label htmlFor="job" className="pure-group-label">job: </label>
                        <input id="job" name="job" className="pure-group-text"
                               type="text"
                               placeholder="job" />
                    </fieldset>

                    <fieldset className="pure-group">
                        <label htmlFor="number" className="pure-group-label" >tell: </label>
                        <input id="number" name="number" className="pure-group-text"
                               type="text"
                               placeholder="number" />
                    </fieldset>

                    <fieldset className="pure-group">
                        <label htmlFor="email" className="pure-group-label" >Email Address: </label>
                        <input id="email" name="email" 
                               type="email"
                               className="pure-group-text"
                               placeholder="your.name@email.com" />
                    </fieldset>

                    <fieldset className="pure-group">
                        <label htmlFor="message" className="pure-group-label" >Message: </label>
                        <textarea id="message" name="message" rows="10" className="pure-group-text"
                                  placeholder="Tell us what's on your mind...">
                        </textarea>
                    </fieldset>

                    <button className="button-success pure-button button-xlarge" >
                        <i className="fa fa-paper-plane"></i>&nbsp;Send
                    </button>
                </div>
            </form>
            {/* <form action="MAILTO:myemail@gmail.com?subject= Intro request" method="post" enctype="text/plain"></form> */}
            {/* <input type="text" value="" name="" className="ipt-text"/>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mjhan@mobidays.com"
               target="_blank">버튼</a> */}
        </div>
    )
}
