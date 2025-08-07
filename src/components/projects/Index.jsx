import React, { useState } from 'react';
import './index.css';
import { FiGithub, FiExternalLink, FiChevronRight, FiX } from 'react-icons/fi';
import projects from '../../data/Projects';

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2 className="section-title">
          <span className="text-gradient">Project Archive</span>
        </h2>
        <p className="section-subtitle">Detailed view of all my projects</p>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img 
                src={'/images/projects/'+project.images[0]} 
                alt={project.title} 
                onClick={() => openImageModal('/images/projects/'+project.images[0])}
              />
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              {/* Additional images row */}
              <div className="project-images-row">
                {project.images.slice(1, 4).map((image, index) => (
                  <div className="project-thumbnail" key={index}>
                    <img 
                      src={'/images/projects/'+image} 
                      alt={`${project.title} screenshot ${index + 1}`}
                      onClick={() => openImageModal('/images/projects/'+image)}
                    />
                  </div>
                ))}
              </div>

              <div className="project-tech">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tech-tag">{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  <FiGithub className="link-icon" /> View Code
                  <FiChevronRight className="arrow-icon" />
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  <FiExternalLink className="link-icon" /> Live Demo
                  <FiChevronRight className="arrow-icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeImageModal}>
              <FiX />
            </button>
            <img src={selectedImage} alt="Enlarged view" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;