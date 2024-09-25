import {BrowserRouter,Route,Routes, useNavigate} from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home } from './components/hOME.JSX'
import { Buycars } from './components/Buycars'
import { CarouselComponent } from './components/Slider1'
import { Ms } from './components/MS'
import { Services } from './components/Service'
import { Book } from './components/Bookservice'
import { About } from './components/About'
import { Contact } from './components/Contact'
import ScrollToTop from './components/Scrolltop'
import AdminPage from './components/Admin'


function App() {

  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
            <Route element={<Home/>} path='/'></Route>
            <Route element={<Buycars/>} path='/cars'></Route>
            <Route element={<Ms/>} path='/cars/ms'/>
            <Route element={<Services/>} path='/services'/>
            <Route element={<Book/>} path='/book-service'/>
            <Route element={<About/>} path='/about-us'/>
            <Route element={<Contact/>} path='/contact-us'/>
            <Route element={<AdminPage/>} path='/admin'/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
