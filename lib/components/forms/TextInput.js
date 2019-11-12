"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.TextInput = function (_a) {
    var name = _a.name, label = _a.label, onChange = _a.onChange, onKeyPress = _a.onKeyPress, placeholder = _a.placeholder, value = _a.value, error = _a.error;
    var wrapperClass = "form-group";
    if (error && error.length > 0) {
        wrapperClass += " has-error";
    }
    var editor = (React.createElement("input", { type: "text", name: name, className: "form-control", placeholder: placeholder, value: value || "", onChange: onChange, onKeyPress: onKeyPress }));
    if (!label) {
        return editor;
    }
    return (React.createElement("div", { className: wrapperClass },
        React.createElement("label", { htmlFor: name }, label),
        React.createElement("div", { className: "field" },
            editor,
            error && React.createElement("small", { className: "text-danger" }, error))));
};
