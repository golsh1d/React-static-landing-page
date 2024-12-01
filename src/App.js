import './App.css';
import Header from './Header/Header';
import About from './About/About';
import Projects from './Projects/Projects';
import Testimonials from './Testimonials/Testimonials';
import Services from './Services/Services';
import News from './News/News';
import Counter from './Counter/Counter';
import Team from './Team/Team';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials />
      <Services />
      <News />
      <Counter />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;