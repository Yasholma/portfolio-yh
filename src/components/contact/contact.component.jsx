import React from "react";

import "./contact.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faEnvelope,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section className="contact">
      <div className="content-box-md">
        <div className="contact__heading">
          <h5>Contact</h5>
          <h2>
            Contact Me Or <strong>Drop</strong> A Message
          </h2>
        </div>

        <div className="contact__content">
          <div className="contact__content-details">
            <p>My Phone Number and Address:</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faMobileAlt} />
                <span>+234 (80) 6776 4535</span>
              </li>

              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>yasholma1@gmail.com</span>
              </li>

              <li>
                <FontAwesomeIcon icon={faMapMarker} />
                <span>Jalingo, Taraba State, Nigeria</span>
              </li>
            </ul>
          </div>

          <div className="contact__content-message">
            <div className="heading">
              <h2>Send Message</h2>
              <p>
                You can drop me a message here, I will do my possible best to
                reply as soon as possible. Thank You!
              </p>
            </div>
            <form>
              <div className="f-group">
                <input
                  type="text"
                  name="name"
                  className="form-style"
                  placeholder="Enter your name"
                />
              </div>

              <div className="f-group">
                <input
                  type="email"
                  name="email"
                  className="form-style"
                  placeholder="Enter your Email"
                />
              </div>

              <div className="f-group">
                <textarea
                  name="message"
                  className="form-style"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <div className="f-group">
                <button type="submit" className="btn btn-contact btn-download">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
