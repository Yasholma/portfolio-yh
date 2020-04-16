import React from "react";

import projects from "./projects";
import ProjectItem from "./../project-item/project-item.component";

import "./project-overview.styles.scss";
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
          {projects.map(({ id, ...otherProps }) => (
            <ProjectItem key={id} id={id} {...otherProps} />
          ))}
        </div>

        <div className="project-overview__project-footer">
          <a
            href="https://github.com/Yasholma"
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-general"
          >
            Github Profile <FontAwesomeIcon icon={faArrowCircleRight} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
