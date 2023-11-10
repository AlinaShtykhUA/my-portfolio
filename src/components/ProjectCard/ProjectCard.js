import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import "./projectCard.scss";

const ProjectCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      content,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: content,
          start: "top 80%",
          end: "top 20%",
          scrub: 0.5,
          toggleActions: "play none none none",
        },
      }
    );

    ScrollTrigger.update();
  }, []);

  return (
    <div ref={contentRef} className="card">
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        onClick={() => setIsOpen(!isOpen)}
        className="card__img"
        layout
      >
        <img src={props.coverImg} alt="personal site" />
      </motion.div>

      {isOpen && (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="card__content"
        >
          <div className="card__about">
            <h3 className="card__title">{props.title}</h3>
            <p className="card__about-text">{props.description}</p>
          </div>

          <div className="card__info">
            <a
              className="card__info-links"
              href={props.github.link}
              target="_blank"
              rel="noreferrer"
            >
              <img src={props.github.icon} alt="github" />
            </a>
            <a
              className="card__info-links"
              href={props.link.link}
              target="_blank"
              rel="noreferrer"
            >
              <img src={props.link.icon} alt="link" />
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCard;
