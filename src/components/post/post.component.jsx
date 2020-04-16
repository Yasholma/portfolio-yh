import React from "react";
import { Link } from "react-router-dom";

import "./post.styles.scss";
import author1 from "../../assets/img/blog/author-1.webp";
import author2 from "../../assets/img/blog/author-2.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const Post = ({ author, title, body, timestamp, likes, dislikes }) => {
  return (
    <div className="blog__post">
      <div className="blog__post-heading">
        <div className="blog__post-heading-author">
          <img
            src={`${author === "author1" ? author1 : author2}`}
            alt="Author"
          />
        </div>
        <h4 className="blog__post-heading-title">
          <Link to="">{title}</Link>
          <time dateTime={timestamp}>{timestamp}</time>
        </h4>
      </div>

      <div className="blog__post-content">
        <p>{body}</p>
      </div>
      <div className="blog__post-footer">
        <div className="votes">
          <FontAwesomeIcon icon={faThumbsUp} />
          <span>{likes}</span>
          <FontAwesomeIcon icon={faThumbsDown} />
          <span>{dislikes}</span>
        </div>
        <div className="read">
          <Link to="" className="btn btn-read">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
