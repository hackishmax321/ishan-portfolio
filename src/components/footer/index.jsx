import React from 'react';
import './index.css';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart, FiFacebook } from 'react-icons/fi';
import { FaReact } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-title">
              <span className="text-gradient">Ishan_Gayantha</span>
            </h3>
            <p className="footer-description">
              A passionate frontend developer creating modern, responsive web experiences.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="links-column">
              <h4 className="links-title">Navigation</h4>
              <ul className="links-list">
                <li><a href="#home" className="footer-link">Home</a></li>
                <li><a href="#about" className="footer-link">About</a></li>
                <li><a href="#projects" className="footer-link">Projects</a></li>
                <li><a href="#skills" className="footer-link">Skills</a></li>
              </ul>
            </div>
            
            <div className="links-column">
              <h4 className="links-title">Connect</h4>
              <ul className="links-list">
                <li><a href="mailto:hackishmax@gmail.com" className="footer-link">Email</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a></li>
                <li><a href="/cv/Ishan_CV.pdf" target="_blank" className="footer-link">Resume</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-social">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FiGithub size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FiLinkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FiFacebook size={20} />
          </a>
          <a href="mailto:you@example.com" className="social-icon">
            <FiMail size={20} />
          </a>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Made with <FiHeart className="heart-icon" /> and <FaReact className="react-icon" />
          </p>
          <p className="footer-note">
            Designed & Built by Ishan_Gayantha
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;