import './styles/home.scss'
import { useTranslation } from 'react-i18next'
import { motion } from "framer-motion"

const HomePage = () => {
  const { t } = useTranslation()
  return (
    <motion.section
      className="home"

      initial={{y: "100%"}}
      animate={{y: "0%"}}
      transition={{duration: 0.75, ease: "easeOut"}}
      exit={{opacity: 1}}
    >
      <div className="container">
        <div className="home__inner">
          <div className="home__content">

            <div className="home__code code">
            
              <div className='code-const'>
                <span className="const">const</span>
                <span className="const-name">sayHello</span>
                <span className="equal">=</span>
                <span className="bracket"></span>
              </div>

              <div className='code-obj'>
                <div className='code-line'>
                  <span className="key">title</span>
                  <span className="colon">:</span>
                  <span className="str">
                    <span className="blue">‘</span>
                    {t('home.title')}
                    <span className="blue">’</span>
                    <span className="purple">,</span>
                  </span>
                </div> 

                <div className='code-line'>
                  <span className="key">text</span>
                  <span className="colon">:</span>
                  <span className="str">
                    <span className="blue">‘</span>
                    {t('home.text')}
                    <span className="blue">’</span>
                    <span className="purple">,</span>
                  </span>
                </div> 

                <div className='code-const'>
                  <span className="func">todo <span className="pink">()</span> </span>
                  <span className="bracket pink"></span>
                </div>

                <div className='code-line'>
                  <span className="return">return ‘<span className="green">{t('home.todo')}</span>’</span>
                </div> 

                <div className='bracket pink rotate'></div>
              </div>

              <div className='bracket rotate'></div>

            </div>   
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default HomePage

