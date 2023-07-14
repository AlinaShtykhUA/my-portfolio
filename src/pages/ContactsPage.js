import './styles/contacts.scss';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ContactsPage = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      className='contacts'
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      exit={{ opacity: 1 }}>
      <div className='container'>
        <div className='contacts__inner'>
          <div className='contacts__title title'>{t('contacts.title')}</div>
          <div className='contacts__content'>
            <div className='contacts__code code'>
              <div className='code-const'>
                <span className='const'>const</span>
                <span className='const-name'>contacts</span>
                <span className='equal'>=</span>
                <span className='bracket'></span>
              </div>

              <div className='code-obj'>
                <div className='code-line'>
                  <span className='key'>email</span>
                  <span className='colon'>:</span>
                  <a href='mailto:alinashtykh@gmail.com' className='str'>
                    <span className='blue'>‘</span>
                    alinashtykh@gmail.com
                    <span className='blue'>’</span>
                    <span className='purple'>,</span>
                  </a>
                </div>

                <div className='code-line'>
                  <span className='key'>linkedin</span>
                  <span className='colon'>:</span>
                  <a
                    rel='noreferrer'
                    target='_blank'
                    href='https://www.linkedin.com/in/alina-shtykh-2b6070188/'
                    className='str'>
                    {t('contacts.link2')} linkedin
                    <span className='purple'>,</span>
                  </a>
                </div>

                <div className='code-line'>
                  <span className='key'>github</span>
                  <span className='colon'>:</span>
                  <a
                    rel='noreferrer'
                    target='_blank'
                    href='https://github.com/AlinaShtykhUA'
                    className='str'>
                    {t('contacts.link2')} github
                    <span className='purple'>,</span>
                  </a>
                </div>

                <div className='code-line'>
                  <span className='key'>CV</span>
                  <span className='colon'>:</span>
                  <a
                    rel='noreferrer'
                    target='_blank'
                    href={t('contacts.webcv')}
                    className='str'>
                    {t('contacts.link')} CV
                  </a>
                </div>
              </div>
              <div className='bracket rotate'></div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactsPage;
