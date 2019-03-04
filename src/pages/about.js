import React from "react";
import { withRouteData } from "react-static";

export default withRouteData(
  ({ authors }) =>
    console.log({ authors }) || (
      <div>
        <p>React Static is a progressive static site generator for React.</p>
      </div>
    )
);
