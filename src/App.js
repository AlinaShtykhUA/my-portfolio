import {RouterProvider} from 'react-router-dom';
import router from './router';



function App() {
  
  return (
    <>
      <a target="_blank" rel="noreferrer" href='https://www.koloua.com/en' className='slavageroyam'>
        STOP THE WAR! HELP UKRAINE!
      </a>
      <RouterProvider router={router} />
    </>
    
  )
}
export default App
