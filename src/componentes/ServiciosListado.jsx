import React, { useState } from "react";
import ServiciosCard from "./ServiciosCard";
import "../assets/scss/_03-Componentes/_ServiciosListado.scss";

const ServiciosListado = ({ servicios, categoria }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="servicios-listado">
      <div className="listado-header">
    
      </div>
      
      <div className="lista-servicios">
        {servicios.map(servicio => (
          <div 
            key={servicio.id} 
            className={`servicio-item ${expandedId === servicio.id ? 'expanded' : ''}`}
          >
            <div 
              className="servicio-resumen"
              onClick={() => toggleExpand(servicio.id)}
            >
              <div className="servicio-icono">
                <img 
                  src={servicio.imagenes[0]} 
                  alt={`Icono ${servicio.nombre}`}
                  className="icono-img"
                  loading="lazy"
                />
              </div>
              
              <div className="servicio-info">
                <h3>{servicio.nombre}</h3>
                <div className="servicio-meta">
                  <span className="servicio-categoria">{servicio.categoria}</span>
                  <span className="servicio-precio">${servicio.precio.toLocaleString('es-AR')}</span>
                  {servicio.precioAnterior && (
                    <span className="servicio-precio-anterior">${servicio.precioAnterior.toLocaleString('es-AR')}</span>
                  )}
                </div>
              </div>
              
              <div className="servicio-tech">
                {servicio.tecnologias.slice(0, 3).map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <button 
                className="servicio-toggle"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleExpand(servicio.id);
                }}
              >
                {expandedId === servicio.id ? '−' : '+'}
              </button>
            </div>
            
            {expandedId === servicio.id && (
              <div className="servicio-detalle">
                <div className="detalle-contenido">
                  <div className="detalle-columna">
                    <div className="detalle-seccion">
                      <h4>Descripción</h4>
                      <p>{servicio.descripcionCompleta}</p>
                    </div>
                    
                    <div className="detalle-seccion">
                      <h4>Incluye</h4>
                      <ul>
                        {servicio.incluye.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="detalle-columna">
                    <div className="detalle-seccion">
                      <h4>Beneficios</h4>
                      <ul className="beneficios-list">
                        {servicio.beneficios.map((beneficio, index) => (
                          <li key={index}>
                            <span className="beneficio-icon">✓</span>
                            {beneficio}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="detalle-seccion">
                      <h4>Tecnologías</h4>
                      <div className="tech-list">
                        {servicio.tecnologias.map(tech => (
                          <span key={tech} className="tech-item">{tech}</span>
                        ))}
                      </div>
                    </div>
                    
                    {servicio.promocion && (
                      <div className="promo-badge">
                        <span>{servicio.promocion}</span>
                      </div>
                    )}
                    
                    <button className="servicio-contacto">
                      Contratar este servicio
                    </button>
                  </div>
                </div>
                
                <div className="servicio-galeria">
                  {servicio.imagenes.map((img, index) => (
                    <div key={index} className="galeria-item">
                      <img 
                        src={img} 
                        alt={`${servicio.nombre} - Imagen ${index + 1}`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiciosListado;