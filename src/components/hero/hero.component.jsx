import React from "react";
import { Link } from "react-router-dom";

import { faArrowUp, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./hero.styles.scss";

const Hero = () => (
  <section className="hero">
    <div className="hero__bg-image"></div>
    <div className="hero__content content-box-xs">
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
        <Link
          to="/contact"
          className="btn btn-general btn-home"
          title="Contact Me"
        >
          Contact Me
        </Link>

        <a
          href="../../assets/img/about/about-1.png"
          download
          className="btn btn-download"
          title="Download My Resume"
        >
          Download Resume <FontAwesomeIcon icon={faFileDownload} />
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
