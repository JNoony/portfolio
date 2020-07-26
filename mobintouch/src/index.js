import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router-dom';
import Root from './client/Root';

import './index.css';

// 기본 webpack이 설정되어 있는 create-react-app 이 프로젝트 베이스.
// webpack 설정 커스텀 하고 싶다면 npm run eject 해서 처음부터 설정해야함. [※npm run eject 한 후엔 되돌릴수 없음] 
// node_modules / react-scripts / config 에서 webpack 구성을 찾을수 있음.
// shared/App.js 파일이 router 기능.
// 차후 리덕스 사용을 고려하여 client/Root.js 로 연결

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Root />, document.getElementById('mobintouch-contents'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
