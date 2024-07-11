import React from "react";

import { aboutValue } from "../../data/value";

import "./AboutTwo.scss";
import { useTranslation } from "react-i18next";

function AboutTwo() {
  const { t, i18n } = useTranslation();

  function change(res) {
    let title;

    switch (i18n.language) {
      case "en":
        title = res.title__en;
        break;
      case "ru":
        title = res.title__ru;
        break;
      case "ky":
        title = res.title__ky;
        break;
    }

    return title;
  }

  return (
    <div className="AboutTwo">
      <div className="container">
        <div className="AboutTwo__content">
          <h1>{t("service")}</h1>

          <div className="aboutone__mx">
            {aboutValue.map((item) => (
              <div className="aboutone__api">
                <img src={item.image} alt="" />

                <h2>{change(item)}</h2>
              </div>
            ))}
          </div>

          <p>{t("twoText")}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutTwo;
