import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ProjectCard from "../../components/ProjectCard";

import "./portfolio.scss";

const PortfolioPage = () => {
  const { t } = useTranslation();
  const portfolioData = t("projects-data", { returnObjects: true });

  const cardElement = portfolioData.map((info) => {
    return <ProjectCard key={info.id} {...info} />;
  });

  return (
    <motion.section
      className="portfolio"
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <div className="container">
        <div className="portfolio__inner">
          <h1 className="portfolio__title title">{t("portfolio.title")}</h1>
          <p className="portfolio__subtitle">{t("portfolio.subtitle")}</p>
          <div className="portfolio__content">
            <div className="cards">{cardElement}</div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioPage;
