import React, {useState} from 'react';
import { Outlet, NavLink  } from 'react-router-dom';

import logo from '../../assets/img/logo.svg'
import github from '../../assets/img/github.svg'
import linkedin from '../../assets/img/linkedin.svg'
import { CustomLink } from '../CustomLink';
import { useTranslation } from 'react-i18next'
import useLocalStorage from '../../translate/hooks/use-localstorage'
import i18n from '../../i18n'

import './layout.scss'



const Layout = () => {
  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  const { t } = useTranslation()
  const [language, setLanguage] = useLocalStorage('language', 'ua')

  const handleLenguageChange = () => {
      if (language === 'eng') {
          i18n.changeLanguage('ua')
          setLanguage('ua')
      } else if (language === 'ua') {
          i18n.changeLanguage('eng')
          setLanguage('eng')
      }
  }

  return (
    <>
      <div className="header__wrapper">
        <header className="header">
            <div className="container">
              <div className="header__inner">
                <NavLink to="/">
                  <img className="header__logo" src={logo} alt="logo" />
                </NavLink>
            
                <div className='right'>
                  <nav 
                    onClick={() => setShowLinks(false)}   
                    className={`nav ${showLinks ? "show-nav" : "hide-nav"}`}
                  >
                    <ul className="nav__links">
                      <CustomLink className="nav__link" to="/">{t('nav.home')}</CustomLink>
                      <NavLink className="nav__link nav__link-purple" to="/about">{t('nav.about')}</NavLink>
                      <NavLink className="nav__link nav__link-red" to="/portfolio">{t('nav.portfolio')}</NavLink>
                      <NavLink className="nav__link nav__link-green" to="/contacts">{t('nav.contacts')}</NavLink>
                    </ul>
                  </nav>

                  <div className='btns'>
                    <button onClick={handleShowLinks} className={`nav__burger ${showLinks ? "show-nav" : "hide-nav"}`}>
                      <span className="nav-bar"></span>
                    </button>

                    <button onClick={handleLenguageChange} className='btn btn-lang'>
                      {language === 'ua' ? t('eng') : t('ua')}
                    </button>
                  </div>
                </div>
      
              </div>
            </div>
        </header>
      </div>

      <main className="main">
            <Outlet />
      </main>

      <footer className="footer">
          <p className='footer__made-with-love'>{t('footer.text')}<span className='heart'></span></p>
          <p className='footer__name'>{t('footer.name')}</p>
          <div className='footer__social'>

            <a className='footer__social-link' target="_blank" href='https://github.com/AngelinaShtykh' rel="noreferrer">
              <img src={github} alt="github logo"/>
            </a>

            <a className='footer__social-link' target="_blank" href='https://www.linkedin.com/in/alina-shtykh-2b6070188/' rel="noreferrer">
              <img src={linkedin} alt="linkedin logo"/>
            </a>

          </div>
      </footer>
    </>
  )
}

export { Layout }
