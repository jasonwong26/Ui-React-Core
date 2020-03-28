import * as React from "react";
import { create, ReactTestRenderer } from "react-test-renderer";

import {Tabs} from "./Tabs";
import {NavType} from "./Nav";

let snapshot: ReactTestRenderer;

describe("<Tabs />", () => {
  test("it matches the snapshot", () => {
    const component = (
      <Tabs id="uncontrolled-tab-example" defaultActiveKey="profile" type={NavType.Pills} >
        <Tabs.Item eventKey="home" title="Home" >
          Example Content 1
        </Tabs.Item>
        <Tabs.Item eventKey="profile" title="Profile">
          Example Content 2
        </Tabs.Item>
        <Tabs.Item eventKey="contact" title="Contact" disabled>
          Example Content 3
        </Tabs.Item>
      </Tabs>
    );
  
    snapshot = create(component);

    expect(snapshot.toJSON()).toMatchSnapshot();
  });
});
