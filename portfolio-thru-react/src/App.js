import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Navbar from './components/Navbar';
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Footer from './components/footer';

function App() {
  return (
    // <Router>
      <div>
        <Navbar />
        <Header />
        <Aboutme />
        <Contact />
        <Resume />
        <Portfolio />
        <Footer />


        
      </div>
  );
}

export default App;
