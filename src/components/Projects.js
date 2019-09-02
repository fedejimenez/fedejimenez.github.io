import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from "@fortawesome/free-solid-svg-icons";


class Projects extends Component {
  constructor(props) {
    super(props);

    this.projects = props.projects;
  }

  render() {
    return(
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
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
         <h2 className="mb-5">Projects</h2>
            <div className="card-deck">
                {
                    this.projects.map((data, index) => (
                        <div className="card" key={index}>
                            <img className="card-img-top" src="..." alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">{data.projectTitle}</h5>
                                <p className="card-text">{data.projectDetail} </p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">{data.technologies}</small>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
      </section>
      
    );
  }
}

export default Projects;