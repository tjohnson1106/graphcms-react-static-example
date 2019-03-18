import React from "react";
import { withRouteData } from "react-static";
import { Link } from "@reach/router";
import { Image } from "cloudinary-react";

export default withRouteData(({ posts }) => (
  <div className="container">
    {posts.map((post) => (
      <Link key={post.id} to={`/post/${post.id}`} className="card">
        <div
          style={{
            paddingRight: "1em"
          }}
        >
          <Image
            alt={post.title}
            className="card-img"
            publicId={`https://media.graphcms.com/resize=w:570,h:470,fit:crop/${
              post.image.handle
            }`}
            cloud_name="Bracket Factory"
          />

          <div>
            <h3 className="preview">{post.title}</h3>
            <p className="icon-text" style={{ display: "flex" }}>
              <img src="https://icon.now.sh/face/2386ea" />

              {post.author.name}
            </p>

            {post.tags.map((tag) => (
              <span className="card-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    ))}
  </div>
));
