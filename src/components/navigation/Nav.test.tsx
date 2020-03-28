import * as React from "react";
import { create, ReactTestRenderer } from "react-test-renderer";

import {Nav} from "./Nav";

let snapshot: ReactTestRenderer;

describe("<Nav />", () => {
  test("it matches the snapshot", () => {
    const component = (
      <Nav activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  
    snapshot = create(component);

    expect(snapshot.toJSON()).toMatchSnapshot();
  });
});
