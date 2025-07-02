import React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/_03-Componentes/_Footer.scss";

function Footer() {
  return (
    <div className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img 
            src="../../public/img/05-gif/1logoanimadogif2a.gif" 
            alt="Gondra World Logo" 
            className="brand-logo"
            loading="lazy"
          />
        </div>

        <div className="footer-sections">
          <div className="footer-section">
            <h3 className="section-heading">Contacto</h3>
            <div className="contact-info">
              <a href="#" className="contact-item">
                <i className="bi bi-geo-alt-fill"></i>
                <span>Av. Desarrollo Web 1234</span>
              </a>
              <a href="tel:+1234567890" className="contact-item">
                <i className="bi bi-telephone-fill"></i>
                <span>(123) 456-7890</span>
              </a>
              <div className="contact-item">
                <i className="bi bi-clock-fill"></i>
                <span>9AM - 6PM</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="section-heading">ENLACES</h3>
            <nav className="footer-links">
              <Link to="/about" className="footer-link">NOSOTROS</Link>
              <Link to="/terms" className="footer-link">TÉRMINOS</Link>
              <Link to="/privacy" className="footer-link">PRIVACIDAD</Link>
              <Link to="/contact" className="footer-link">Contacto</Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="footer-social">
        <div className="social-links">
          <a href="https://www.instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://www.youtube.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          © {new Date().getFullYear()} TODOS LOS DERECHOS RESERVADOS
        </p>
        <p className="credits">
          <a href="https://alejandrobavaro.github.io/gondraworld-dev/" target="_blank" rel="noopener noreferrer">GONDRA WORLD DEV</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;