import React from "react";

import "./AboutFour.scss";
import { useTranslation } from "react-i18next";

function AboutFour() {
  const { t } = useTranslation();

  return (
    <div className="AboutFour">
      <div className="container">
        <div className="AboutFour__content">
          <h1>{t("fourh1")}</h1>
          <p>{t("fourText")}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutFour;
