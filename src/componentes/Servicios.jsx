import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ServiciosSlider from './ServiciosSlider';
import ServiciosListado from './ServiciosListado';
import ServiciosCard from './ServiciosCard';
import "../assets/scss/_03-Componentes/_Servicios.scss";

const Servicios = () => {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoriaActiva, setCategoriaActiva] = useState("todos");

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await fetch("./servicios.json");
        if (!response.ok) throw new Error("Error al cargar servicios");
        const data = await response.json();
        setServicios(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServicios();
  }, []);

  // Categorías únicas para los filtros
  const categorias = ["todos", ...new Set(servicios.map(s => s.categoria))];

  // Filtrar servicios por categoría
  const serviciosFiltrados = categoriaActiva === "todos" 
    ? servicios 
    : servicios.filter(s => s.categoria === categoriaActiva);

  if (loading) return <div className="servicios-loading">Cargando servicios...</div>;
  if (error) return <div className="servicios-error">Error: {error}</div>;

  return (
    <section className="servicios-section">
      <div className="servicios-container">
        {/* Slider de servicios destacados */}
        <ServiciosSlider servicios={servicios.filter(s => s.destacado)} />
        
        {/* Encabezado y filtros */}
        <div className="servicios-header">
        
          
          <div className="servicios-filtros">
            {categorias.map(categoria => (
              <button
                key={categoria}
                className={`filtro-btn ${categoria === categoriaActiva ? 'active' : ''}`}
                onClick={() => setCategoriaActiva(categoria)}
              >
                {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Listado de servicios */}
        <ServiciosListado servicios={serviciosFiltrados} categoria={categoriaActiva} />
      </div>
    </section>
  );
};

export default Servicios;