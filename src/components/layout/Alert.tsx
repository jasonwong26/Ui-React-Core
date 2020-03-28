import * as React from "react";
import * as Bootstrap from "react-bootstrap";

const { Alert: AlertImpl } = Bootstrap;

interface Props {
  type?: AlertType,
  children: React.ReactNode
}
export enum AlertType {
  Success = "success",
  Warning = "warning",
  Danger = "danger",
  Info = "info",

  Primary = "primary",
  Secondary = "secondary",
  Light = "light",
  Dark = "dark"
}
export const Alert: React.FC<Props> = ({type, children}) => {
  return (
    <AlertImpl variant={type}>{children}</AlertImpl>
  );
};
