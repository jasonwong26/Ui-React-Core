
import * as React from "react";
import { NavDropdown as NavDropdownImpl } from "react-bootstrap";

interface NavDropdownProps {
  id: string,
  title: React.ReactNode,
  disabled?: boolean,
  active?: boolean
}

interface ItemProps {
  href?: string;
  eventKey?: string;
  disabled?: boolean;
  active?: boolean;
}
const item: React.FC<ItemProps> = ({children, ...rest}) => {
  return (
    <NavDropdownImpl.Item {...rest}>
      {children}
    </NavDropdownImpl.Item>
  );
};

const divider: React.FC = () => {
  return (
    <NavDropdownImpl.Divider />
  );
};

export class NavDropdown extends React.Component<NavDropdownProps> {
  static Item = item;
  static Divider = divider;

  public render() {
    const {id, title, children, disabled, active} = this.props;
    return (
      <NavDropdownImpl id={id}
                        title={title}
                        disabled={disabled}
                        active={active}>
        {children}
      </NavDropdownImpl>
    );
  }
}