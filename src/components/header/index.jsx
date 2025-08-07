import React from 'react';
import './index.css';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

function Header() {
  return (
    <header className="header" id="home">
      <div className="header-container">
        <div className="header-content">
          <h1 className="header-title">
            <span className="text-gradient">Hello, I'm</span>
            <span className="shine">ISHAN GAYANTHA</span>
          </h1>
          <h2 className="header-subtitle">
            <span className="text-muted">I build </span>
            <span className="text-rotate">
              <span>web applications</span>
              <span>user experiences</span>
              <span>mobile applicationss</span>
              {/* <span>digital solutions</span> */}
            </span>
          </h2>
          <p className="header-description">
            A passionate frontend developer specializing in modern JavaScript frameworks
            and creating responsive, user-friendly web applications.
          </p>
          <div className="header-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <FiArrowRight className="icon-right" />
            </a>
            <a href="/cv/Ishan_CV.pdf" download className="btn btn-outline">
              Download CV <FiDownload className="icon-right" />
            </a>
          </div>
        </div>
        <div className="header-image">
          <div className="image-wrapper">
            <div className="glow-effect"></div>
            <img 
              src="/images/user.jpg" 
              alt="Developer" 
              className="developer-image"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;