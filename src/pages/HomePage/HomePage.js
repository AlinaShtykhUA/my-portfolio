import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import "./home.scss";

const HomePage = () => {
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
    <section className="home">
      <div className="container">
        <div className="home__inner">
          <div className="home__content">
            <div ref={contentRef} className="home__code code">
              <div className="code-const">
                <span className="const">const</span>
                <span className="const-name">sayHello</span>
                <span className="equal">=</span>
                <span className="bracket"></span>
              </div>

              <div className="code-obj">
                <div className="code-line">
                  <span className="key">title</span>
                  <span className="colon">:</span>
                  <span className="str">
                    <span className="blue">‘</span>
                    {t("home.title")}
                    <span className="blue">’</span>
                    <span className="purple">,</span>
                  </span>
                </div>

                <div className="code-line">
                  <span className="key">text</span>
                  <span className="colon">:</span>
                  <span className="str">
                    <span className="blue">‘</span>
                    {t("home.text")}
                    <span className="blue">’</span>
                    <span className="purple">,</span>
                  </span>
                </div>

                <div className="code-const">
                  <span className="func">
                    todo <span className="pink">()</span>{" "}
                  </span>
                  <span className="bracket pink"></span>
                </div>

                <div className="code-line">
                  <span className="return">
                    return ‘<span className="green">{t("home.todo")}</span>’
                  </span>
                </div>

                <div className="bracket pink rotate"></div>
              </div>

              <div className="bracket rotate"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
