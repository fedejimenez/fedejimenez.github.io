import React from "react";
import imgEnglish from "../assets/capabilities.png";
import imgSpanish from "../assets/capacidades.png";
import i18next from "i18next";

class ImageComponent extends React.Component {
  state = {
    isOpen: false,
    toggleClass: "fadeOut"
  };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
    this.toggle();
  };

  toggle() {
    if (this.state.isOpen) {
      this.setState({ toggleClass: "fadeOut" });
    } else {
      this.setState({ toggleClass: "fadeIn" });
    }
  }

  render() {
    return (
      <div className="ImageComponent">
        <img
          className="small"
          src={i18next.language == "en" ? imgEnglish : imgSpanish}
          onClick={this.handleShowDialog}
          alt="capabilities"
        />
        <dialog
          className={"dialog " + this.state.toggleClass}
          open={this.state.isOpen}
          onClick={this.handleShowDialog}
        >
          <img
            className="image"
            src={i18next.language == "en" ? imgEnglish : imgSpanish}
            onClick={this.handleShowDialog}
            alt="capabilities"
            alt=""
          />
        </dialog>
      </div>
    );
  }
}

export default ImageComponent;
