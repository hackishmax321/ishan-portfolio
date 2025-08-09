import React, { useState } from 'react';
import './index.css';
import { FiGithub, FiExternalLink, FiX, FiImage } from 'react-icons/fi';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import projects from '../../data/Projects';

function Works() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleImageError = (projectId, imageIndex) => {
    setImageErrors(prev => ({
      ...prev,
      [`${projectId}-${imageIndex}`]: true
    }));
  };

  return (
    <section className="works section__wrapper" id="works">
      <div className="section__header">
        <h2 className="section__title">
          <span className="text-gradient">My Projects</span>
        </h2>
        <p className="section__subtitle">Some of my recent work</p>
      </div>

      <div className="projects__container">
        {projects.map((project) => (
          <div className="project__card" key={project.id}>
            <div className="project__image">
              {imageErrors[`${project.id}-0`] ? (
                <div className="image__placeholder">
                  <FiImage size={48} />
                </div>
              ) : (
                <img 
                  src={'/images/projects/'+project.images[0]} 
                  alt={project.title} 
                  onClick={() => openImageModal('/images/projects/'+project.images[0])}
                  onError={() => handleImageError(project.id, 0)}
                />
              )}
              <div className="project__overlay">
                <div className="project__links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project__link">
                    <FiGithub size={20} /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project__link">
                    <FiExternalLink size={20} /> Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="project__content">
              <h3 className="project__title">{project.title}</h3>
              <p className="project__description">{project.description}</p>
              
              {/* Additional images row */}
              <div className="project__thumbnails">
                {project.images.slice(1, 4).map((image, index) => (
                  <div 
                    className="project__thumbnail" 
                    key={index}
                    onClick={() => openImageModal('/images/projects/'+image)}
                  >
                    {imageErrors[`${project.id}-${index+1}`] ? (
                      <div className="thumbnail__placeholder">
                        <FiImage size={24} />
                      </div>
                    ) : (
                      <img 
                        src={'/images/projects/'+image} 
                        alt={`${project.title} screenshot ${index + 1}`}
                        onError={() => handleImageError(project.id, index+1)}
                      />
                    )}
                  </div>
                ))}
              </div>
              
              <div className="project__tech">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tech__tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="tech__showcase">
        <h4 className="showcase__title">Technologies I Work With</h4>
        <div className="tech__icons">
          <div className="tech__icon">
            <FaReact size={32} />
            <span>React</span>
          </div>
          <div className="tech__icon">
            <SiNextdotjs size={32} />
            <span>Next.js</span>
          </div>
          <div className="tech__icon">
            <SiTypescript size={32} />
            <span>TypeScript</span>
          </div>
          <div className="tech__icon">
            <SiTailwindcss size={32} />
            <span>Tailwind</span>
          </div>
          <div className="tech__icon">
            <FaNodeJs size={32} />
            <span>Node.js</span>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image__modal" onClick={closeImageModal}>
          <div className="modal__content" onClick={e => e.stopPropagation()}>
            <button className="modal__close" onClick={closeImageModal}>
              <FiX size={24} />
            </button>
            {selectedImage ? (
              <img src={selectedImage} alt="Enlarged preview" />
            ) : (
              <div className="modal__placeholder">
                <FiImage size={64} />
                <p>Image not available</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Works;