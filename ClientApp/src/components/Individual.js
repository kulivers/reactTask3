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
function GetFunc(a, b, c, k) {
    var sum = 0;
    var val = 0;
    for (var i = 1; i <= k; i++) {
        val = (Math.pow((-1), (a * i - 1))) / fac(b * i + c);
        sum = sum + val;
    }
    //return sum;
    return a + k;
}
//this.state = { a: 3, b: 4, c: 5, k: 1, result: 0 };
function comp(x, y) {
    if (x === void 0) { x = 3; }
    if (y === void 0) { y = 4; }
    return x * y;
}
var Home6b = /** @class */ (function (_super) {
    __extends(Home6b, _super);
    function Home6b(props) {
        var _this = _super.call(this, props) || this;
        _this.handleIntChange = function (event) {
            var _a, _b;
            //console.log("parseInt event.target.value", parseInt(event.target.value))
            if (isNaN(parseInt(event.target.value))) {
                _this.setState((_a = {}, _a[event.target.name] = 0, _a), function () {
                    this.setState({
                        messages: [
                            "func() = " + GetFunc(this.state.a, this.state.b, this.state.c, this.state.k).toString(10)
                        ]
                    });
                });
            }
            else {
                _this.setState((_b = {}, _b[event.target.name] = parseInt(event.target.value), _b), function () {
                    this.setState({
                        messages: [
                            "func() = " + GetFunc(this.state.a, this.state.b, this.state.c, this.state.k).toString(10)
                        ]
                    });
                });
            }
            console.log(_this.state);
            event.preventDefault();
        };
        _this.handleSubmit = function (event) {
            //console.log("submited");
            //if (this.state.isSquare == true) {
            //    this.callSquare(this.state.start, this.state.end, event);
            //}
            //else {
            //    this.callDouble(this.state.start, this.state.end, event);
            //}
            event.preventDefault();
        };
        _this.state = {
            a: 3, b: 4, c: 5, k: 1, messages: []
        };
        return _this;
    }
    Home6b.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", null, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E \u0434\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u0447\u0438 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u043C \u0437\u0430\u0434\u0430\u043D\u0438\u0435\u043C, \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u0444\u043E\u0440\u043C\u0443."),
            React.createElement("form", { onSubmit: this.handleSubmit },
                React.createElement("h2", null, " k:"),
                React.createElement("input", { type: 'text', name: 'k', pattern: "[0-9]+", value: this.state.k, defaultValue: "", onChange: this.handleIntChange }),
                React.createElement("br", null),
                React.createElement("ul", null, this.state.messages.map(function (x) { return (React.createElement("li", null, x)); })))));
    };
    return Home6b;
}(react_1.Component));
exports.default = Home6b;
//# sourceMappingURL=Individual.js.map