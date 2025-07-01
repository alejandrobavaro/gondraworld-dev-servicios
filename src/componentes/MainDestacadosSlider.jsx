import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useDestacados } from "./TiendaDestacadosContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/scss/_03-Componentes/_MainDestacadosSlider.scss';

const MainDestacadosSlider = () => {
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
        
        // Filtrar servicios destacados o seleccionar aleatorios
        const serviciosDestacados = data.filter(servicio => 
          destacados.includes(servicio.id)
        ).length > 0 
          ? data.filter(servicio => destacados.includes(servicio.id))
          : [...data].sort(() => 0.5 - Math.random()).slice(0, 4);
        
        setServicios(serviciosDestacados);
      } catch (err) {
        setError(err.message);
        // Servicio por defecto en caso de error
        setServicios([{
          id: 1,
          nombre: "Servicio Destacado",
          precio: 999,
          imagenes: ["/img/default-service.png"],
          categoria: "web",
          descripcion: "Nuestro servicio más popular este mes"
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
    autoplaySpeed: 5000,
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

  if (loading) return <div className="gwd-loading">CARGANDO SERVICIOS DESTACADOS...</div>;
  if (error) return <div className="gwd-error">ERROR: {error}</div>;

  return (
    <section className="gwd-destacados" aria-labelledby="servicios-destacados">
      <div className="gwd-destacados-header">
        <h2 className="gwd-destacados-title" id="servicios-destacados">SERVICIOS DESTACADOS</h2>
        <div className="gwd-divider"></div>
      </div>
      
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
                />
                <div className="gwd-slide-info">
                  <h3 className="gwd-slide-name">{servicio.nombre}</h3>
                  <p className="gwd-slide-desc">{servicio.descripcion}</p>
                  <div className="gwd-slide-price">
                    ${servicio.precio.toLocaleString()}
                    <span className="gwd-price-month">/proyecto</span>
                  </div>
                </div>
                <div className="gwd-slide-badge">POPULAR</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="gwd-thumbnails-container">
        <h3 className="gwd-thumbnails-title">NUESTROS SERVICIOS</h3>
        <div className="gwd-thumbnails-grid">
          {servicios.map((servicio) => (
            <div key={`thumb-${servicio.id}`} className="gwd-thumbnail-item">
              <img
                src={servicio.imagenes[0]}
                alt={`Miniatura de ${servicio.nombre}`}
                className="gwd-thumbnail-img"
                loading="lazy"
              />
              <span className="gwd-thumbnail-label">{servicio.nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainDestacadosSlider;