"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.DropDownList = function (_a) {
    var name = _a.name, label = _a.label, onChange = _a.onChange, options = _a.options, defaultEmpty = _a.defaultEmpty, value = _a.value, error = _a.error;
    var wrapperClass = "form-group";
    if (error && error.length > 0) {
        wrapperClass += " has-error";
    }
    return (React.createElement("div", { className: wrapperClass },
        React.createElement("label", { htmlFor: name }, label),
        React.createElement("div", { className: "field" },
            React.createElement("select", { name: name, className: "form-control", value: value, onChange: onChange },
                defaultEmpty && (React.createElement("option", { value: "" })),
                options && options.map(function (opt) {
                    return React.createElement("option", { key: opt.value, value: opt.value }, opt.text);
                })),
            error && React.createElement("small", { className: "text-danger" }, error))));
};
