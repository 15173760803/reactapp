import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/routerfu1';

// import axios from "axios"




import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
