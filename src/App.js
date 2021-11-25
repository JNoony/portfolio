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

// import Mobintouch from '/mobintouch/src/index.js'


let originURL = window.location.origin;

function App() { 
  return (
    <div className="App">
      <div>ㅠㅠㅠ</div>
      <a href={`${originURL}/webfertile/`} className="btn-style waves-effect waves-red" target="_blank">webfertile</a>
      <a href={`${originURL}/promotion/game/src/`} className="btn-style waves-effect waves-red" target="_blank">promotion</a>
      <a href={`${originURL}/maxsummit/`} className="btn-style waves-effect waves-red" target="_blank">maxsummit 2019</a>
      <a href={`${originURL}/mtc1st/`} className="btn-style waves-effect waves-red" target="_blank">MaxTheCreative 2019 1st</a>
      <a href={`${originURL}/mobintouch/`} className="btn-style waves-effect waves-red" target="_blank">mobintouch</a>
      {/* <Router>
        <Switch>
          <Route path="/mobintouch" exact component={Mobintouch}>[DEMO] 모비인터치</Route>
          <Route path="/mtc2nd" exact component={MTC1st}>[DEMO] 맥스더크리에이티브 2nd</Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
