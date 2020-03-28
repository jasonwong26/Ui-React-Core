import * as React from "react";
import { Card } from "react-bootstrap";

interface Props {
  title?: React.ReactNode,
  children: React.ReactNode
}

export const Panel: React.FC<Props> = ({title, children}) => {
  return (
    <Card>
      {!!title && (<Card.Title>{title}</Card.Title>)}
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};
