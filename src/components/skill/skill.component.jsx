import React from "react";

import SkillItem from "../skill-item/skill-item.component";
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

import "./skill.styles.scss";

const Skill = () => {
  return (
    <section className="skill">
      <div className="content-box-md">
        <div className="skill__heading">
          <h5>My Skills</h5>
          <h2>
            <strong>Skills</strong>
            <br /> Acquired
          </h2>
        </div>
        <div className="skill__skills">
          <SkillItem image={html5} status="50%" title="HTML5" />
          <SkillItem image={css3} status="50%" title="CSS3" />
          <SkillItem image={javascript} status="50%" title="JavaScript" />
          <SkillItem
            image={bootstrap}
            status="50%"
            title="Bootstrap CSS Framework"
          />
          <SkillItem image={sass} status="50%" title="SASS" />
          <SkillItem image={react} status="50%" title="React" />
          <SkillItem image={redux} status="50%" title="Redux" />
          <SkillItem image={node} status="50%" title="Node JS" />
          <SkillItem image={laravel} status="50%" title="Laravel" />
          <SkillItem image={git} status="50%" title="Git" />
          <SkillItem image={github} status="50%" title="Github" />
          <SkillItem image={postgres} status="50%" title="Postgres" />
          <SkillItem image={sql} status="50%" title="SQL" />
          <SkillItem image={spring} status="50%" title="Spring Boot" />
          <SkillItem image={java} status="50%" title="Java" />
          <SkillItem image={mongodb} status="50%" title="MongoDB" />
          <SkillItem image={jquery} status="50%" title="jQuery" />
          <SkillItem image={firebase} status="50%" title="Firebase" />
        </div>
      </div>
    </section>
  );
};

export default Skill;
