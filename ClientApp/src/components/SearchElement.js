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
function CheckInputsCorrect(firstEl, secondEl, thirdEl, searchEl) {
    if (firstEl == "") {
        alert('firstEl is empty');
        return false;
    }
    if (secondEl == "") {
        alert('secondEl is empty');
        return false;
    }
    if (thirdEl == "") {
        alert('thirdEl is empty');
        return false;
    }
    if (searchEl == "") {
        alert('searchEl is empty');
        return false;
    }
    return true;
}
var Home2 = /** @class */ (function (_super) {
    __extends(Home2, _super);
    function Home2(props) {
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
        _this.handleSubmit = function (event) {
            if (CheckInputsCorrect(_this.state.firstEl, _this.state.secondEl, _this.state.thirdEl, _this.state.searchEl)) {
                _this.callSearch(_this.state.firstEl, _this.state.secondE5l, _this.state.thirdEl, _this.state.searchEl, event);
            }
        };
        _this.state = { firstEl: 0, secondEl: 0, thirdEl: 0, searchEl: 0, messages: [] };
        return _this;
    }
    Home2.prototype.callSearch = function (fst, sec, thd, sch, event) {
        var that = this;
        fetch('api/FindElement/Search', {
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
    };
    Home2.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("form", { onSubmit: this.handleSubmit },
                React.createElement("h2", null,
                    " \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043C\u0430\u0441\u0441\u0438\u0432\u0430:",
                    React.createElement("br", null)),
                React.createElement("input", { type: 'text', name: 'firstEl', pattern: "\\d+", value: this.state.name, onChange: this.handleIntChange }),
                React.createElement("br", null),
                React.createElement("h2", null,
                    " \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0442\u043E\u0440\u043E\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043C\u0430\u0441\u0441\u0438\u0432\u0430:",
                    React.createElement("br", null)),
                React.createElement("input", { type: 'text', name: 'secondEl', pattern: "^-?[0-9]\\d*\\.?\\d*$", value: this.state.name, onChange: this.handleIntChange }),
                React.createElement("br", null),
                React.createElement("h2", null,
                    " \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0440\u0435\u0442\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043C\u0430\u0441\u0441\u0438\u0432\u0430:",
                    React.createElement("br", null)),
                React.createElement("input", { type: 'text', name: 'thirdEl', pattern: "[0-9]*", value: this.state.name, onChange: this.handleIntChange }),
                React.createElement("br", null),
                React.createElement("h2", null,
                    " \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u0441\u043A\u043E\u043C\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043C\u0430\u0441\u0441\u0438\u0432\u0430:",
                    React.createElement("br", null)),
                React.createElement("input", { type: 'text', name: 'searchEl', pattern: "[0-9]*", value: this.state.name, onChange: this.handleIntChange }),
                React.createElement("br", null),
                React.createElement("div", null,
                    React.createElement("p", null,
                        React.createElement("input", { type: "submit", value: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C" })))),
            React.createElement("div", null,
                React.createElement("ul", null, this.state.messages.map(function (x) { return (React.createElement("li", null, x)); })))));
    };
    return Home2;
}(React.Component));
exports.default = Home2;
//# sourceMappingURL=SearchElement.js.map