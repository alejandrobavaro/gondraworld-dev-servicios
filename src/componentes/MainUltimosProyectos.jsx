import React, { useState, useEffect } from 'react';
import MainProyectosCard from './MainProyectosCard';
import '../assets/scss/_03-Componentes/_MainUltimosProyectos.scss';

const MainUltimosProyectos = () => {
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

  if (loading) return <div className="main-loading">CARGANDO PROYECTOS...</div>;
  if (error) return <div className="main-error">ERROR: {error}</div>;

  const ultimosProyectos = [...proyectos]
    .sort((a, b) => new Date(b.fechaEstreno) - new Date(a.fechaEstreno))
    .slice(0, 4);

  return (
    <section className="main-ultimos-proyectos">
      <div className="content-container">
        <h2 className="main-ultimos-proyectos-title">ÚLTIMOS PROYECTOS</h2>
        <div className="main-ultimos-proyectos-grid">
          {ultimosProyectos.map(proyecto => (
            <MainProyectosCard key={proyecto.id} proyecto={proyecto} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainUltimosProyectos;