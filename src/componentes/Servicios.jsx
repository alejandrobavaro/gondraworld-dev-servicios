import React from "react";
import { Link } from "react-router-dom";
import ServiciosDestacadosGaleria from './ServiciosDestacadosGaleria';
import "../assets/scss/_03-Componentes/_Servicios.scss";

const Servicios = () => {
  const services = [
    {
      id: 1,
      title: "Desarrollo Web",
      description: "Creación de sitios web a medida con las últimas tecnologías",
      icon: "bi bi-code-slash"
    },
    {
      id: 2,
      title: "Diseño UI/UX",
      description: "Interfaces intuitivas y atractivas para tus usuarios",
      icon: "bi bi-palette"
    },
    {
      id: 3,
      title: "Frontend Development",
      description: "Implementación de diseños con React y frameworks modernos",
      icon: "bi bi-laptop"
    },
    {
      id: 4,
      title: "Consultoría",
      description: "Asesoramiento técnico para tu proyecto digital",
      icon: "bi bi-chat-square-text"
    }
  ];

  return (
    <section className="servicios-section">
      <div className="servicios-container">

              <ServiciosDestacadosGaleria />


        <p className="servicios-subtitle">Soluciones profesionales a tu medida</p>
        
        <div className="servicios-grid">
          {services.map((service) => (
            <div key={service.id} className="servicio-card">
              <div className="servicio-icon-container">
                <i className={service.icon}></i>
              </div>
              <h3 className="servicio-title">{service.title}</h3>
              <p className="servicio-description">{service.description}</p>
              <Link 
                to={`/#/${service.id}`} 
                className="servicio-link"
              >
                Más información
              </Link>
            </div>
          ))}
        </div>

  
      </div>
    </section>
  );
};

export default Servicios;