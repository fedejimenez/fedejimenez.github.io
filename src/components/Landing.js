import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { withTranslation, Trans } from "react-i18next";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            <Trans i18nKey="landing.firstName" />
            <span className="text-primary">
              <Trans i18nKey="landing.lastName" />
            </span>
          </h1>
          <div className="subheading mb-5">
            <Trans i18nKey="landing.profession" /> ·
            <a href="mailto:name@email.com">
              {" "}
              <Trans i18nKey="landing.email" />
            </a>
          </div>
          <p className="lead mb-5">
            {" "}
            <Trans i18nKey="landing.bio" />{" "}
          </p>
          <div className="social-icons">
            {/* <a href={this.landingData.linkedin} target='_blank' rel="noopener noreferrer"> */}
            {/* <FontAwesomeIcon icon={faLinkedin} /> */}
            {/* </a> */}
            <a
              href={this.landingData.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href={this.landingData.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default withTranslation("translations")(Landing);
