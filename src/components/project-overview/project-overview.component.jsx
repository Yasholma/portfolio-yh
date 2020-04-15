import React from "react";

import projects from "./projects";
import ProjectItem from "./../project-item/project-item.component";

import "./project-overview.styles.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const ProjectOverview = () => {
  return (
    <section className="project-overview">
      <div className="content-box-sm">
        <div className="project-overview__heading">
          <h5>Works</h5>
          <h2>
            A <strong>Preview</strong> Of Some Of My Works
          </h2>
        </div>

        <div className="project-overview__project-items">
          {projects.slice(0, 4).map(({ id, ...otherProps }) => (
            <ProjectItem key={id} id={id} {...otherProps} />
          ))}
        </div>

        <div className="project-overview__project-footer">
          <Link to="/projects" className="btn btn-general">
            Show Projects <FontAwesomeIcon icon={faArrowCircleRight} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
