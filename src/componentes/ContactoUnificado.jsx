import React, { useState } from "react";
import Slider from "react-slick";
import { 
  FaFacebook, FaInstagram, FaYoutube, FaSpotify, FaPaypal,
  FaUser, FaPhone, FaEnvelope, FaComment, FaPaperPlane 
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/scss/_03-Componentes/_ContactoUnificado.scss";

const ContactoUnificado = () => {
  const [activeTab, setActiveTab] = useState("redes");
  const redes = [
    {
      icon: <FaFacebook className="ContactoUnificado-icono" size={24} />,
      text: "Facebook",
      url: "https://www.facebook.com/gondraworld"
    },
    {
      icon: <FaInstagram className="ContactoUnificado-icono" size={24} />,
      text: "Instagram",
      url: "https://www.instagram.com/gondraworld"
    },
    {
      icon: <FaYoutube className="ContactoUnificado-icono" size={24} />,
      text: "YouTube",
      url: "https://www.youtube.com/gondraworld"
    },
    {
      icon: <FaSpotify className="ContactoUnificado-icono" size={24} />,
      text: "Spotify",
      url: "https://open.spotify.com/gondraworld"
    },
    {
      icon: <MdEmail className="ContactoUnificado-icono" size={24} />,
      text: "Email",
      url: "mailto:ContactoUnificado@gondraworld.com"
    },
    {
      icon: <FaPaypal className="ContactoUnificado-icono" size={24} />,
      text: "Donaciones",
      url: "https://www.paypal.com/gondraworld"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true
  };

  return (
    <div className="ContactoUnificado-unificado-container">
      <div className="ContactoUnificado-cinta-top"></div>
      
      <h1 className="ContactoUnificado-titulo-principal">CONTACTA A GONDRA WORLD</h1>
      
      <div className="ContactoUnificado-tabs">
        <button 
          className={`ContactoUnificado-tab ${activeTab === "redes" ? "active" : ""}`}
          onClick={() => setActiveTab("redes")}
        >
          REDES SOCIALES
        </button>
        <button 
          className={`ContactoUnificado-tab ${activeTab === "formulario" ? "active" : ""}`}
          onClick={() => setActiveTab("formulario")}
        >
          FORMULARIO
        </button>
      </div>
      
      <div className="ContactoUnificado-contenido">
        {activeTab === "redes" ? (
          <div className="ContactoUnificado-redes">
            <div className="ContactoUnificado-logo-container">
              <img
                src="/img/logos/gondra-world-logo.png"
                alt="Gondra World"
                className="ContactoUnificado-logo"
              />
            </div>
            
            <div className="ContactoUnificado-redes-grid">
              {redes.map((red, index) => (
                <a
                  key={index}
                  href={red.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ContactoUnificado-red-item"
                >
                  {red.icon}
                  <span>{red.text}</span>
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div className="ContactoUnificado-formulario-container">
            <form
              className="ContactoUnificado-formulario"
              action="https://formspree.io/f/xbjnlgzz"
              target="_blank"
              method="post"
            >
              <div className="formulario-grupo">
                <label htmlFor="nombre">
                  <FaUser className="formulario-icono" /> NOMBRE:
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Tu nombre..."
                  required
                />
              </div>
              
              <div className="formulario-grupo">
                <label htmlFor="telefono">
                  <FaPhone className="formulario-icono" /> TELÉFONO:
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder="Tu teléfono..."
                />
              </div>
              
              <div className="formulario-grupo">
                <label htmlFor="email">
                  <FaEnvelope className="formulario-icono" /> EMAIL:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Tu email..."
                  required
                />
              </div>
              
              <div className="formulario-grupo">
                <label htmlFor="asunto">
                  <FaComment className="formulario-icono" /> ASUNTO:
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  placeholder="¿Cómo podemos ayudarte?"
                  required
                />
              </div>
              
              <div className="formulario-grupo">
                <label htmlFor="mensaje">
                  <FaComment className="formulario-icono" /> MENSAJE:
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  placeholder="Describe tu proyecto o consulta..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="formulario-boton">
                <span>ENVIAR MENSAJE</span>
                <FaPaperPlane className="boton-icono" />
              </button>
            </form>
            
            <div className="ContactoUnificado-slider">
              <Slider {...settings}>
                <div className="slider-item">
                  <img 
                    src="/img/gifs/gondra-world-1.gif" 
                    alt="Diseño web Gondra World"
                  />
                </div>
                <div className="slider-item">
                  <img 
                    src="/img/gifs/gondra-world-2.gif" 
                    alt="Desarrollo web"
                  />
                </div>
              </Slider>
            </div>
          </div>
        )}
      </div>
      
      <div className="ContactoUnificado-cinta-bottom"></div>
    </div>
  );
};

export default ContactoUnificado;