import React, { useState } from 'react';
import '../assets/scss/_03-Componentes/_ProyectosCard.scss';

const ProyectosCard = ({ proyecto }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!proyecto) {
    return (
      <div className="project-card error">
        <div className="project-error-message">
          Información no disponible
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`project-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={proyecto.url || '#'} target="_blank" rel="noopener noreferrer">
        <div className="image-container">
          <img 
            src={proyecto.imagen || '../../img/02-logos/logogondraworld1.png'} 
            alt={proyecto.nombre || 'Proyecto'} 
            className={`project-image ${proyecto.imagenTipo === 'banner' ? 'banner-image' : 'logo-image'}`}
            loading="lazy"
            onError={(e) => {
              e.target.src = '/img/placeholder-project.jpg';
            }}
          />
        </div>
        <div className="project-overlay">
          <div className="project-info">
            <h3>{proyecto.nombre || 'Proyecto sin nombre'}</h3>
            <p>{proyecto.tipo || 'Tipo no especificado'}</p>
            <div className="project-tech">
              {(proyecto.tecnologias || []).slice(0, 3).map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProyectosCard;