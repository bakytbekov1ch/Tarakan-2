import React from "react";

import { AboutSlice } from "../../data/slice";

import "./AboutTree.scss";
import { useTranslation } from "react-i18next";

function AboutTree() {
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
    <div className="AboutTree">
      <div className="container">
        <div className="AboutTree__content">
          <h4>
            <span>Tarakan.kg</span> {t("treeh1")}
          </h4>

          <div className="abouttree__mocapi">
            {AboutSlice.map((item) => (
              <div className="abouttree__block">
                <img src={item.image} alt="" />

                <h2>{change(item)}</h2>
                <p>{changeText(item)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTree;
