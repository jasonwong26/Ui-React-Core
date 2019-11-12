"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// Layout object for wrapping div for all REACT elements
var Root = function (_a) {
    var children = _a.children;
    return React.createElement("div", null, children);
};
exports.default = Root;
