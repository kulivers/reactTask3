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
var Home4 = /** @class */ (function (_super) {
    __extends(Home4, _super);
    function Home4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home4.prototype.render = function () {
        var n = 5;
        var m = 3;
        return (React.createElement("div", null, fac(n) / (fac(m) * fac(n - m))));
    };
    return Home4;
}(react_1.Component));
exports.default = Home4;
//# sourceMappingURL=Factorial.js.map