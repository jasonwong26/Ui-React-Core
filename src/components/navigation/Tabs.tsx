
import * as React from "react";
import { NavType } from "./Nav";
import { Tabs as TabsImpl, Tab as TabImpl } from "react-bootstrap";

export type SelectCallback = (
  eventKey: string,
  e: React.SyntheticEvent<unknown>
) => void;

export interface TabsProps {
  id: string;
  type?: NavType,
  activeKey?: unknown;
  defaultActiveKey?: unknown;
  onSelect?: SelectCallback;
}

interface ItemProps {
  title: React.ReactNode;
  eventKey?: unknown;
  disabled?: boolean;
}
const item: React.FC<ItemProps> = ({children, ...rest}) => {
  return (
    <TabImpl {...rest} >
      {children}
    </TabImpl>
  );
};

export class Tabs extends React.Component<TabsProps> {
  static Item = item;

  public render() {
    const {children, type, ...rest} = this.props;
    return (
      <TabsImpl variant={type} {...rest}>
        {children}
      </TabsImpl>
    );
  }
}
