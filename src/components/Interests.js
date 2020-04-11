import React, { Component } from 'react';
import { Trans } from "react-i18next";

class Interests extends Component {
  constructor(props) {
    super(props);

    this.interests = props.interests;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
        <div className="w-100">
          <h2 className="mb-5"> <Trans i18nKey="sidebar.interests" /></h2>
          <p><Trans i18nKey="interests.paragraphOne" /></p>
          <p className="mb-0"><Trans i18nKey="interests.paragraphTwo" /></p>
        </div>
      </section>
    );
  }
}

export default Interests;