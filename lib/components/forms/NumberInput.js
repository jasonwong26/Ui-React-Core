"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.NumberInput = function (_a) {
    var name = _a.name, label = _a.label, onChange = _a.onChange, placeholder = _a.placeholder, value = _a.value, min = _a.min, max = _a.max, increment = _a.increment, error = _a.error;
    var wrapperClass = "form-group";
    if (error && error.length > 0) {
        wrapperClass += " has-error";
    }
    return (React.createElement("div", { className: wrapperClass },
        React.createElement("label", { htmlFor: name }, label),
        React.createElement("div", { className: "field" },
            React.createElement("input", { type: "number", name: name, className: "form-control", placeholder: placeholder, value: value || "", min: min, max: max, step: increment, onChange: onChange }),
            error && React.createElement("small", { className: "text-danger" }, error))));
};
