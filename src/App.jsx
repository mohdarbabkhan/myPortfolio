import './index.css';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import Experience from './components/experience/Experience';
import Service from './components/services/Service';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
