import * as React from "react";
import * as Bootstrap from "react-bootstrap";

const { Button: ButtonImpl } = Bootstrap;

interface Props {
  type?: ButtonType,
  size?: ButtonSize,
  onClick?: () => void,
  disabled?: boolean,
  children: React.ReactNode
}
export enum ButtonType {
  Primary = "primary",
  Success = "success",
  Warning = "warning",
  Danger = "danger",
  Info = "info",
  Link = "link",

  Secondary = "secondary",
  Light = "light",
  Dark = "dark"
}

export enum ButtonSize {
  Large = "lg",
  Small = "sm"
}

export const Button: React.FC<Props> = ({type, size, onClick, disabled, children}) => {
  return (
    <ButtonImpl variant={type} size={size} onClick={onClick} disabled={disabled}>{children}</ButtonImpl>
  );
};
