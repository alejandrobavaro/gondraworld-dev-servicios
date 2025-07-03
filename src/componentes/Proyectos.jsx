import React from "react";
import { Link } from "react-router-dom";
import ProyectosGaleriaListado from './ProyectosGaleriaListado';


import "../assets/scss/_03-Componentes/_Proyectos.scss";

const Proyectos = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Web",
      description: "Diseño y desarrollo de portfolio profesional",
      image: "../../public/img/05-gif/web 1_4.gif",
      tags: ["React", "Sass", "Responsive"]
    },
    {
      id: 2,
      title: "E-commerce",
      description: "Tienda online con carrito de compras",
      image: "../../public/img/06-tienda/tienda1-.png",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 3,
      title: "Aplicación Móvil",
      description: "App para gestión de proyectos",
      image: "../../public/img/05-img-costados-larga/carrusellargo1.jpg",
      tags: ["React Native", "Firebase"]
    }
  ];

  return (
    <section className="proyectos-section">
      <div className="proyectos-container">
        <h1 className="proyectos-title">PROYECTOS</h1>
        <p className="proyectos-subtitle">Algunos de los trabajos recientes</p>
        
        <div className="proyectos-grid">
          {projects.map((project) => (
            <div key={project.id} className="proyecto-card">
              <div className="proyecto-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="proyecto-image"
                  loading="lazy"
                />
              </div>
              <div className="proyecto-content">
                <h3 className="proyecto-title">{project.title}</h3>
                <p className="proyecto-description">{project.description}</p>
                <div className="proyecto-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="proyecto-tag">{tag}</span>
                  ))}
                </div>
                <Link 
                  to={`/proyecto/${project.id}`} 
                  className="proyecto-link"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="content-block">
  <ProyectosGaleriaListado />
</div>
      </div>
    </section>
  );
};

export default Proyectos;