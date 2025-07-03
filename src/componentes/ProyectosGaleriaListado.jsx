import React, { useState, useEffect } from 'react';
import ProyectosCard from './ProyectosCard';
import '../assets/scss/_03-Componentes/_ProyectosGaleriaListado.scss';

const ProyectosGaleriaListado = () => {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <div className="portfolio-loading">CARGANDO PROYECTOS...</div>;
  if (error) return <div className="portfolio-error">ERROR: {error}</div>;

  return (
    <section className="portfolio-completo">
      <div className="content-container">
        <h2 className="portfolio-completo-title">PROYECTOS LISTADO </h2>
        <div className="portfolio-completo-grid">
          {proyectos.map(proyecto => (
            <ProyectosCard key={proyecto.id} proyecto={proyecto} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProyectosGaleriaListado;