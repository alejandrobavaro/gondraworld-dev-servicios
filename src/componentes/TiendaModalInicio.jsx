import React from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import '../assets/scss/_03-Componentes/_TiendaModalInicio.scss';

Modal.setAppElement("#root");

const TiendaModalInicio = ({ showModal, closeModal }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    closeModal();
    navigate("/tienda");
  };

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={closeModal}
      contentLabel="Ofertas Tecnológicas"
      className="tienda-Modal"
      overlayClassName="tienda-Overlay"
      closeTimeoutMS={200}
    >
      <div className="tienda-modal-wrapper">
        <button 
          onClick={handleNavigation} 
          className="tienda-modal-close"
          aria-label="Cerrar modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18" stroke="#64ffda" strokeWidth="2" strokeLinecap="round"/>
            <path d="M6 6L18 18" stroke="#64ffda" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <div className="tienda-modal-content">
          <p className="tienda-tituloImportante">SOLUCIONES TECNOLÓGICAS</p>
          <div className="tienda-promo-list">
            <div className="tienda-promo-item tienda-promo-destacado">
              <span className="tienda-promo-icon">💻</span> WEBS PARA RESTAURANTES
            </div>
            <div className="tienda-promo-item">
              <span className="tienda-promo-icon">🛒</span> E-COMMERCE
            </div>
            <div className="tienda-promo-item">
              <span className="tienda-promo-icon">🔧</span> SERVICIO TÉCNICO
            </div>
            <div className="tienda-promo-item tienda-promo-destacado">
              <span className="tienda-promo-icon">📱</span> SISTEMAS QR
            </div>
            <div className="tienda-promo-item">
              <span className="tienda-promo-icon">🖥️</span> DESARROLLO WEB
            </div>
            <div className="tienda-promo-item">
              <span className="tienda-promo-icon">⚙️</span> MANTENIMIENTO
            </div>
          </div>
          <button onClick={handleNavigation} className="tienda-btn-primary">
            VER SERVICIOS
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default TiendaModalInicio;