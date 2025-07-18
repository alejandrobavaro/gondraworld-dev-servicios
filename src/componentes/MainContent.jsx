import React from 'react';
import MainBanner from './MainBanner';
import MainNovedades from './MainNovedades';
import ProyectosSlider from './ProyectosSlider';
import NuestroEquipoGondraWorld from "./NuestroEquipoGondraWorld";
import ContactoNewsletter from './ContactoNewsletter';
import ServiciosSlider from './ServiciosSlider';
import '../assets/scss/_03-Componentes/_MainContent.scss';

const MainContent = () => {
  return (
    <div className="main-content-wrapper">
      <MainBanner />
      
      <div className="content-section">
        <div className="content-block">
          <MainNovedades />
        </div>
      </div>
      
      <div className="content-separator">
        <div className="separator-line"></div>
        <div className="separator-icon">
          <i className="bi bi-code-slash"></i>
        </div>
      </div>
      
      <div className="content-section">
        <div className="content-block">
          <ServiciosSlider />
        </div>
      </div>
     
      <div className="content-separator">
        <div className="separator-line"></div>
        <div className="separator-icon">
          <i className="bi bi-code-slash"></i>
        </div>
      </div>
      
      <div className="content-section team-section">
        <NuestroEquipoGondraWorld />
      </div>

      <div className="content-separator">
        <div className="separator-line"></div>
        <div className="separator-icon">
          <i className="bi bi-code-slash"></i>
        </div>
      </div>
      
      <div className="content-section">
        <div className="content-block">
          <ProyectosSlider />
        </div>
      </div>
 
      <div className="content-separator">
        <div className="separator-line"></div>
        <div className="separator-icon">
          <i className="bi bi-code-slash"></i>
        </div>
      </div>
      
      <div className="content-section">
        <div className="content-block">
          <ContactoNewsletter />
        </div>
      </div>
    </div>
  );
};

export default MainContent;