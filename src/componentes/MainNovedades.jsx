import React, { useState, useEffect } from 'react';
import MainProyectosCard from './MainProyectosCard';
import '../assets/scss/_03-Componentes/_MainNovedades.scss';

const MainNovedades = () => {
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
  if (loading) return <div className="loading-state">Cargando proyectos destacados...</div>;
  if (error) return <div className="error-state">Error: {error}</div>;

  const proyectosDestacados = proyectos.filter(proyecto => proyecto?.destacado);

  return (
    <section className="featured-projects">
      <h2 className="section-title">Proyectos Destacados</h2>
      <div className="projects-grid">
        {proyectosDestacados.map(proyecto => (
          <div key={proyecto?.id || Math.random()} className="project-item">
            <MainProyectosCard proyecto={proyecto} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainNovedades;