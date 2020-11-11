"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("bootstrap/dist/css/bootstrap.css");
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
var ReactDOM = require("react-dom");
var App_1 = require("./App");
// Create browser history to use in the Redux store
// Get the application-wide store instance, prepopulating with state from the server where available.
ReactDOM.render(React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement(App_1.default, null)), document.getElementById('root'));
//if (module.hot) {
//    module.hot.accept()
//}
//# sourceMappingURL=index.js.map