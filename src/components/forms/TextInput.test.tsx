import * as React from "react";
import * as ReactDOM from "react-dom";
import {TextInput} from "./TextInput";

/*
Props:
  name: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onKeyPress?: (event: React.KeyboardEvent) => void,
  label?: string,
  placeholder?: string,
  value?: string,
  error?: string
*/
it("renders with minimum properties", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TextInput 
    name="test"
    onChange={() => false}    
    />, div);
  ReactDOM.unmountComponentAtNode(div);
});
