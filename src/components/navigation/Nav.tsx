
import * as React from "react";
import { Nav as NavImpl } from "react-bootstrap";

export interface NavProps {
  className?: string,
  type?: NavType,
  fill?: boolean,
  justify?: boolean;
  activeKey?: unknown;
  defaultActiveKey?: unknown
}
export enum NavType {
  Tabs = "tabs",
  Pills = "pills"
}

interface ItemProps {
  role?: string,
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
const item: React.FC<ItemProps> = ({children, ...rest}) => {
  return (
    <NavImpl.Item {...rest} >
      {children}
    </NavImpl.Item>
  );
};

interface LinkProps {
  eventKey?: unknown;
  href?: string;
  disabled?: boolean;
  active?: boolean;
}
const link: React.FC<LinkProps> = ({children, ...rest}) => {
  return (
    <NavImpl.Item {...rest} >
      {children}
    </NavImpl.Item>
  );
};

export class Nav extends React.Component<NavProps> {
  static Item = item;
  static Link = link;

  public render() {
    const {children, ...rest} = this.props;
    return (
      <NavImpl {...rest}>
        {children}
      </NavImpl>
    );
  }
}
