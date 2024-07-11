import React from "react";

import { AboutFourApi } from "../../data/AboutFour";

import "./AboutFayif.scss";
import { useTranslation } from "react-i18next";

function AboutFayif() {
  const { t, i18n } = useTranslation();

  function change(res) {
    let name;

    switch (i18n.language) {
      case "en":
        name = res.name__en;
        break;
      case "ru":
        name = res.name__ru;
        break;
      case "ky":
        name = res.name__ky;
        break;
    }

    return name;
  }

  function handlerClick(arr) {
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

  function titleClick(btn) {
    let title;

    switch (i18n.language) {
      case "en":
        title = btn.title__en;
        break;
      case "ru":
        title = btn.title__ky;
        break;
    }
    return title;
  }

  return (
    <div className="AboutFayif">
      <div className="container">
        <div className="AboutFayif__content">
          {AboutFourApi.map((item) => (
            <div className="AboutFayif__block">
              <h1>{change(item)}</h1>
              <p>{handlerClick(item)}</p>
              <h3>{titleClick(item)}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutFayif;
