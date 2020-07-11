import React, { Component } from "react";
import i18n from "../i18n";
import { Trans } from "react-i18next";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.projects = props.projects;
  }

  render() {
    const i18n_projects = i18n.t("projects", { returnObjects: true });

    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="projects"
      >
        {/* <div className="w-100">
          <h2 className="mb-5">Projects</h2>
          <ul className="mb-0">
          {
              this.projects.map((data, index) => (
                  <li key={index}>
                  <span className="ml-2"> {data.projectDetail} </span>
                  </li>
                  ))
                }
                </ul>
            </div> */}

        <div className="w-100">
          <h2 className="mb-5">
            <Trans i18nKey="sidebar.projects" />
          </h2>
          <div className="card-deck">
            <Trans>
              {this.projects.map((data, index) => (
                <div
                  className={"card pulse " + "card-" + index.toString()}
                  key={index}
                >
                  <a
                    href={data.link}
                    className="stretched-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                  <div className="container">
                    <img
                      src={"img/" + data.image}
                      alt="Avatar"
                      className="image"
                    />
                    <div className="middle">
                      <div className="text">
                        {i18n_projects[index].technologies}
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title center">
                      {i18n_projects[index].projectTitle}
                    </h5>
                    <p className="card-text">
                      {i18n_projects[index].projectDetail}{" "}
                    </p>
                  </div>
                  {/* <div className="card-footer">
                                <small className="text-muted">{data.technologies}</small>
                            </div> */}
                </div>
              ))}
            </Trans>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
