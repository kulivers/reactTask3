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
var Home3 = /** @class */ (function (_super) {
    __extends(Home3, _super);
    function Home3(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            arr2: [
                'O', null, 'X',
                'X', 'X', 'O',
                'O', null, null,
            ],
            arr: [
                ["Елена", "менеджер", 25],
                ["миша", "инженер", 5],
                ["димас", "водитель", 17]
            ]
        };
        return _this;
    }
    Home3.prototype.render = function () {
        var content2 = ["cntnt", "sec", "third"];
        var content = [];
        return (React.createElement("div", null,
            React.createElement("ul", null, this.state.arr.map(function (subArr) { return (React.createElement("li", null, subArr.map(function (el) { return React.createElement("span", null,
                el,
                " "); }))); }))));
    };
    return Home3;
}(react_1.Component));
exports.default = Home3;
//# sourceMappingURL=Home3.js.map