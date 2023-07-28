import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import './App.css';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Resume from './components/Resume';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Home />
     <About />
     <Resume/>
     <Portfolio />
     <Experience/>
     <Contact />
     <SocialLinks />
    
    </div>
  );
}

export default App;
