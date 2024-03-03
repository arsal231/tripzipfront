import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button} from 'react-bootstrap';
import { BrowserRouter, Routes,Route, Switch } from 'react-router-dom';

 import './assets/css/all-fontawesome.min.css';
 import './assets/css/animate.min.css';
 import './assets/css/magnific-popup.min.css';
 import './App.css';
// import './assets/css/jquery-ui.min.css';
    import './assets/css/jquery.timepicker.min.css';
    import './assets/css/nice-select.min.css';
    import './assets/css/style.css';

    import Home from './components/Home'
    import About from './components/About'
    import Contact from './components/Contact'
    import Login from './components/Login'
    import Blog from './components/Blog'
    import Register from './components/Register'
    import Dashboard from './components/Dashboard'
    import MyProfile from './components/MyProfile'
    import MyBooking from './components/MyBooking'
    import Testimonial from './components/Testimonial'
   import ChooseTaxi from  './components/ChooseTaxi'
    import Faq from './components/Faq'
    import 'owl.carousel/dist/assets/owl.carousel.css';
    import 'owl.carousel/dist/assets/owl.theme.default.css';
function App() {


  
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/faq' element={<Faq />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/testimonial' element={<Testimonial />}></Route>
          <Route path='/choose-taxi' element={<ChooseTaxi />}></Route>
          
          <Route path='/register' element={<Register />}></Route>
          <Route path="/*" element={'Place If page is not Found!'} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
