"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var react_test_renderer_1 = require("react-test-renderer");
var TextInput_1 = require("./TextInput");
var onChangeMock = jest.fn();
var wrapper;
var snapshot;
beforeEach(function () {
    onChangeMock = jest.fn();
    var component = (React.createElement(TextInput_1.TextInput, { name: "test", onChange: onChangeMock }));
    wrapper = enzyme_1.shallow(component);
    snapshot = react_test_renderer_1.create(component);
});
describe("<TextInput />", function () {
    test("it matches the snapshot", function () {
        expect(snapshot.toJSON()).toMatchSnapshot();
    });
    it("it should trigger onChange function appropriately", function () {
        var event = {
            target: { value: "example value" }
        };
        wrapper.find("input").simulate("change", event);
        expect(onChangeMock.mock.calls.length).toBe(1);
    });
});
