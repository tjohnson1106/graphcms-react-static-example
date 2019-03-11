import React from "react";
import { withRouteData } from "react-static";

export default withRouteData(({ authors }) => (
  <div className="">
    <h1 className="about-header">About the Authors</h1>
    {authors.map((author) => (
      <div className="about-author" key={author.id}>
        <div className="about-header">
          <img
            className="about-avatar"
            alt={author.name}
            src={`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${
              author.avatar.handle
            }`}
          />
          <h2>By {author.name}</h2>
        </div>

        <p>{author.bibliography}</p>
      </div>
    ))}
  </div>
));
