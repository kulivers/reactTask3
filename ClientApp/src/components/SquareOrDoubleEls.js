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
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home(props) {
        var _this = _super.call(this, props) || this;
        _this.handleTextChange = function (event) {
            var _a;
            _this.setState((_a = {}, _a[event.target.name] = event.target.value, _a));
        };
        _this.handleIntChange = function (event) {
            var _a;
            //value ->int
            _this.setState((_a = {}, _a[event.target.name] = parseInt(event.target.value), _a));
        };
        _this.handleBoolChange = function (event) {
            var _a;
            _this.setState((_a = {}, _a[event.target.name] = event.target.value !== "false", _a));
        };
        _this.handleSubmit = function (event) {
            if (_this.state.isSquare == true) {
                _this.callSquare(_this.state.start, _this.state.end, event);
            }
            else {
                _this.callDouble(_this.state.start, _this.state.end, event);
            }
        };
        _this.state = { start: 0, end: 0, isSquare: false, messages: [] };
        return _this;
    }
    Home.prototype.callSquare = function (start, end, event) {
        if (this.state.start > this.state.end) {
            alert('start > end');
        }
        else {
            var that = this;
            fetch('api/ArrayCalculator/Square', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // We convert the React state to JSON and send it as the POST body
                body: JSON.stringify(this.state)
            }).then(function (response) {
                console.log(response);
                response.json().then(function (json) {
                    that.setState({ messages: !response.ok ? ["status: " + response.statusText] : json });
                });
            });
            event.preventDefault();
        }
    };
    Home.prototype.callDouble = function (start, end, event) {
        if (this.state.start > this.state.end) {
            alert('start > end');
        }
        else {
            var that = this;
            fetch('api/ArrayCalculator/Double', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // We convert the React state to JSON and send it as the POST body
                body: JSON.stringify(this.state)
            }).then(function (response) {
                console.log(response);
                response.json().then(function (json) {
                    that.setState({ messages: !response.ok ? ["status: " + response.statusText] : json });
                });
            });
            event.preventDefault();
        }
    };
    Home.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("form", { onSubmit: this.handleSubmit },
                React.createElement("h2", null,
                    " \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u0430\u0447\u0430\u043B\u043E \u043E\u0442\u0440\u0435\u0437\u043A\u0430:",
                    React.createElement("br", null)),
                React.createElement("input", { type: 'text', name: 'start', value: this.state.name, onChange: this.handleIntChange }),
                React.createElement("br", null),
                React.createElement("h2", null,
                    " \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043E\u043D\u0435\u0446 \u043E\u0442\u0440\u0435\u0437\u043A\u0430:",
                    React.createElement("br", null)),
                React.createElement("input", { type: 'text', name: 'end', value: this.state.name, onChange: this.handleIntChange }),
                React.createElement("br", null),
                React.createElement("h3", null,
                    " \u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0432\u0438\u0434 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F:",
                    React.createElement("br", null)),
                React.createElement("input", { type: "RADIO", checked: this.state.isSquare, name: "isSquare", value: "true", onChange: this.handleBoolChange }),
                " \u0412\u043E\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0432 \u043A\u0432\u0430\u0434\u0440\u0430\u0442 ",
                React.createElement("br", null),
                React.createElement("input", { type: "RADIO", checked: !this.state.isSquare, name: "isSquare", value: "false", onChange: this.handleBoolChange }),
                " \u0423\u0434\u0432\u0430\u0438\u0432\u0430\u043D\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
                React.createElement("div", null,
                    React.createElement("p", null,
                        React.createElement("input", { type: "submit", value: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C" })))),
            React.createElement("div", null,
                React.createElement("ul", null, this.state.messages.map(function (x) { return (React.createElement("li", null, x)); })))));
    };
    return Home;
}(React.Component));
exports.default = Home;
//# sourceMappingURL=Home.js.map