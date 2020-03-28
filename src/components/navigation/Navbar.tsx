
import * as React from "react";
import { Navbar as NavbarImpl } from "react-bootstrap";

interface NavbarProps {
  type?: NavbarType,
  fixed?: NavbarLocation,
  sticky?: NavbarLocation,
  className?: string
  collapseOnSelect?: boolean,
  expanded?: boolean
}
export enum NavbarType {
  Light = "light",
  Dark = "dark"
}
export enum NavbarLocation {
  Top = "top",
  Bottom = "bottom"
}

interface BrandProps {
  href?: string
}
const brand: React.FC<BrandProps> = ({children, ...rest}) => {
  return (
    <NavbarImpl.Brand {...rest}>
      {children}
    </NavbarImpl.Brand>
  );
};

interface ToggleProps {
  label?: string;
}
const toggle: React.FC<ToggleProps> = ({children, ...rest}) => {
  return (
    <NavbarImpl.Toggle {...rest}>
      {children}
    </NavbarImpl.Toggle>
  );
};
const collapse: React.FC = ({children}) => {
  return (
    <NavbarImpl.Collapse>
      {children}
    </NavbarImpl.Collapse>
  );
};

export class Navbar extends React.Component<NavbarProps> {
  static Brand = brand;
  static Toggle = toggle;
  static Collapse = collapse;
  
  public render() {
    const {children, type, ...rest} = this.props;
    return (
      <NavbarImpl variant={type} {...rest}>
        {children}
      </NavbarImpl>
    );
  }
}