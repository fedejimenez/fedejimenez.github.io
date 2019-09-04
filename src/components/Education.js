import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);

    this.education = props.education;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
        <div className="w-100">
          <h2 className="mb-5">Education</h2>
          {
            this.education.map((data, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0 d-inline">{data.institute} - {data.location}</h3>
                  <div className="subheading mb-3">{data.degree}</div>
                  {/* <p>{data.gpa}</p> */}
                  <ul>
                    <li>{data.extra}</li>
                  </ul>
                </div>
                <div className="resume-date text-md-right">
                  <span className="subheading mb-3">{data.toDate}</span>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Education;