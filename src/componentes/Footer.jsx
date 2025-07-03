import React from "react";
import { Link } from "react-router-dom";
import { 
  FaFacebook, 
  FaInstagram, 
  FaYoutube, 
  FaPaypal,
  FaHome,
  FaLaptopCode,
  FaStore,
  FaEnvelope,
  FaUserTie,
  FaProjectDiagram
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../assets/scss/_03-Componentes/_Footer.scss";

function Footer() {
  const socialLinks = [
    {
      icon: <FaFacebook className="footer-social-icon" size={24} />,
      text: "Facebook",
      url: "https://www.facebook.com/alegondramusic"
    },
    {
      icon: <FaInstagram className="footer-social-icon" size={24} />,
      text: "Instagram",
      url: "https://www.instagram.com/alegondramusic/"
    },
    {
      icon: <FaYoutube className="footer-social-icon" size={24} />,
      text: "YouTube",
      url: "https://www.youtube.com/@almangopopmusic"
    },
    {
      icon: <MdEmail className="footer-social-icon" size={24} />,
      text: "Email",
      url: "mailto:bavaroalejandro@gmail.com"
    },
    {
      icon: <FaPaypal className="footer-social-icon" size={24} />,
      text: "Donaciones",
      url: "https://www.paypal.com/gondraworld"
    }, 

  ];

  const pageLinks = [

    {
      path: "/proyectos",
      icon: <FaProjectDiagram className="link-icon" />,
      text: "Proyectos"
    },
    {
      path: "/servicios",
      icon: <FaLaptopCode className="link-icon" />,
      text: "Servicios"
    },
    {
      path: "/ContactoUnificado",
      icon: <FaEnvelope className="link-icon" />,
      text: "Contacto"
    }


  ];

  return (
    <div className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img 
            src="../../img/05-gif/1logoanimadogif2a.gif" 
            alt="Gondra World Logo" 
            className="brand-logo"
            loading="lazy"
          />
        </div>

        <div className="footer-section">
            <h3 className="section-heading">CONTACTO</h3>
            <div className="contact-info">
              <div className="contact-item">
                <i className="bi bi-geo-alt-fill"></i>
                <span>Buenos Aires, Argentina</span>
              </div>
              <a href="mailto:bavaroalejandro@gmail.com" className="contact-item">
                <i className="bi bi-envelope-fill"></i>
                <span>bavaroalejandro@gmail.com</span>
              </a>
              <div className="contact-item">
                <i className="bi bi-clock-fill"></i>
                <span>Lun-Vie: 9 hs - 18 hs</span>
              </div>
            </div>
          </div>

        <div className="footer-sections">
          <div className="footer-section">
            <h3 className="section-heading">NAVEGACIÓN</h3>
            <nav className="footer-links">
              {pageLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.path}
                  className="footer-link"
                >
                  {link.icon}
                  <span>{link.text}</span>
                </Link>
              ))}
            </nav>
          </div>

         
        </div>
      </div>

      <div className="footer-social">
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.url}
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.text}
            >
              {social.icon}
              <span className="social-tooltip">{social.text}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          © {new Date().getFullYear()} GONDRA WORLD - TODOS LOS DERECHOS RESERVADOS
        </p>
        <p className="credits">
          <a href="https://alejandrobavaro.github.io/gondraworld-dev/" 
             target="_blank" 
             rel="noopener noreferrer">
            Desarrollado por Gondra World Dev
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;