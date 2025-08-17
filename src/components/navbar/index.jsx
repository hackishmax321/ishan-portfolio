import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';
import './index.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/services" className="nav-link" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/skills" className="nav-link" onClick={() => setIsOpen(false)}>Skills</Link>
            <Link to="/works" className="nav-link" onClick={() => setIsOpen(false)}>Works</Link>
          </div>
          
          <div className="nav-social">
            <a href="https://github.com/hackishmax321" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ishan-gayantha-9b2352166" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FiLinkedin size={20} />
            </a>
            <a href="mailto:ishangayantha998@gmail.com" className="social-icon">
              <FiMail size={20} />
            </a>
            <a href="/cv/Ishan_CV.pdf" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FiFileText size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;