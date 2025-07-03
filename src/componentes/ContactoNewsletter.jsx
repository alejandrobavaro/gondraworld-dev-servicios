import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import "../assets/scss/_03-Componentes/_ContactoNewsletter.scss";

const ContactoNewsletter = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Lógica para manejar el envío del formulario
      console.log("Formulario de newsletter enviado");
    };
  
    return (
      <section className="contacto-newsletter">
        <div className="contacto-newsletter-contenedor">
          <div className="contacto-newsletter-texto">
            <h2 className="contacto-newsletter-titulo">Suscríbete a nuestro newsletter</h2>
            <p className="contacto-newsletter-descripcion">
           Recibe el Gondra World News y mantente actualizado con nuestros proyectos y servicios
            </p>

  
            <div className="contacto-newsletter-linea"></div>
          </div>
          
          <form className="contacto-newsletter-formulario" onSubmit={handleSubmit}>
            <div className="contacto-newsletter-grupo">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="contacto-newsletter-input"
                required 
              />
              <button type="submit" className="contacto-newsletter-boton">
                <span>Suscribirse</span>
                <FaPaperPlane className="contacto-newsletter-icono" />
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactoNewsletter;



