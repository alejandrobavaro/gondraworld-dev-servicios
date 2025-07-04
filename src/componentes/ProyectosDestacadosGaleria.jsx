import React, { useState, useEffect } from 'react';
import ProyectosCard from './ProyectosCard';
import '../assets/scss/_03-Componentes/_ProyectosDestacadosGaleria.scss';

const ProyectosDestacadosGaleria = () => {
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

  if (loading) return <div className="novedades-loading">Cargando proyectos destacados...</div>;
  if (error) return <div className="novedades-error">Error: {error}</div>;

  const proyectosDestacados = proyectos.filter(proyecto => proyecto?.destacado);

  return (
    <section className="novedades-section">
      <h2 className="section-title">PROYECTOS DESTACADOS</h2>
      <div className="novedades-grid">
        {proyectosDestacados.map(proyecto => (
          <ProyectosCard key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </section>
  );
};

export default ProyectosDestacadosGaleria;