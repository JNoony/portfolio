import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
// import {CookiesProvider} from 'react-cookie';

import MainPage from '../pages/MainPage';
import ProgramPage from '../pages/ProgramPage';
import PositionPage from '../pages/PositionPage';
import CompanyPage from '../pages/CompanyPage';
import MarketerPage from '../pages/MarketerPage';
import ContactPage from '../pages/ContactPage';
import PrivacyPage from '../pages/PrivacyPage';


import NotFound from './NotFound';
import MobintouchHelmet from '../components/Header/Helmet';
// import Footer from '../components/Footer';
// import TopBtn from '../components/TopBtn';



export default function App() {
    // window.Kakao.init('76a62eaf98534a906b31f501348f0548');
    return (<>
        <MobintouchHelmet />
        <Router>
            <Switch>
                <Route path="/mobintouch" exact component={MainPage} />
                <Route path="/mobintouch/company" component={CompanyPage} />
                <Route path="/mobintouch/marketer" component={MarketerPage} />
                <Route path="/mobintouch/contact" component={ContactPage} />  
                <Route path="/mobintouch/privacy" component={PrivacyPage} />  

                <Route path="/mobintouch/partner" component={ProgramPage} >
                    <Route path="/mobintouch/partner" exact component={ProgramPage} />
                    <Route path="/mobintouch/partner/position" component={PositionPage}>
                        <Route path="/mobintouch/partner/position/:id" component={PositionPage} />
                        <Route path="/mobintouch/partner/position" exact component={PositionPage} />
                    </Route>
                </Route>

                <Route component={NotFound} />
                {/* <Route path="/*" component={NotFound} /> */}
            </Switch>           
        </Router>
    </>);
}


  