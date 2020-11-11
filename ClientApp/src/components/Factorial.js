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
var react_1 = require("react");
function fac(n) {
    if (n == 0)
        return 1;
    if (n >= 1) {
        var pr = 1;
        for (; n >= 1; n--) {
            pr = n * pr;
        }
        return pr;
    }
    if (n < 0)
        throw new Error("Cant get fuctorial <0");
}
function CheckInputsCorrect(m, n) {
    //let isnum = /^[0-9]*$/.test(start);
    if (m > n) {
        alert('error, m > n');
        return false;
    }
    if (m == "") {
        alert('m is empty');
        return false;
    }
    if (n == "") {
        alert('n is empty');
        return false;
    }
    //if (!isnum) { alert('start input is not correct'); return false; }
    //if (!isnum2) { alert('end input is not correct'); return false; }
    return true;
}
var Home4 = /** @class */ (function (_super) {
    __extends(Home4, _super);
    function Home4(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (event) {
            var _a;
            _this.setState((_a = {}, _a[event.target.name] = event.target.value, _a));
        };
        _this.handleIntChange = function (event) {
            var _a;
            //value ->int
            _this.setState((_a = {}, _a[event.target.name] = parseInt(event.target.value), _a));
        };
        _this.handleSubmit = function (event) {
            if (CheckInputsCorrect(_this.state.m, _this.state.n)) {
                var c = fac(_this.state.n) / (fac(_this.state.m) * fac(_this.state.n - _this.state.m));
                //this.state({ result: c })
                _this.setState({ result: fac(_this.state.n) / (fac(_this.state.m) * fac(_this.state.n - _this.state.m)) });
                console.log("c: ", c);
                console.log(_this.state);
            }
            event.preventDefault();
        };
        _this.state = {
            m: 3,
            n: 5,
            result: 0
        };
        return _this;
    }
    Home4.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", null, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 4. \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u043A\u0440\u0438\u043F\u0442 \u043F\u043E \u0432\u044B\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044E: C \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0444\u0443\u043D\u043A\u0446\u0438\u0438."),
            React.createElement("form", { onSubmit: this.handleSubmit },
                React.createElement("h2", null, " n:"),
                React.createElement("input", { type: 'text', name: 'n', pattern: "[0-9]*", value: this.state.n, onChange: this.handleIntChange }),
                React.createElement("br", null),
                React.createElement("h2", null, " m:"),
                React.createElement("input", { type: 'text', name: 'm', pattern: "[0-9]*", value: this.state.m, onChange: this.handleIntChange }),
                React.createElement("br", null),
                React.createElement("div", null,
                    React.createElement("p", null,
                        React.createElement("input", { type: "submit", value: "\u0420\u0435\u0448\u0438\u0442\u044C" })))),
            React.createElement("div", null,
                " function result is: ",
                this.state.result)));
    };
    return Home4;
}(react_1.Component));
exports.default = Home4;
//# sourceMappingURL=Factorial.js.map