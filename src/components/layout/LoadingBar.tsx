import * as React from "react";
import { ProgressBar } from "react-bootstrap";

interface LoadingBarProps {
  loading: boolean,
  type?: BarType,
  striped?: boolean,
  animated?: boolean
}
export enum BarType {
  Success = "success",
  Warning = "warning",
  Danger = "danger",
  Info = "info"
}

export const LoadingBar: React.SFC<LoadingBarProps> = ({ type, striped, animated, loading }) => (
  <React.Fragment>
    {loading && (
      <React.Fragment>
        <h4>Loading...</h4>
        <ProgressBar variant={type} striped={striped} animated={animated} now={100} />
      </React.Fragment>
    )}
  </React.Fragment>
);
