import React from 'react';
import './index.css';
import { FaReact, FaNodeJs, FaFigma } from 'react-icons/fa';
import { DiJavascript, DiCss3 } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';
import skills from '../../data/Skills';

const getIcon = (iconName) => {
  switch(iconName) {
    case 'react': return <FaReact />;
    case 'javascript': return <DiJavascript />;
    case 'typescript': return <SiTypescript />;
    case 'nodejs': return <FaNodeJs />;
    case 'css': return <DiCss3 />;
    case 'design': return <FaFigma />;
    default: return <FaReact />;
  }
};

function Skills() {
  return (
    <section className="skills section__wrapper" id="skills">
      <div className="section__header">
        <h2 className="section__title">
          <span className="text-gradient">My Skills</span>
        </h2>
        <p className="section__subtitle">Technologies I work with</p>
      </div>

      <div className="skills__container">
        {skills.map((skill) => (
          <div className="skill__card" key={skill.id}>
            <div className="skill__header">
              <div className="skill__icon" style={{ color: skill.color }}>
                {getIcon(skill.icon)}
              </div>
              <div className="skill__title">
                <h3>{skill.name}</h3>
                <span>{skill.projects}+ projects</span>
              </div>
            </div>
            
            <div className="progress__container">
              <div 
                className="progress__bar" 
                style={{ 
                  width: `${skill.level}%`,
                  background: skill.color
                }}
              ></div>
              <span className="progress__value">{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;