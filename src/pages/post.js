import React from "react";
import { withRouteData } from "react-static";

export default withRouteData(({ post }) => <div>{JSON.stringify(post)}</div>);
