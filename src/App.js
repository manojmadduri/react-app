
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage';
import Category from './components/Category';
import Testimonial from './components/Testimonial';
import ContactUs from './components/ContactUs';



function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/menu' Component={Menu}></Route>
        <Route path='/about' Component={AboutPage}></Route>
        <Route path='/category' Component={Category}></Route>
        <Route path='/testimonial' Component={Testimonial}></Route>
        <Route path='/contact' Component={ContactUs}></Route>

      </Routes>
     </Router>


    </div>
  );
}

export default App;
