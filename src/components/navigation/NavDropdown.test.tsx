import * as React from "react";
import { create, ReactTestRenderer } from "react-test-renderer";

import {NavDropdown} from "./NavDropdown";

let snapshot: ReactTestRenderer;

describe("<Navbar />", () => {
  test("it matches the snapshot", () => {
    const component = (
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    );
  
    snapshot = create(component);

    expect(snapshot.toJSON()).toMatchSnapshot();
  });
});
