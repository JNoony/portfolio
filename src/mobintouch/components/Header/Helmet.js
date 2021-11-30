import React from 'react';
import {Helmet} from "react-helmet";


export default function MobintouchHelmet() {  
    return(
    <Helmet>
        <title>[DEMO] 모비인터치</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
        <meta name="format-detection" />

        <meta name="keywords" content="모비인터치, mobintouch, MOIBNTOUCH, Mobintouch, 마케터, 헤드헌팅, ..." />
        <meta name="description" content="2020-10 까지의 오픈용" />
        <meta name="Author" content="모비데이즈(MOBIDAYS)" />
        <meta name="Copyright" content="모비데이즈(MOBIDAYS)" />
        <meta name="reply-to" content="http://www.mobidays.com" />

        <link rel="canonical" href="https://mobintouch.co.kr/"></link>

        <link rel="shortcut icon" href="/mobintouch/favicon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/moonspam/NanumBarunGothic@1.0/nanumbarungothicsubset.css" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/css/materialize.min.css"/>
        <link rel="stylesheet" href="/mobintouch/css/materialize.css"/>
        <link rel="stylesheet" href="/mobintouch/css/animation.css"/>
        <link rel="stylesheet" href="/mobintouch/css/style.css"/>
        <link rel="stylesheet" href="/mobintouch/css/mobile.css" media="(max-width: 600px) and (orientation:portrait)"></link>
      
    </Helmet>
    )
}


