import React from "react";

import "./AboutFooter.scss";
import { useTranslation } from "react-i18next";

function AboutFooter() {
  const { t } = useTranslation();

  return (
    <div className="AboutFooter">
      <div className="container">
        <div className="AboutFooter__content">
          <p>{t("footer")}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutFooter;
