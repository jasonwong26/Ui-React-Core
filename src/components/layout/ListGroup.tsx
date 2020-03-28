import * as React from "react";
import * as Bootstrap from "react-bootstrap";

const { ListGroup: ListGroupImpl } = Bootstrap;

interface GroupProps {
  children: React.ReactNode
}
interface GroupItemProps {
  children: React.ReactNode,
  type?: ListGroupItemType,
  onClick?: () => void
}
export enum ListGroupItemType {
  Success = "success",
  Warning = "warning",
  Danger = "danger",
  Info = "info",

  Primary = "primary",
  Secondary = "secondary",
  Light = "light",
  Dark = "dark"
}

export const ListGroup: React.FC<GroupProps> = ({children}) => {
  return (
    <ListGroupImpl>{children}</ListGroupImpl>
  );
};

export const ListGroupItem: React.FC<GroupItemProps> = ({children, type, onClick}) => {
  return (
    <ListGroupImpl.Item variant={type} onClick={onClick}>
      {children}
    </ListGroupImpl.Item>
  );
};
