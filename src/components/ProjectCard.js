import { useState } from "react"
import { motion } from "framer-motion"

const ProjectCard = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div className="card">
      <motion.div 
        transition={{layout: {duration: 1, type: "spring"}}}
        onClick={() => setIsOpen(!isOpen)}
        className="card__img" layout
      >
        <img src={props.coverImg} alt="personal site" />
      </motion.div>
      
      {isOpen && (
        <motion.div
          layout
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          transition={{duration: 1}}
          className="card__content"
        >
        <div className="card__about">
          <h3 className="card__title">{props.title}</h3>
          <p className="card__about-text">{props.description}</p>
        </div>

        <div className="card__info">
          <a className="card__info-links" href={props.github.link} target="_blank" rel="noreferrer">
            <img src={props.github.icon} alt="github"/>
          </a>
          <a className="card__info-links" href={props.link.link} target="_blank" rel="noreferrer">
            <img src={props.link.icon} alt="link"/>
          </a>
        </div>
        </motion.div>
      )}
      
      
    </motion.div>    
  )
}

export default ProjectCard