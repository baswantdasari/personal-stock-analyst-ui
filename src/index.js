import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

const title = 'React with webpack and Babel and hot swap';

ReactDom.render(
    <App title={title}/>,
    document.getElementById('app')
    );
    
module.hot.accept();