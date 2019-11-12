"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.SubmitButton = function (_a) {
    var value = _a.value, disabled = _a.disabled;
    return (React.createElement("input", { className: "btn btn-success", type: "submit", value: value, disabled: disabled }));
};
