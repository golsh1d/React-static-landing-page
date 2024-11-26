import './App.css';
import Header from './Header/Header';
import About from './About/About';
import Projects from './Projects/Projects';
import Testimonials from './Testimonials/Testimonials';
import Services from './Services/Services';
import News from './News/News';

function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials />
      <Services />
      <News />
    </div>
  );
}

export default App;