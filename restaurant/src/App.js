import './App.css';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/Header/NavBar';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import Service from './Pages/Services/Service';
import SpecialDish from './Pages/Special/SpecialDish';


function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Service/>
      <Menu/>
      <SpecialDish/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
