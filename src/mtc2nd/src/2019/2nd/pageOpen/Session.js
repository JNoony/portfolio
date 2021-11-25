
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

// import { Icon } from 'react-materialize';

import MetaHead from './helmet';

import Footer from '../Footer';
import Header from '../Header';
import TabNavi from '../../../default/TabNavi';

import SubVisual from '../Visual/SubVisual';
import SessionLayout from '../Session/SessionLayout';


export default function Session ({ match }){
    return (
        <>
            {/* meta tag */}
            <MetaHead />

            <Header path={match.path}/>
            <TabNavi class={TabNaviData.class} data={TabNaviData.data} />
            <SubVisual title={subVisualData.title} />
            <SessionLayout />
            <Footer />

        </>
    );
}

const subVisualData = {
    title:'session'
}

const TabNaviData = {
    class:'main-sub-head session-nav',
    data:[
        { class:'tab',
          href:'#day1',
          linkClass:'btn-link',
          dataRel:'#day1',
          name:'day1'
        },
        { class:'tab',
          href:'#day2',
          linkClass:'btn-link',
          dataRel:'#day2',
          name:'day2'
        },
    ]
}
