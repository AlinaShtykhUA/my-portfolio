import { useState } from "react";
import { NavLink } from "react-router-dom";

import { CustomLink } from "../CustomLink/CustomLink";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../../hooks/use-localstorage";
import i18n from "../../translate/i18n";

import logo from "../../assets/img/logo.svg";
import "./header.scss";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "ua");

  const handleLenguageChange = () => {
    if (language === "eng") {
      i18n.changeLanguage("ua");
      setLanguage("ua");
    } else if (language === "ua") {
      i18n.changeLanguage("eng");
      setLanguage("eng");
    }
  };

  const links = [
    {
      className: "nav__link-purple",
      text: "nav.about",
      link: "/about",
    },
    {
      className: "nav__link-red",
      text: "nav.portfolio",
      link: "/portfolio",
    },
    {
      className: "nav__link-green",
      text: "nav.contacts",
      link: "/contacts",
    },
  ];
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <NavLink to="/">
            <img className="header__logo" src={logo} alt="logo" />
          </NavLink>

          <div className="right">
            <nav
              onClick={() => setShowLinks(false)}
              className={`nav ${showLinks ? "show-nav" : "hide-nav"} `}
            >
              <ul className="nav__links">
                <CustomLink className="nav__link" to="/">
                  {t("nav.home")}
                </CustomLink>
                {links.map((link) => (
                  <NavLink
                    key={link.text}
                    className={`${link.className} nav__link`}
                    to={link.link}
                  >
                    {t(link.text)}
                  </NavLink>
                ))}
              </ul>
            </nav>

            <div className="btns">
              <button
                onClick={handleShowLinks}
                className={`nav__burger ${showLinks ? "show-nav" : "hide-nav"}`}
              >
                <span className="nav-bar"></span>
              </button>

              <button onClick={handleLenguageChange} className="btn btn-lang">
                {language === "ua" ? t("eng") : t("ua")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
