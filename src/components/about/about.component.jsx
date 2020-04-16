import React from "react";

import "./about.styles.scss";
import image from "../../assets/img/about/about-2.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section className="about">
      <div className="content-box-md">
        <div className="about__heading">
          <div className="about__heading-quote">
            <h4>
              Call Me: <span>Yahaya Hyella Yohanna</span>
            </h4>
            <p>
              I am quick to adopt new ideas. If there is something good, I will
              follow it and implement it.
            </p>
          </div>
          <div className="about__content">
            <ul className="social-list">
              <li>
                <a
                  href="http://facebook.com/yasholma"
                  title="Facebook"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/yasholma"
                  title="Twitter"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Yasholma"
                  title="Github"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yahaya-hyellamoda-yohanna-72a373150"
                  title="LinkedIn"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
            </ul>
            <div className="about__content-image">
              <img src={image} alt="Yahaya H Yohanna" />
            </div>
          </div>
          <div className="about__resume">
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
      </div>
    </section>
  );
};

export default About;
