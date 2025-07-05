import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useDestacados } from "./TiendaDestacadosContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/scss/_03-Componentes/_ServiciosSlider.scss';

const ServiciosSlider = () => {
  const { destacados } = useDestacados();
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await fetch("./servicios.json");
        if (!response.ok) throw new Error("Error al cargar servicios");
        const data = await response.json();
        
        const serviciosDestacados = data.filter(servicio => 
          servicio.destacado || destacados.includes(servicio.id)
        ).slice(0, 6); // Limitar a 6 servicios
        
        setServicios(serviciosDestacados);
      } catch (err) {
        setError(err.message);
        setServicios([{
          id: 1,
          nombre: "Servicio Destacado",
          precio: 250000,
          precioAnterior: 320000,
          promocion: "15% OFF en pago contado",
          imagenes: ["/img/default-service.png"],
          categoria: "web",
          resumen: "Nuestro servicio más popular este mes",
          destacado: true
        }]);
      } finally {
        setLoading(false);
      }
    };

    fetchServicios();
  }, [destacados]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    fade: true,
    cssEase: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="gwd-slider-arrow next" onClick={onClick} aria-label="Siguiente">
        <i className="bi bi-chevron-right"></i>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="gwd-slider-arrow prev" onClick={onClick} aria-label="Anterior">
        <i className="bi bi-chevron-left"></i>
      </div>
    );
  }

  if (loading) return (
    <div className="gwd-loading-container">
      <div className="gwd-loading">CARGANDO SERVICIOS DESTACADOS...</div>
    </div>
  );
  
  if (error) return (
    <div className="gwd-error-container">
      <div className="gwd-error">ERROR: {error}</div>
    </div>
  );

  return (
    <section className="gwd-destacados-container">
      <div className="gwd-destacados" aria-labelledby="servicios-destacados">
        <div className="gwd-destacados-header">
          <h2 className="gwd-destacados-title" id="servicios-destacados">NUESTROS SERVICIOS ESTRELLA</h2>
          <div className="gwd-divider"></div>
          <p className="gwd-destacados-subtitle">Soluciones profesionales para impulsar tu negocio</p>
        </div>
        
        <div className="gwd-slider-wrapper">
          <div className="gwd-slider-container">
            <Slider {...settings}>
              {servicios.map((servicio) => (
                <div key={servicio.id} className="gwd-slide-item">
                  <div className="gwd-slide-content">
                    <img
                      src={servicio.imagenes[0]}
                      alt={`Imagen de ${servicio.nombre}`}
                      className="gwd-slide-img"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = '/img/default-service.png';
                      }}
                    />
                    <div className="gwd-slide-info">
                      <h3 className="gwd-slide-name">{servicio.nombre}</h3>
                      <p className="gwd-slide-desc">{servicio.resumen}</p>
                      
                      <div className="gwd-price-container">
                        {servicio.precioAnterior && (
                          <span className="gwd-old-price">${servicio.precioAnterior.toLocaleString('es-AR')}</span>
                        )}
                        <div className="gwd-slide-price">
                          ${servicio.precio.toLocaleString('es-AR')}
                          <span className="gwd-price-month">/proyecto</span>
                        </div>
                      </div>
                      
                      {servicio.promocion && (
                        <div className="gwd-promo-badge">
                          <span>{servicio.promocion}</span>
                        </div>
                      )}
                    </div>
                    <div className="gwd-slide-badge">DESTACADO</div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="gwd-thumbnails-wrapper">
          <div className="gwd-thumbnails-grid">
            {servicios.map((servicio) => (
              <div key={`thumb-${servicio.id}`} className="gwd-thumbnail-item">
                <img
                  src={servicio.imagenes[0]}
                  alt={`Miniatura de ${servicio.nombre}`}
                  className="gwd-thumbnail-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = '/img/default-service.png';
                  }}
                />
                <div className="gwd-thumbnail-overlay">
                  <span className="gwd-thumbnail-label">{servicio.nombre}</span>
                  <span className="gwd-thumbnail-price">${servicio.precio.toLocaleString('es-AR')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSlider;