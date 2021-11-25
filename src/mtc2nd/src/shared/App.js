import React from 'react';
// import {IndexRoute} from 'react-router'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

import NotFound from './NotFound';

import v20192nd_Main from '../2019/2nd/pageOpen/Main';
import v20192nd_Session from '../2019/2nd/pageOpen/Session';

import v20192ndfin_Main from '../2019/2nd/pageComing/Main';
import v20192ndfin_Session from '../2019/2nd/pageComing/Session';
import v20192ndfin_Award from '../2019/2nd/pageComing/Award';



function App(){
    return(
        <Switch>
            {/* 2019-2nd - open[main] */}
            <Route path="/2019/2nd" exact component={v20192nd_Main} />
            <Route path="/2019/2nd/session" component={v20192nd_Session} />

            {/* 2019-2nd - finar */}
            <Route path="/" exact component={v20192ndfin_Main} />
            <Route path="/session" component={v20192ndfin_Session}/> 
            <Route path="/award" component={v20192ndfin_Award}/>
            
            {/* 2020-1st  <-- base test */}
            {/* <Route path="/2020/1st" exact component={v20201st_Main} /> */}
  

            <Route component={NotFound} />
        </Switch>
    )
}
export default App;

