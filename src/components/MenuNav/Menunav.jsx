import React, { useState } from "react";

import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlinePlace } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { RiAdminLine } from "react-icons/ri";
import { MdOutlineGTranslate } from "react-icons/md";
import { IoMdExit } from "react-icons/io";

import "./Menunav.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Menunav() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(true);

  const close = () => {
    setOpen(false);
  };

  if (!open) {
    return null;
  }

  const changeClick = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="menunav">
      <div className="menunav__content">
        <ul>
          <Link to="/">
            <li>
              <IoHomeOutline />
              Home
            </li>
          </Link>
          <Link to="/about">
            <li>
              <TbArrowRoundaboutRight />
              About
            </li>
          </Link>
          <Link to="/admin">
            <li>
              <RiAdminLine />
              Admin
            </li>
          </Link>
          <Link to="https://2gis.kg/bishkek/search/%D0%90%D0%B1%D0%B4%D1%8B%D0%BA%D0%B0%D0%B4%D1%8B%D1%80%D0%BE%D0%B2%D0%B0%20204/geo/15763234351028221/74.568431%2C42.862781?m=74.570111%2C42.859597%2F16.11">
            <li>
              <MdOutlinePlace />
              Address
            </li>
          </Link>
          <li>
            <MdOutlinePhoneInTalk />
            <h3>Консультация</h3>
          </li>
          <li className="menunav__translation">
            <MdOutlineGTranslate />
            <select onClick={(e) => changeClick(e.target.value)} name="#" id="">
              <option value="ky">KGZ</option>
              <option value="ru">RUS</option>
              <option value="en">ENG</option>
            </select>
          </li>
          <li onClick={close} style={{ color: "red" }}>
            <IoMdExit />
            Exit
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menunav;
