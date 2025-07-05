import React, { useState, useEffect } from 'react';
import '../assets/scss/_03-Componentes/_ProyectosListado.scss';

const ProyectosListado = () => {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const fetchProyectos = async () => {
      try {
        const response = await fetch('/proyectos.json');
        if (!response.ok) throw new Error('Error al cargar proyectos');
        const data = await response.json();
        setProyectos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProyectos();
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (loading) return <div className="listado-loading">CARGANDO PORTAFOLIO...</div>;
  if (error) return <div className="listado-error">ERROR: {error}</div>;

  return (
    <div className="listado-compacto">
      <div className="listado-header">
        <h2>PROYECTOS GONDRA WORLD DEV</h2>
        <p>Selecciona un proyecto para ver detalles completos</p>
      </div>
      
      <div className="lista-proyectos">
        {proyectos.map(proyecto => (
          <div 
            key={proyecto.id} 
            className={`proyecto-item ${expandedId === proyecto.id ? 'expanded' : ''}`}
          >
            <div 
              className="proyecto-resumen"
              onClick={() => toggleExpand(proyecto.id)}
            >
              <div className="proyecto-logo">
                <img 
                  src={proyecto.imagen} 
                  alt={`Logo ${proyecto.nombre}`}
                  className="logo-img"
                  loading="lazy"
                />
              </div>
              
              <div className="proyecto-info">
                <h3>{proyecto.nombre}</h3>
                <div className="proyecto-meta">
                  <span className="proyecto-tipo">{proyecto.tipo}</span>
                  <span className="proyecto-cliente">{proyecto.cliente}</span>
                  <span className="proyecto-fecha">{proyecto.fecha}</span>
                </div>
              </div>
              
              <div className="proyecto-tech">
                {proyecto.tecnologias.slice(0, 3).map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <button 
                className="proyecto-toggle"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleExpand(proyecto.id);
                }}
              >
                {expandedId === proyecto.id ? '−' : '+'}
              </button>
            </div>
            
            {expandedId === proyecto.id && (
              <div className="proyecto-detalle">
                <div className="detalle-contenido">
                  <div className="detalle-columna">
                    <div className="detalle-seccion">
                      <h4>Descripción</h4>
                      <p>{proyecto.descripcionDetallada}</p>
                    </div>
                    
                    <div className="detalle-seccion">
                      <h4>Contexto</h4>
                      <p>{proyecto.contexto}</p>
                    </div>
                    
                    <div className="detalle-seccion">
                      <h4>Objetivos</h4>
                      <ul>
                        {proyecto.objetivos.map((obj, index) => (
                          <li key={index}>{obj}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="detalle-columna">
                    <div className="detalle-seccion">
                      <h4>Resultados</h4>
                      <ul className="resultados-list">
                        {proyecto.resultados.map((res, index) => (
                          <li key={index}>
                            <span className="resultado-icon">✓</span>
                            {res}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="detalle-seccion">
                      <h4>Tecnologías</h4>
                      <div className="tech-list">
                        {proyecto.tecnologias.map(tech => (
                          <span key={tech} className="tech-item">{tech}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="logo-detalle">
                      <img 
                        src={proyecto.imagen} 
                        alt={`Logo ${proyecto.nombre}`}
                        className="logo-img-detalle"
                        loading="lazy"
                      />
                    </div>
                    
                    <a 
                      href={proyecto.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="proyecto-link"
                    >
                      Ver proyecto en vivo
                    </a>
                  </div>
                </div>
                
                <div className="proyecto-galeria">
                  {proyecto.imagenes.map((img, index) => (
                    <div key={index} className="galeria-item">
                      <img 
                        src={img} 
                        alt={`${proyecto.nombre} - Imagen ${index + 1}`}
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

export default ProyectosListado;