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
// import Footer from '../components/Footer';
// import TopBtn from '../components/TopBtn';



export default function App() {
    // window.Kakao.init('76a62eaf98534a906b31f501348f0548');
    return (
        <Router>
            <Switch>
                <Route path="/mobintouch" exact component={MainPage} />
                <Route path="/company" component={CompanyPage} />
                <Route path="/marketer" component={MarketerPage} />
                <Route path="/contact" component={ContactPage} />  
                <Route path="/privacy" component={PrivacyPage} />  

                <Route path="/partner" component={ProgramPage} >
                    <Route path="/partner" exact component={ProgramPage} />
                    <Route path="/partner/position" component={PositionPage}>
                        <Route path="/partner/position/:id" component={PositionPage} />
                        <Route path="/partner/position" exact component={PositionPage} />
                    </Route>
                </Route>

                <Route component={NotFound} />
                {/* <Route path="/*" component={NotFound} /> */}
            </Switch>           
        </Router>
    );
}


  