import { Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';

import  {Layout}  from './components/Layout/Layout'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactsPage from './pages/ContactsPage'

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="portfolio" element={<PortfolioPage />} />
      <Route path="contacts" element={<ContactsPage/>} />
    </Route>
  </>  
))

export default router