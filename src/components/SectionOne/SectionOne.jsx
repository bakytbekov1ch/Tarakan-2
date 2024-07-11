import React, { useState } from "react";
import "./SectionOne.scss";
import { useTranslation } from "react-i18next";
import axios from "axios";

const mocAi = "https://668f6b7480b313ba09180a62.mockapi.io/tarakanPhone";

function SectionOne() {
  const { t } = useTranslation();
  const [phone, setPhone] = useState({ name: "", phone: "" });

  const handlerClick = (event) => {
    const { name, value } = event.target;
    setPhone((prevPhone) => ({ ...prevPhone, [name]: value }));
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    axios
      .post(mocAi, phone)
      .then((res) => {
        console.log(res);
        setPhone({ name: "", phone: "" });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="SectionOne">
      <div className="container">
        <div className="SectionOne__content">
          <h1>
            {t("free")}
            <span> {t("to")}</span>
          </h1>
          <div className="sectionone__input">
            <input
              onChange={handlerClick}
              value={phone.name}
              name="name"
              type="text"
              placeholder={t("addres")}
            />
            <input
              onChange={handlerClick}
              value={phone.phone}
              name="phone"
              type="text"
              placeholder={t("number")}
            />
            <button onClick={handlerSubmit}>{t("submit")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
