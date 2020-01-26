import React, { Component } from 'react';
import i18n from '../i18n';
import { Trans } from "react-i18next";

class Education extends Component {
  constructor(props) {
    super(props);

    this.education = props.education;
  }
  
  render() {
    const i18n_education = i18n.t('education', { returnObjects: true })

    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
        <div className="w-100">
          <h2 className="mb-5"> <Trans i18nKey="sidebar.education" /></h2>
          <Trans>
          {
            this.education.map((data, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0 d-inline">{i18n_education[index].institute} - {i18n_education[index].location}</h3>
                  <div className="subheading mb-3">{i18n_education[index].degree}</div>
                  {/* <p>{data.gpa}</p> */}
                  <ul>
                    <li>{i18n_education[index].extra}</li>
                  </ul>
                </div>
                <div className="resume-date text-md-right">
                  <span className="subheading mb-3">{i18n_education[index].toDate}</span>
                </div>
              </div>
            ))
          }
          </Trans>
        </div>
      </section>
    );
  }
}

export default Education;