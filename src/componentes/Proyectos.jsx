import React from "react";
import ProyectosSlider from './ProyectosSlider';
import ProyectosListado from './ProyectosListado';
import "../assets/scss/_03-Componentes/_Proyectos.scss";

const Proyectos = () => {
  return (
    <section className="proyectos-section">
      <div className="proyectos-container">
    


        {/* Sección de listado completo */}
        <div className="listado-section">
                 <ProyectosListado />
        </div>


 
        <div className="destacados-section">
      
          <ProyectosSlider/>
        </div>

      </div>
    </section>
  );
};

export default Proyectos;