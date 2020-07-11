import React, { Component } from "react";
import i18n from "../i18n";
import { Trans } from "react-i18next";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.experience = props.experience;
  }

  render() {
    const i18n_experience = i18n.t("experience", { returnObjects: true });

    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">
            {" "}
            <Trans i18nKey="sidebar.experience" />
          </h2>
          {this.experience.map((exp, index) => (
            <div
              key={index}
              className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
            >
              <div className="resume-content">
                <h3 className="mb-0">{i18n_experience[index].position}</h3>
                <div className="subheading mb-3">
                  {i18n_experience[index].organization} -{" "}
                  {i18n_experience[index].location}{" "}
                </div>
                <p>{i18n_experience[index].aboutWork}</p>
                <ul>
                  <li className="col-12">
                    <p>
                      <span>{i18n_experience[index].task1}</span>
                    </p>
                  </li>
                  <li className="col-12">
                    <p>
                      <span>{i18n_experience[index].task2}</span>
                    </p>
                  </li>
                  <li className="col-12">
                    <p>
                      <span>{i18n_experience[index].task3}</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="resume-date text-md-right">
                <span className="subheading mb-3">
                  {i18n_experience[index].fromDate} -{" "}
                  {i18n_experience[index].toDate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Experience;
