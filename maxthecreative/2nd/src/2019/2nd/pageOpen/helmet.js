import React from "react";
import {Helmet} from "react-helmet";

// import Data from '../data/helmetData'

export default function metaHead (props){
    // ogTitleCon ogDescriptionCon

    return (
        <>
        <Helmet>
            <title>맥스더크리에이티브|MAX the Creative 2nd|11월 12일-13일 엘타워 7층 그랜드홀</title>
            {`<!-- 오픈 정보 -->`}
            <meta name="title" 
                  content="맥스더크리에이티브|MAX the Creative 2nd|11월 12일-13일 엘타워 7층 그랜드홀" />
            <meta name="description"
                  content="5년간의 Max-summit 경험을 바탕으로 크리에이티브 전략을 완성하는 자리를 마련했습니다. 광고업계에서 개성적인 광고 전략으로..." />
            
            {`<!-- 오픈그래프 -->`}
            <meta property="og:title" content={props.ogTitleCon}/>
            <meta property="og:description"
                  content={props.ogDescriptionCon} />
            
            {`<!-- Facebook Pixel Code -->`}
            <script type="text/javascript">{`
                {
                    ! function (f, b, e, v, n, t, s) {
                        if (f.fbq) return;
                        n = f.fbq = function () {
                            n.callMethod ?
                                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                        };
                        if (!f._fbq) f._fbq = n;
                        n.push = n;
                        n.loaded = !0;
                        n.version = '2.0';
                        n.queue = [];
                        t = b.createElement(e);
                        t.async = !0;
                        t.src = v;
                        s = b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t, s)
                    }(window, document, 'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '468289743724072');
                    fbq('track', 'PageView');    
                }
            `}</script>
            <noscript>{`
                <img height="1" width="1" alt="facebook" style="display:none"
                     src="https://www.facebook.com/tr?id=468289743724072&ev=PageView&noscript=1https://www.facebook.com/tr?id=468289743724072&ev=PageView&noscript=1" />
            `}</noscript>
            {`<!-- End Facebook Pixel Code -->`}

            {`<!-- [ 구조화 데이터 및 채널 제출 ] -->`}
            {`<!-- 맥스더크리에이티브 -->`}
            <script type="application/ld+json">{`
            {
                "@context": "http://schema.org",
                "@type": "Event",
                "name" : "MAX The Creative 2019 2nd",
                "location": {
                "@type": "Place",
                "name": "ELtower",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "213 Gangnam-daero",
                    "addressLocality": "Seocho-gu",
                    "postalCode": "06749",
                    "addressRegion": "Seoul",
                    "addressCountry": "Republic of Korea"
                }
                },
                "startDate": "2019-11-12T09:00",
                "endDate": "2019-11-13",
                "url": "https://maxthecreative.co/",
                "logo": "https://maxthecreative.co/mtc_thumbnail.jpg",
                "contactPoint": [{
                "@type": "ContactPoint",
                "email": "hello@maxthecreative.co",
                "contactType": "customer support"
                }],
                "sameAs": [
                "https://www.facebook.com/maxsummit2019",
                "https://www.youtube.com/channel/UCImcWLV6kq702b6lZZQm25A"
                ]
            }
            `}</script>

            <link rel="stylesheet" href="/2019/css/style_2nd.css" />
            <link rel="stylesheet" href="/2019/css/session.css" />
            <link rel="stylesheet" href="/2019/css/award.css" />
            
            
            {/* <body class="dark" /> */}
        </Helmet>
        </>
    );
};


