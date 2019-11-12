import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { create, ReactTestRenderer } from "react-test-renderer";

import {TextInput, Props} from "./TextInput";

let onChangeMock = jest.fn();
let wrapper: ShallowWrapper<Props>;
let snapshot: ReactTestRenderer;

beforeEach(() => {
  onChangeMock = jest.fn();
  const component = (
    <TextInput 
      name="test"
      onChange={onChangeMock} />
  );

  wrapper = shallow(component);
  snapshot = create(component);
});

describe("<TextInput />", () => {
  test("it matches the snapshot", () => {
    expect(snapshot.toJSON()).toMatchSnapshot();
  });

  it("it should trigger onChange function appropriately", () => {
      const event = {
        target: { value: "example value" }
      };
      wrapper.find("input").simulate("change", event);

      expect(onChangeMock.mock.calls.length).toBe(1);
    });    
});
