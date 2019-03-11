import React from "react";
import { withSiteData } from "react-static";
import { Link } from "@reach/router";

export default withSiteData(({ title }) => (
  <header className="header">
    <h1 className="header-h1">{title}</h1>
    <nav className="header-name">
      <Link className="header-link" to="/">
        Home
      </Link>
      <Link className="header-link" to="/about">
        About
      </Link>
    </nav>
  </header>
));
