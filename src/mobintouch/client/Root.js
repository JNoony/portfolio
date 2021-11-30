import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from '../shared/MobintouchPage';


// import { default as Routers } from '../shared/Routers';


const Root = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
export default Root;