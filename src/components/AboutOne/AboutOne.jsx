import React from "react";

import "./AboutOne.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function AboutOne() {
  const { t } = useTranslation();

  return (
    <div className="AboutOne">
      <div className="container">
        <div className="aboutone__block">
          <Link to="/">
            <h4>{t("home")}</h4>
          </Link>
          <h3>/</h3>
          <h3>{t("about")}</h3>
        </div>
        <div className="AboutOne__content">
          <h1>{t("about")}</h1>

          <p>{t("aboutText")}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutOne;
