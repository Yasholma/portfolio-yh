import React from "react";
import { Link } from "react-router-dom";

import "./project-item.styles.scss";

const ProjectItem = ({ id, title, image, url, description }) => {
  return (
    <div className="project__item">
      <Link to={url} title={title}>
        <img
          src={`https://picsum.photos/id/${id * 10}/300/250`}
          alt={title}
          className="project__item__image"
        />
        <div className="project__item__overlay">
          <h3>{title}</h3>
          <span></span>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectItem;
