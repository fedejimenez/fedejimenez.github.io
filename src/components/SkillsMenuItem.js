import React from "react";

class SkillsMenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      stackNumber: null
    };

    this.skills = props.skills;
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  handleMouseHover() {
    this.setState({
      isHovering: !this.state.isHovering,
      stackNumber: this.props.stack.num
    });
    this.props.stackNumber(this.props.id);
  }
  handleMouseLeave() {
    this.setState({
      isHovering: !this.state.isHovering,
      stackNumber: ""
    });
    this.props.stackNumber("");
  }

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    return (
      <li
        className={`c-list__item c-list__item--${this.props.stack.num}`}
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseLeave}
      >
        <a className="c-list__link" href="/" onClick={this.handleClick}>
          {this.props.stack.name}
        </a>
      </li>
    );
  }
}

export default SkillsMenuItem;
