import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import gsap from "gsap";
import "./about.scss";

const AboutPage = () => {
  const [state, setState] = useState(true);
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
  }, [state]);

  function handleState() {
    setState((prevState) => !prevState);
  }

  function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  }
  const birthDate = "1997-05-31";
  return (
    <section className="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__title title">{t("about.title")}</div>
          <div className="about__content">
            {state ? (
              <div ref={contentRef} className="about__code code">
                <div className="code-const">
                  <span className="const">const</span>
                  <span className="const-name">personal</span>
                  <span className="equal">=</span>
                  <span className="bracket"></span>
                </div>

                <div className="code-obj">
                  <div className="code-line">
                    <span className="key">name</span>
                    <span className="colon">:</span>
                    <span className="str">
                      <span className="blue">‘</span>
                      {t("about.name")}
                      <span className="blue">’</span>
                      <span className="purple">,</span>
                    </span>
                  </div>

                  <div className="code-line">
                    <span className="key">age</span>
                    <span className="colon">:</span>
                    <span className="str">
                      {calculateAge(birthDate)}
                      <span className="purple">,</span>
                    </span>
                  </div>

                  <div className="code-line">
                    <span className="key">country</span>
                    <span className="colon">:</span>
                    <span className="str">
                      <span className="blue">‘</span>
                      {t("about.country")}
                      <span className="blue">’</span>
                      <span className="purple">,</span>
                    </span>
                  </div>

                  <div className="code-line">
                    <span className="key">city</span>
                    <span className="colon">:</span>
                    <span className="str">
                      <span className="blue">‘</span>
                      {t("about.city")}
                      <span className="blue">’</span>
                      <span className="purple">,</span>
                    </span>
                  </div>

                  <div className="code-const">
                    <span className="func">
                      more <span className="pink">()</span>{" "}
                    </span>
                    <span className="bracket pink"></span>
                  </div>

                  <div className="code-line">
                    <span className="return">
                      return ‘<span className="green">{t("about.more")}</span>’
                    </span>
                  </div>

                  <div className="bracket pink rotate"></div>
                </div>

                <div className="bracket rotate"></div>
              </div>
            ) : (
              <div ref={contentRef} className="about__code code">
                <div className="code-const">
                  <span className="const">const</span>
                  <span className="const-name">profesionalThings</span>
                  <span className="equal">=</span>
                  <span className="bracket"></span>
                </div>

                <div className="code-obj">
                  <div className="code-line">
                    <span className="key">isProgrammer</span>
                    <span className="colon">:</span>
                    <span className="str">
                      true
                      <span className="purple">,</span>
                    </span>
                  </div>

                  <div className="code-line">
                    <span className="key">techStack</span>
                    <span className="colon">:</span>
                    <span className="str">
                      <span className="pink">[</span>
                      <span className="blue">‘</span>HTML5
                      <span className="blue">’</span>
                      <span className="purple">,</span>
                      <span className="blue">‘</span>CSS3
                      <span className="blue">’</span>
                      <span className="purple">, </span>
                      <span className="blue">‘</span>Tailwind
                      <span className="blue">’</span>
                      <span className="purple">, </span>
                      <span className="blue">‘</span>JavaScript(ES6++)
                      <span className="blue">’</span>
                      <span className="purple">,</span>
                      <span className="blue">‘</span>React(Router, Hooks)
                      <span className="blue">’</span>
                      <span className="purple">,</span>
                      <span className="blue">‘</span>TypeScript
                      <span className="blue">’</span>
                      <span className="purple">,</span>
                      <span className="blue">‘</span>Redux
                      <span className="blue">’</span>
                      <span className="purple">,</span>
                      <span className="blue">‘</span>BEM
                      <span className="blue">’</span>
                      <span className="purple">,</span>
                      <span className="blue">‘</span>Jest
                      <span className="blue">’</span>
                      <span className="purple">,</span>
                      <span className="blue">‘</span>GIT
                      <span className="blue">’</span>
                      <span className="purple">,</span>
                      <span className="blue">‘</span>Webpack
                      <span className="blue">’</span>
                      <span className="purple">,</span>
                      <span className="blue">‘</span>Gulp
                      <span className="blue">’</span>
                      <span className="purple">,</span>
                      <span className="blue">‘</span>npm/npx
                      <span className="blue">’</span>
                      <span className="pink">]</span>
                      <span className="purple">,</span>
                    </span>
                  </div>

                  <div className="code-line">
                    <span className="key">designStack</span>
                    <span className="colon">:</span>
                    <span className="str">
                      <span className="pink">[</span>
                      <span className="blue">‘</span>Figma
                      <span className="blue">’</span>
                      <span className="purple">, </span>
                      <span className="blue">‘</span>Photoshop
                      <span className="blue">’</span>
                      <span className="purple">,</span>
                      <span className="blue">‘</span>XD
                      <span className="blue">’</span>
                      <span className="purple">,</span>
                      <span className="blue">‘</span>Pixelmator
                      <span className="blue">’</span>
                      <span className="pink">]</span>
                    </span>
                  </div>
                </div>
                <div className="bracket rotate"></div>
              </div>
            )}
          </div>
          <button className="btn" onClick={handleState}>
            {state === true
              ? `${t("about.btn.skills")}`
              : `${t("about.btn.personal")}`}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
