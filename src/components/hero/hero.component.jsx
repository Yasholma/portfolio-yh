import React from "react";
// get our fontawesome imports
import { faArrowUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./hero.styles.scss";

const Hero = () => (
  <section className="hero">
    <div className="hero__bg-image"></div>
    <div className="hero__content">
      <div className="hero__content__heading">
        <h1>
          Yahaya <span className="middle">Hyellamoda</span> Yohanna
        </h1>

        <div className="hero__content__heading-action">
          <span>
            <FontAwesomeIcon icon={faArrowUp} />
          </span>

          <h1>
            <span>Call Me</span>
          </h1>

          <span>
            <FontAwesomeIcon icon={faArrowUp} />
          </span>
        </div>
      </div>
      <div className="hero__content__text">
        <p>
          FullStack Developer <span>|</span> Computer Scientist
        </p>
      </div>
      <div className="hero__content__btn">
        <a
          href="#contact"
          className="btn btn-general btn-home"
          title="Contact Me"
        >
          Contact Me
        </a>
      </div>
    </div>
    <a href="#contact" className="hero__content-arrow-down">
      <FontAwesomeIcon icon={faAngleDown} />
    </a>
  </section>
);

export default Hero;
