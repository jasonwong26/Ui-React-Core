import * as React from "react";
import { create, ReactTestRenderer } from "react-test-renderer";

import {Navbar, NavbarType} from "./Navbar";
import {Nav} from "./Nav";
import {NavDropdown} from "./NavDropdown";

let snapshot: ReactTestRenderer;

describe("<Navbar />", () => {
  test("it matches the snapshot", () => {
    const component = (
      <Navbar type={NavbarType.Dark}>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  
    snapshot = create(component);

    expect(snapshot.toJSON()).toMatchSnapshot();
  });
});
