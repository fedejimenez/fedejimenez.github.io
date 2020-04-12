import React, { Component } from "react";
import { Trans } from "react-i18next";
import "./stylesheets/Skills.css";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.skills = props.skills;
  }

  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">
            {" "}
            <Trans i18nKey="sidebar.skills.title" />
          </h2>
          <div className="subheading mb-3">
            <Trans i18nKey="sidebar.skills.subtitle" />
          </div>
          <br></br>
          <div className="row">
            {this.skills.map((data, index) => (
              <div key={index} className="col-6 Skills-list">
                <p className="list-item">
                  <i
                    class={`Skills-icon devicon-${data.icon}-plain colored`}
                  ></i>
                  <span className="Skills-text ml-3">{data.name}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
