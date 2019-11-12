"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.TextArea = function (_a) {
    var name = _a.name, autoFocus = _a.autoFocus, onChange = _a.onChange, onKeyPress = _a.onKeyPress, onFocus = _a.onFocus, label = _a.label, placeholder = _a.placeholder, rows = _a.rows, value = _a.value, error = _a.error;
    var wrapperClass = "form-group";
    if (error && error.length > 0) {
        wrapperClass += " has-error";
    }
    var editor = (React.createElement("textarea", { autoFocus: autoFocus, name: name, className: "form-control", placeholder: placeholder, rows: rows || 3, value: value || "", onChange: onChange, onKeyPress: onKeyPress, onFocus: onFocus }));
    if (!label) {
        return editor;
    }
    return (React.createElement("div", { className: wrapperClass },
        React.createElement("label", { htmlFor: name }, label),
        editor,
        error && React.createElement("small", { className: "text-danger" }, error)));
};
