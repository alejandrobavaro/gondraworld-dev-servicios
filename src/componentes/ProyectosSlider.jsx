import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import '../assets/scss/_03-Componentes/_ProyectosSlider.scss';

const ProyectosSlider = () => {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProyectos = async () => {
      try {
        const response = await fetch('/proyectos.json');
        if (!response.ok) throw new Error('Error al cargar proyectos');
        let data = await response.json();
        data = data.sort(() => Math.random() - 0.5);
        setProyectos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProyectos();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  if (loading) return <div className="slider-loading">CARGANDO PROYECTOS...</div>;
  if (error) return <div className="slider-error">ERROR: {error}</div>;

  return (
    <div className="proyectos-slider-container">
     
      
      <div className="slider-wrapper">
        <Slider {...settings}>
          {proyectos.map(proyecto => (
            <div key={`slide-${proyecto.id}`} className="project-slide">
              <div className="project-card">
                <div className="card-image">
                  <img 
                    src={proyecto.imagen} 
                    alt={proyecto.nombre}
                    className={`project-logo ${proyecto.imagenTipo === 'banner' ? 'banner-image' : ''}`}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = '/img/placeholder-project.jpg';
                    }}
                  />
                </div>
                <div className="card-content">
                  <h3>{proyecto.nombre}</h3>
                  <div className="project-meta">
                    <span className="project-type">{proyecto.tipo}</span>
                    <span className="project-client">{proyecto.cliente}</span>
                    <span className="project-duration">{proyecto.duracion}</span>
                  </div>
                  <p className="project-description">{proyecto.descripcion}</p>
                  <div className="project-results">
                    {proyecto.resultados && proyecto.resultados.length > 0 && (
                      <>
                        <h4>Resultados:</h4>
                        <ul>
                          {proyecto.resultados.slice(0, 2).map((resultado, i) => (
                            <li key={`result-${proyecto.id}-${i}`}>{resultado}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
                <div className="card-footer">
                  <a 
                    href={proyecto.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    Ver Proyecto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProyectosSlider;