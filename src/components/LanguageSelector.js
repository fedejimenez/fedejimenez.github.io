import React from "react";
import { withTranslation } from "react-i18next";
import flagEs from "../assets/flags/es.gif";
import flagEn from "../assets/flags/en.gif";

const LanguageSelector = ({ i18n }) => {
  return (
    <div className="fixed">
      <button
        className="btn btn-link"
        onClick={() => i18n.changeLanguage("es")}
      >
        <img
          className="img-fluid img-profile rounded-circle mx-auto mb-2"
          src={flagEs}
          alt="flags"
        ></img>
      </button>
      <button
        className="btn btn-link"
        onClick={() => i18n.changeLanguage("en")}
      >
        <img
          className="img-fluid img-profile rounded-circle mx-auto mb-2"
          src={flagEn}
          alt="profile"
        ></img>
      </button>
    </div>
  );
};

// extended main view with translate hoc
export default withTranslation("translations")(LanguageSelector);
