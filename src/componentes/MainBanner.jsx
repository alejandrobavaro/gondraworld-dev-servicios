import React from 'react';
import '../assets/scss/_03-Componentes/_MainBanner.scss';

const MainBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h1 className="hero-title">Gondra World Dev</h1>
        <p className="hero-subtitle">Soluciones digitales a medida</p>
        <div className="hero-cta">
          <a href="#proyectos" className="cta-button">Ver Proyectos</a>
          <a href="#ContactoUnificado" className="cta-button outline">Contactar</a>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default MainBanner;