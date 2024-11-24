import './App.css';
import Header from './Header/Header';
import About from './About/About';
import Projects from './Projects/Projects';
import Testimonials from './Testimonials/Testimonials';
import Services from './Services/Services';

function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials />
      <Services />
    </div>
  );
}

export default App;