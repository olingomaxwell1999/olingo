import Header from './Components/Header/Header';
import './app.css';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Service';
import Experience from './Components/Experience/Experience';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/> 
      <About/>
      <Navbar/>
      <Experience/>
      <Portfolio/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
