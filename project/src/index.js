import ReactDOM from 'react-dom';
import Root from './client/Root';
import React from 'react';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';
window.Kakao.init("bf950b78af3f2e7fbe3ae53ddd9733a5");

ReactDOM.render(<Root />, document.getElementById('root'));
// registerServiceWorker();
