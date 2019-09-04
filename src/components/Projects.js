import React, { Component } from 'react';
import image from '../assets/profile.jpg';
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
                      <div className={"card pulse " + "card-"+index.toString()} key={index}>
                            <a href={data.link} className="stretched-link" target="_blank" rel="noopener noreferrer"></a>
                            <div className="container">
                              <img src={"img/"+data.image} alt="Avatar" className="image" />
                              <div className="middle">
                                <div className="text">{data.technologies}</div>
                              </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title center">{data.projectTitle}</h5>
                                <p className="card-text">{data.projectDetail} </p>
                            </div>
                            {/* <div className="card-footer">
                                <small className="text-muted">{data.technologies}</small>
                            </div> */}
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