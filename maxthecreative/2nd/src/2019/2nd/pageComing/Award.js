
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

import { Icon } from 'react-materialize';

import MetaHead from './helmet';

import Footer from '../Footer';
import HeaderComing from '../Header/Coming';

import AwardComing from '../Award/AwardComing';
import SubVisual from '../Visual/SubVisual';



export default function Award ({ match }){
    return (
        <>
            <MetaHead />
            <HeaderComing path={match.path}/>
            <SubVisual title={subVisualData.title} />
            <AwardComing />
            <Footer />
        </>
    );
}

// AwardComing.defaultProps={
//     title:'award'
// }
const subVisualData = {
    title:'award'
}




