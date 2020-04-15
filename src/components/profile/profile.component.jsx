import React from "react";

import Skill from "../skill/skill.component";
import {
  html5,
  css3,
  javascript,
  bootstrap,
  sass,
  laravel,
  node,
  firebase,
  java,
  jquery,
  mongodb,
  react,
  redux,
  github,
  git,
  spring,
  postgres,
  sql,
} from "./skills.js";

import "./profile.styles.scss";

const Profile = () => {
  return (
    <section className="profile">
      <div className="content-box-md">
        <div className="profile__heading">
          <h5>My Profile</h5>
          <h2>
            <strong>Skills</strong>
            <br /> Acquired
          </h2>
        </div>
        <div className="profile__skills">
          <Skill image={html5} status="50%" title="HTML5" />
          <Skill image={css3} status="50%" title="CSS3" />
          <Skill image={javascript} status="50%" title="JavaScript" />
          <Skill
            image={bootstrap}
            status="50%"
            title="Bootstrap CSS Framework"
          />
          <Skill image={sass} status="50%" title="SASS" />
          <Skill image={react} status="50%" title="React" />
          <Skill image={redux} status="50%" title="Redux" />
          <Skill image={node} status="50%" title="Node JS" />
          <Skill image={laravel} status="50%" title="Laravel" />
          <Skill image={git} status="50%" title="Git" />
          <Skill image={github} status="50%" title="Github" />
          <Skill image={postgres} status="50%" title="Postgres" />
          <Skill image={sql} status="50%" title="SQL" />
          <Skill image={spring} status="50%" title="Spring Boot" />
          <Skill image={java} status="50%" title="Java" />
          <Skill image={mongodb} status="50%" title="MongoDB" />
          <Skill image={jquery} status="50%" title="jQuery" />
          <Skill image={firebase} status="50%" title="Firebase" />
        </div>
      </div>
    </section>
  );
};

export default Profile;
