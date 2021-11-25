
import React from 'react';
import MetaHead from './helmet';

import Footer from '../Footer';
import HeaderComing from '../Header/Coming';
import TabNavi from '../../../default/TabNavi';

import SubVisual from '../Visual/SubVisual';
import SessionModule from '../Session/SessionLayout';


export default function Session ({ match }){
    return (
        <>
            <MetaHead />
            <HeaderComing path={match.path}/>
            <TabNavi class={TabNaviData.class} data={TabNaviData.data} />
            <SubVisual title={subVisualData.title} />
            <SessionModule/>
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



