import { useTranslation } from "react-i18next";
import github from "../../assets/img/github.svg";
import linkedin from "../../assets/img/linkedin.svg";
import "./footer.scss";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <p className="footer__made-with-love">
        {t("footer.text")}
        <span className="heart"></span>
      </p>
      <p className="footer__name">{t("footer.name")}</p>
      <div className="footer__social">
        <a
          className="footer__social-link"
          target="_blank"
          href="https://github.com/AlinaShtykhUA"
          rel="noreferrer"
        >
          <img src={github} alt="github logo" />
        </a>

        <a
          className="footer__social-link"
          target="_blank"
          href="https://www.linkedin.com/in/alina-shtykh-2b6070188/"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
