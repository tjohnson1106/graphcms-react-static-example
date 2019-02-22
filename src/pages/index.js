import React from "react";
import { withRouteData } from "react-static";

export default withRouteData(
  ({ posts }) =>
    console.log({ posts }) || (
      <div style={{ textAlign: "center" }}>
        <h1>Welcome to React-Static</h1>
      </div>
    )
);
