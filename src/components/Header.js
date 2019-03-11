import React from "react";
import { withSiteData } from "react-static";
import { Link } from "@reach/router";

export default withSiteData(() => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/blog">Blog</Link>
  </nav>
));
