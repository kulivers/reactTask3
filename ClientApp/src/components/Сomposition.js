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
function comp(x, y) {
    if (x === void 0) { x = 3; }
    if (y === void 0) { y = 4; }
    return x * y;
}
var Home6a = /** @class */ (function (_super) {
    __extends(Home6a, _super);
    function Home6a(props) {
        var _this = _super.call(this, props) || this;
        _this.handleIntChange = function (event) {
            var _a, _b;
            //console.log("parseInt event.target.value", parseInt(event.target.value))
            if (isNaN(parseInt(event.target.value))) {
                _this.setState((_a = {}, _a[event.target.name] = 0, _a), function () {
                    this.setState({
                        messages: [
                            "func() = " + comp().toString(10),
                            "func(x) = " + comp(this.state.x).toString(10),
                            "func(y) = " + comp(undefined, this.state.y).toString(10),
                            "func(x,y) = " + comp(this.state.x, this.state.y).toString(10),
                        ]
                    });
                });
            }
            else {
                _this.setState((_b = {}, _b[event.target.name] = parseInt(event.target.value), _b), function () {
                    this.setState({
                        messages: [
                            "func() = " + comp().toString(10),
                            "func(x) = " + comp(this.state.x).toString(10),
                            "func(y) = " + comp(undefined, this.state.y).toString(10),
                            "func(x,y) = " + comp(this.state.x, this.state.y).toString(10),
                        ]
                    });
                });
            }
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
            x: 3,
            y: 4,
            messages: []
        };
        return _this;
    }
    Home6a.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("form", { onSubmit: this.handleSubmit },
                React.createElement("h2", null, " x:"),
                React.createElement("input", { type: 'text', name: 'x', pattern: "[0-9]+", value: this.state.x, defaultValue: "", onChange: this.handleIntChange }),
                React.createElement("br", null),
                React.createElement("h2", null, " y:"),
                React.createElement("input", { type: 'text', name: 'y', pattern: "[0-9]*", value: this.state.y, defaultValue: "", onChange: this.handleIntChange }),
                React.createElement("br", null),
                React.createElement("ul", null, this.state.messages.map(function (x) { return (React.createElement("li", null, x)); })))));
    };
    return Home6a;
}(react_1.Component));
exports.default = Home6a;
//# sourceMappingURL=Сomposition.js.map