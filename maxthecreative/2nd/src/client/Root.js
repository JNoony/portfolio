import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from '../shared/App';


import { default as Routes } from '../shared/Routers';


const Root = () => (
    <BrowserRouter>
        {/* <App /> */}
        {Routes}
    </BrowserRouter>
);
export default Root;

// class Root extends Component {
//     render() {
//       return (
//         <BrowserRouter>
//           {Routes}
//           <App />
//         </BrowserRouter>
//       );
//     }
// }
// export default Root;

// const Root = () => (
//     hydrate(
//         <HeadProvider>
//             <BrowserRouter>
//                 <App />
//             </BrowserRouter>
//         </HeadProvider>
//     )
// );




