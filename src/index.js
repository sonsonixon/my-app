import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'toastr/build/toastr.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-table/react-table.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
