import React from 'react';
import '../assets/scss/_03-Componentes/_MainWhatsappIcon.scss';

function MainWhatsappIcon() {
  return (
    <div className='whatsapp-floating-button'>
      <a
        href="https://api.whatsapp.com/send?phone=+542235455451&text=Hola!,%20en%20que%20puedo%20ayudarte?"
        className="whatsapp-link"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Contactar por WhatsApp"
      >
        <img
          alt="WhatsApp"
          className="whatsapp-icon"
          src="/img/02-logos/logowhattsapp1.png"
          loading="lazy"
        />
        <span className="whatsapp-tooltip">¿Necesitas ayuda?</span>
      </a>
    </div>
  );
}

export default MainWhatsappIcon;