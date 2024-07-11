import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import logo from "../../assets/svg/logo.png";

import { MdOutlinePlace } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

import "./Header.scss";
import { Link } from "react-router-dom";
import Login from "../Auth/Login/Login";
import MenuBtn from "../Menu/Menu";
import Menunav from "../MenuNav/Menunav"

function Header() {
  const [popup, setPopup] = useState();
  const { t, i18n } = useTranslation();
  const [menu, setMenu] = useState();
  const [open, setOpen] = useState();

  const handleChangeLangoage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="header">
      <div className="headerBlock">
        <div className="container">
          <div className="header__content">
            <Link to="/">
              <div className="header__logo">
                <img src={logo} alt="" />
                <h1>Tarakan.kg</h1>
              </div>
            </Link>
            <nav className="header__nav">
              <ul>
                <Link to="/">
                  <li>{t("home")}</li>
                </Link>
                <Link to="/about">
                  <li>{t("about")}</li>
                </Link>
                <Link>
                  <li onClick={() => setPopup(!popup)}>{t("admin")}</li>
                </Link>
              </ul>
            </nav>
            <div className="header__address">
              <div className="header__mesto">
                <MdOutlinePlace className="header__icon" />
                <Link to="https://2gis.kg/bishkek/search/%D0%90%D0%B1%D0%B4%D1%8B%D0%BA%D0%B0%D0%B4%D1%8B%D1%80%D0%BE%D0%B2%D0%B0%20204/geo/15763234351028221/74.568431%2C42.862781?m=74.570111%2C42.859597%2F16.11">
                  <div className="header__text">
                    <h3>г.БИШКЕК</h3>
                    <span>ул.Курманжан датка 32б</span>
                  </div>
                </Link>
              </div>

              <div className="header__mesto">
                <LuPhoneCall className="header__phone" />
                <div className="header__text2">
                  <h3>+996 507 111 669</h3>
                  <span>консультация</span>
                </div>
              </div>

              <div className="header__i18">
                <h4 onClick={() => handleChangeLangoage("ky")}>KGZ</h4>
                <h4 onClick={() => handleChangeLangoage("ru")}>RUS</h4>
                <h4 onClick={() => handleChangeLangoage("en")}>ENG</h4>
              </div>
            </div>
            <IoMenu className="header__menu" onClick={() => setMenu(!menu)} />

            <LuMenu className="header__menu2" onClick={() => setOpen(!open)} />
          </div>
        </div>
      </div>
      {popup && (
        <div className="header__login">
          <Login close={setPopup} />
        </div>
      )}
      {menu && (
        <div className="menu__popup">
          <MenuBtn />
        </div>
      )}
      {open && (
        <div className="menu__popup">
          <Menunav />
        </div>
      )}
    </div>
  );
}

export default Header;
