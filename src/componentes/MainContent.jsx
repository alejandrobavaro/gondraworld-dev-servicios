import React from 'react';
import MainBanner from './MainBanner';
import MainNovedades from './MainNovedades';
import MainUltimosProyectos from './MainUltimosProyectos';
import MainGaleria from './MainGaleria';
import MainDestacadosSlider from './MainDestacadosSlider';
import '../assets/scss/_03-Componentes/_MainContent.scss';

const MainContent = () => {
  return (
    <div className="main-content-wrapper">
      <MainBanner />
      
      <div className="content-block">
        <MainNovedades />
      </div>
      
      <div className="content-separator">
        <div className="separator-line"></div>
        <div className="separator-icon">
          <i className="bi bi-code-slash"></i>
        </div>
      </div>
      
      <div className="content-block">
        <MainUltimosProyectos />
      </div>
      
      <div className="content-separator">
        <div className="separator-line"></div>
        <div className="separator-icon">
          <i className="bi bi-images"></i>
        </div>
      </div>
      
      <div className="content-block">
        <MainGaleria />
      </div>

      <MainDestacadosSlider />
    </div>
  );
};

export default MainContent;