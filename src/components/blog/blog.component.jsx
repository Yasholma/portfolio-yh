import React from "react";
import Post from "./../post/post.component";

import "./blog.styles.scss";

import posts from "./blog-post-data";

const Blog = () => {
  return (
    <section className="blog">
      <div className="content-box-md">
        <div className="blog__heading">
          <h5>Blog</h5>
          <h2>
            Articles On <strong>Software Dev.</strong>
          </h2>
        </div>
        <div className="blog__posts">
          {posts.map(({ id, ...otherProps }) => (
            <Post key={id} {...otherProps} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
