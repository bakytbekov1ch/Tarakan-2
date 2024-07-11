import React from "react";

import "./SectionTwo.scss";

import { dataTarakan } from "../../data/data";
import { useTranslation } from "react-i18next";

function SectionTwo() {
  const { t, i18n } = useTranslation();

  function change(res) {
    let title;

    switch (i18n.language) {
      case "en":
        title = res.name__en;
        break;
      case "ru":
        title = res.name__ru;
        break;
      case "ky":
        title = res.name__ky;
        break;
    }
    return title;
  }

  function changeText(arr) {
    let text;

    switch (i18n.language) {
      case "en":
        text = arr.text__en;
        break;
      case "ru":
        text = arr.text__ru;
        break;
      case "ky":
        text = arr.text__ky;
        break;
    }
    return text;
  }

  return (
    <div className="SectionTwo">
      <div className="container">
        <div className="SectionTwo__content">
          <h1>{t("our")}</h1>
          <div className="SectionTwo__mocApi">
            {dataTarakan.map((item) => (
              <div key={item.id} className="SectionTwo__block">
                <img src={item.image} alt="" />
                <div className="sectiontwo__text">
                  <h3>{change(item)}</h3>
                  <p>{changeText(item)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sectiontwo__line"></div>
      <div className="sectiontwo__mx container">
        <div className="sectiontwo__ms">
          <div>
            <h1>{t("no")}</h1>
            <p>{t("app")}</p>
          </div>
          <div style={{ display: "grid", gap: "8px" }}>
            <input type="text" placeholder={t("number")} />
            <button>{t("submit")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
