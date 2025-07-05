import React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/_03-Componentes/_ServiciosCard.scss";

const ServiciosCard = ({ servicio }) => {
  return (
    <div className="servicio-card">
      <div className="card-header">
        <img 
          src={servicio.imagenes[0]} 
          alt={servicio.nombre}
          className="card-image"
          loading="lazy"
          onError={(e) => e.target.src = '/img/default-service.png'}
        />
        {servicio.destacado && <span className="destacado-badge">Destacado</span>}
      </div>
      
      <div className="card-body">
        <h3 className="card-title">{servicio.nombre}</h3>
        <p className="card-description">{servicio.resumen}</p>
        
        <div className="card-precio">
          {servicio.precioAnterior && (
            <span className="precio-anterior">${servicio.precioAnterior.toLocaleString('es-AR')}</span>
          )}
          <span className="precio-actual">${servicio.precio.toLocaleString('es-AR')}</span>
        </div>
        
        {servicio.promocion && (
          <div className="card-promo">{servicio.promocion}</div>
        )}
      </div>
      
      <div className="card-footer">
        <Link to={`/servicios/${servicio.id}`} className="card-link">
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default ServiciosCard;