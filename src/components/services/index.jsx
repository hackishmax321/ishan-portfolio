import React from 'react';
import './index.css';
import { FiCode, FiSmartphone, FiServer, FiLayout } from 'react-icons/fi';
import services from '../../data/Services';

const getServiceIcon = (iconName) => {
  switch(iconName) {
    case 'web': return <FiLayout />;
    case 'design': return <FiCode />;
    case 'mobile': return <FiSmartphone />;
    case 'api': return <FiServer />;
    default: return <FiCode />;
  }
};

function Services() {
  return (
    <section className="services section__wrapper" id="services">
      <div className="section__header">
        <h2 className="section__title">
          <span className="text-gradient">My Services</span>
        </h2>
        <p className="section__subtitle">What I offer to my clients</p>
      </div>

      <div className="services__container">
        {services.map((service) => (
          <div className="service__card" key={service.id}>
            <div className="service__icon">
              {getServiceIcon(service.icon)}
            </div>
            <h3 className="service__title">{service.title}</h3>
            <p className="service__description">{service.description}</p>
            
            <ul className="service__features">
              {service.features.map((feature, index) => (
                <li key={index} className="feature__item">
                  <span className="feature__marker"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;