import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/about';
import Header from './components/header';
import NavBar from './components/navbar';
import Services from './components/services';
import Skills from './components/skills';
import Works from './components/works';
import Home from './components/home';
import Footer from './components/footer';
import Projects from './components/projects/Index';
import Profile from './components/profile/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Profile />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/works" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
