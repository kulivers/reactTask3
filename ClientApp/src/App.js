"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var SquareOrDoubleEls_1 = require("./components/SquareOrDoubleEls");
var SearchElement_1 = require("./components/SearchElement");
var Employers_1 = require("./components/Employers");
var Factorial_1 = require("./components/Factorial");
var Music_1 = require("./components/Music");
var Comp_1 = require("./components/Comp");
var Individual_1 = require("./components/Individual");
var react_bootstrap_1 = require("react-bootstrap");
var react_router_dom_2 = require("react-router-dom");
require("./custom.css");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(react_router_dom_2.HashRouter, null,
            React.createElement("div", null,
                React.createElement(react_bootstrap_1.Navbar, { bg: "primary", variant: "dark" },
                    React.createElement(react_bootstrap_1.Nav, { className: "mr-auto" },
                        React.createElement(react_bootstrap_1.Nav.Link, { href: "#home" }, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 1"),
                        React.createElement(react_bootstrap_1.Nav.Link, { href: "#home2" }, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 2"),
                        React.createElement(react_bootstrap_1.Nav.Link, { href: "#home3" }, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 3"),
                        React.createElement(react_bootstrap_1.Nav.Link, { href: "#home4" }, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 4"),
                        React.createElement(react_bootstrap_1.Nav.Link, { href: "#home5" }, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 5"),
                        React.createElement(react_bootstrap_1.Nav.Link, { href: "#home6a" }, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 6a"),
                        React.createElement(react_bootstrap_1.Nav.Link, { href: "#home6b" }, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 6b"))),
                React.createElement("div", { className: "content" },
                    React.createElement(react_router_dom_1.Route, { path: "/home", component: SquareOrDoubleEls_1.default }),
                    React.createElement(react_router_dom_1.Route, { path: "/home2", component: SearchElement_1.default }),
                    React.createElement(react_router_dom_1.Route, { path: "/home3", component: Employers_1.default }),
                    React.createElement(react_router_dom_1.Route, { path: "/home4", component: Factorial_1.default }),
                    React.createElement(react_router_dom_1.Route, { path: "/home5", component: Music_1.default }),
                    React.createElement(react_router_dom_1.Route, { path: "/home6a", component: Comp_1.default }),
                    React.createElement(react_router_dom_1.Route, { path: "/home6b", component: Individual_1.default })))));
    };
    return App;
}(react_1.Component));
exports.default = App;
//# sourceMappingURL=App.js.map