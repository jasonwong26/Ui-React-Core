import * as React from "react";
import { ProgressBar } from "react-bootstrap";

interface LoadingBarProps {
  loading: boolean
}

export const LoadingBar: React.SFC<LoadingBarProps> = ({ loading }) => (
  <React.Fragment>
    {loading && (
      <React.Fragment>
        <h4>Loading...</h4>
        <ProgressBar active now={100} />
      </React.Fragment>
    )}
  </React.Fragment>
);
