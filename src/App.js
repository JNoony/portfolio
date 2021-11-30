import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import Mobintouch from './mobintouch/shared/MobintouchPage'

let originURL = window.location.origin;
let para = window.location.pathname;
console.log('originURL : ',originURL)
console.log('para : ',para)

function App() { 
  return (
    <div className="App">
      { para === '/mobintouch/' || para === '/mtc2nd/' 
        ? '' : router(originURL) }

      <Switch>
        <Route path="/mobintouch" component={Mobintouch} />
        <Route path="/mtc2nd" component={Mobintouch} />
      </Switch>
    </div>
  );
}

const router = (originURL) => {
  return(
    <>
    <div>
      <h2>포트폴리오 데모페이지 허브사이트</h2>
      <ul>
        <li><a href={`${originURL}/webfertile/`} target="_blank">webfertile</a></li>
        <li><a href={`${originURL}/promotion/game/src/`} target="_blank">promotion</a></li>
        <li><a href={`${originURL}/maxsummit/`} target="_blank">maxsummit 2019</a></li>
        <li><a href={`${originURL}/mtc1st/`} target="_blank">MaxTheCreative 2019 1st</a></li>
        <li><Link to="/mobintouch" target="_blank" rel="noopener noreferrer" >Mobintouch</Link></li>
        <li><Link to="/mtc2nd" target="_blank" rel="noopener noreferrer">MaxTheCreative 2019 2nd</Link></li>
      </ul>
    </div>
    </>
  )
}

export default App;
