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
var Composition = /** @class */ (function (_super) {
    __extends(Composition, _super);
    function Composition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Composition.prototype.render = function () {
        var x = 5;
        var y = 6;
        return (React.createElement("div", null,
            React.createElement("div", null, comp()),
            React.createElement("div", null, comp(x, y))));
    };
    return Composition;
}(react_1.Component));
exports.default = Composition;
//# sourceMappingURL=Сomposition.js.map