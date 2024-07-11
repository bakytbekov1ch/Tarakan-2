import React, { useState } from "react";
import { MdOutlinePlace } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Menu.scss";

function MenuBtn() {
  const [isOpen, setIsOpen] = useState(true);
  const { i18n } = useTranslation();

  const handleI18n = (lng) => {
    i18n.changeLanguage(lng);
  };

  const close = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="menu">
      <div className="container">
        <div className="menu__content">
          <Link to="https://2gis.kg/bishkek/search/%D0%90%D0%B1%D0%B4%D1%8B%D0%BA%D0%B0%D0%B4%D1%8B%D1%80%D0%BE%D0%B2%D0%B0%20204/geo/15763234351028221/74.568431%2C42.862781?m=74.570111%2C42.859597%2F16.11">
            <div className="menu__block">
              <MdOutlinePlace className="menu__icon" />
              <h1>address</h1>
            </div>
          </Link>
          <div className="menu__block">
            <LuPhoneCall className="menu__icon" />
            <h1>консультация</h1>
          </div>
          <select name="#" id="" onChange={(e) => handleI18n(e.target.value)}>
            <option value="ky">KGZ</option>
            <option value="ru">RUS</option>
            <option value="en">ENG</option>
          </select>
          <IoCloseCircleOutline onClick={close} className="menu__iconX" />
        </div>
      </div>
    </div>
  );
}

export default MenuBtn;
