import React from 'react';
import '../assets/scss/_03-Componentes/_SesionLoginRegister.scss';

const LoadingSpinner = () => {
  return (
    <div className="bb-loading-spinner">
      <div className="bb-spinner-animation">
        <div className="bb-spinner-circle"></div>
      </div>
      <p className="bb-loading-text">CARGANDO...</p>
    </div>
  );
};

export default LoadingSpinner;