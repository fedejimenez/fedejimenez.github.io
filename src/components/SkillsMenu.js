import React from "react";
import MenuItem from "./SkillsMenuItem";
import imgEnglish from "../assets/capabilities.png";
import imgSpanish from "../assets/capacidades.png";
import i18next from "i18next";
import "./stylesheets/SkillsMenu.css";
import ImageComponent from "./ImageComponent";

class SkillsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stackNumber: ""
    };
    this.skills = props.skills;
    this.display = this.display.bind(this);
  }

  display(stackNumber) {
    this.setState({ stackNumber: stackNumber });
  }

  render() {
    let stacks = [
      { name: "Backend", num: 1 },
      { name: "Frontend", num: 2 },
      { name: "DevOps", num: 3 },
      { name: "DB", num: 4 }
    ];

    let getStack = stackNumber => {
      let name;
      switch (stackNumber) {
        case 1:
          name = "backend";
          break;
        case 2:
          name = "frontend";
          break;
        case 3:
          name = "devops";
          break;
        case 4:
          name = "db";
          break;
        default:
          name = "";
          break;
      }
      let filteredSkills = this.skills.filter(function(skill) {
        return skill.stack === name;
      });

      return filteredSkills;
    };

    let items = getStack(this.state.stackNumber).map((data, index) => (
      <div key={index} className="Skills-list">
        <p className="list-item">
          <i className={`Skills-icon devicon-${data.icon}-plain colored`}> </i>{" "}
          <span className="Skills-text ml-3"> {data.name} </span>{" "}
        </p>{" "}
      </div>
    ));
    return (
      <div className="SkilsMenu">
        <div className="c-menu">
          <ul className="c-list">
            {" "}
            {stacks.map((stack, index) => (
              <MenuItem
                key={index}
                id={index + 1}
                stack={stack}
                skills={this.props.skills}
                stackNumber={this.display}
              />
            ))}{" "}
          </ul>{" "}
        </div>{" "}
        <div className="SkillsMenu-stack">
          {" "}
          {this.state.stackNumber ? items : <ImageComponent />}{" "}
        </div>{" "}
      </div>
    );
  }
}

export default SkillsMenu;
