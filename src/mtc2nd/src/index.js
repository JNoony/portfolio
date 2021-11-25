import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie9'; // For IE 9-11 support

import Root from './client/Root';
import './index.css';

import * as serviceWorker from './serviceWorker';

// import ReactLoading from "react-loading";
// const Loading = () => {
//     // const [hidden, setHidden ] = useState( true )
//     window.onload=()=>{
//         document.querySelector('.loading').style.display='none';
//     }
//     // setTimeout(() => {
//     //     document.querySelector('.loading').style.display='none';
//     // }, 3000)
    
//     return(
//         <div className="loading">
//             <ReactLoading type={'bars'} color="#fff" 
//                           className="loading-bar" />
//         </div>
//     )
// };
window.onload=()=>{
    document.querySelector('.loading').style.display='none';
}

ReactDOM.render(<>
    {/* <Loading /> */}
    <Root />
</>,  document.getElementById('root') );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
