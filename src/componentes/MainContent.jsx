import React from 'react';
import MainNovedades from './MainNovedades';
import MainUltimosProyectos from './MainUltimosProyectos';
import MainGaleria from './MainGaleria';
import '../assets/scss/_03-Componentes/_MainContent.scss';

const MainContent = ({ showModal, darkMode }) => {
  return (
    <div className={`content-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="content-block">
        <MainNovedades darkMode={darkMode} />
      </div>
      
      <div className="content-separator">
        <div className="separator-line"></div>
        <div className="separator-icon">
          <i className="bi bi-code-slash"></i>
        </div>
      </div>
      
      <div className="content-block">
        <MainUltimosProyectos showModal={showModal} darkMode={darkMode} />
      </div>
      
      <div className="content-separator">
        <div className="separator-line"></div>
        <div className="separator-icon">
          <i className="bi bi-images"></i>
        </div>
      </div>
      
      <div className="content-block">
        <MainGaleria darkMode={darkMode} />
      </div>
    </div>
  );
};

export default MainContent;