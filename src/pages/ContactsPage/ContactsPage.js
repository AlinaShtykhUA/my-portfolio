import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import "./contacts.scss";

const ContactsPage = () => {
  const { t } = useTranslation();
  const contentRef = useRef(null);
  useEffect(() => {
    const content = contentRef.current;

    gsap.from(content, {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      ease: "power2.out",
    });
    gsap.to(content, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out",
    });
  }, []);
  return (
    <section className="contacts">
      <div className="container">
        <div className="contacts__inner">
          <div className="contacts__title title">{t("contacts.title")}</div>
          <div className="contacts__content">
            <div ref={contentRef} className="contacts__code code">
              <div className="code-const">
                <span className="const">const</span>
                <span className="const-name">contacts</span>
                <span className="equal">=</span>
                <span className="bracket"></span>
              </div>

              <div className="code-obj">
                <div className="code-line">
                  <span className="key">email</span>
                  <span className="colon">:</span>
                  <a href="mailto:alinashtykh@gmail.com" className="str">
                    <span className="blue">‘</span>
                    alinashtykh@gmail.com
                    <span className="blue">’</span>
                    <span className="purple">,</span>
                  </a>
                </div>

                <div className="code-line">
                  <span className="key">linkedin</span>
                  <span className="colon">:</span>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/alina-shtykh-2b6070188/"
                    className="str"
                  >
                    {t("contacts.link2")} linkedin
                    <span className="purple">,</span>
                  </a>
                </div>

                <div className="code-line">
                  <span className="key">github</span>
                  <span className="colon">:</span>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/AlinaShtykhUA"
                    className="str"
                  >
                    {t("contacts.link2")} github
                    <span className="purple">,</span>
                  </a>
                </div>

                <div className="code-line">
                  <span className="key">CV</span>
                  <span className="colon">:</span>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={t("contacts.webcv")}
                    className="str"
                  >
                    {t("contacts.link")} CV
                  </a>
                </div>
              </div>
              <div className="bracket rotate"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsPage;
