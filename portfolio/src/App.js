import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
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
     <Projects />
     <Experience/>
     <Contact />
     <SocialLinks />
    
    </div>
  );
}

export default App;
