import React from 'react';
import './index.css';
import { FiAward, FiBriefcase, FiCode } from 'react-icons/fi';
import { FaReact } from 'react-icons/fa';

function About() {
  return (
    <section className="about section__wrapper" id="about">
      <div className="section__header">
        <h2 className="section__title">
          <span className="text-gradient">About Me</span>
        </h2>
        <p className="section__subtitle">Get to know me better</p>
      </div>

      <div className="about__container">
        <div className="about__image">
          <div className="image__wrapper">
            <div className="glow__effect"></div>
            <img 
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Profile" 
              className="profile__image"
            />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </div>

            <div className="about__card">
              <FiBriefcase className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </div>

            <div className="about__card">
              <FiCode className="about__icon" />
              <h5>Technologies</h5>
              <small>10+ Mastered</small>
            </div>
          </div>

          <p className="about__text">
            I'm a passionate frontend developer with expertise in creating modern, responsive web applications. 
            My journey in web development began 3 years ago, and since then I've helped numerous clients 
            bring their ideas to life through clean, efficient code and intuitive user interfaces.
          </p>

          <p className="about__text">
            My core stack includes <span className="highlight">React.js</span>, <span className="highlight">Next.js</span>, 
            and <span className="highlight">TypeScript</span>, with extensive experience in modern CSS frameworks. 
            I'm dedicated to writing maintainable code and creating exceptional user experiences.
          </p>

          <div className="tech__stack">
            <h4>Tech Stack:</h4>
            <div className="tech__items">
              <div className="tech__item">
                <FaReact className="tech__icon" />
                <span>React</span>
              </div>
              <div className="tech__item">
                <i className="devicon-javascript-plain"></i>
                <span>JavaScript</span>
              </div>
              <div className="tech__item">
                <i className="devicon-typescript-plain"></i>
                <span>TypeScript</span>
              </div>
              <div className="tech__item">
                <i className="devicon-nextjs-plain"></i>
                <span>Next.js</span>
              </div>
              <div className="tech__item">
                <i className="devicon-tailwindcss-plain"></i>
                <span>Tailwind</span>
              </div>
              <div className="tech__item">
                <i className="devicon-nodejs-plain"></i>
                <span>Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;