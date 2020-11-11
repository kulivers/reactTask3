import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter} from "react-router-dom";

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

// Create browser history to use in the Redux store

// Get the application-wide store instance, prepopulating with state from the server where available.
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root'));


//if (module.hot) {
//    module.hot.accept()
//}