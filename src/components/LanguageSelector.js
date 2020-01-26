import React from "react";
import { withTranslation } from "react-i18next";

const LanguageSelector = ({ i18n }) => {
  return (
    <div>
      <button onClick={() => i18n.changeLanguage("es")}>es</button>
      <button onClick={() => i18n.changeLanguage("en")}>en</button>
    </div>
  );
};

// extended main view with translate hoc
export default withTranslation("translations")(LanguageSelector);