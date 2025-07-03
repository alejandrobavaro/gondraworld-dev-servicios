import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';
import "../assets/scss/_03-Componentes/_NuestroEquipoGondraWorld.scss";

const NuestroEquipoGondraWorld = () => {
  const teamMembers = [
    {
        id: 1,
        name: "Alejandro Bavaro",
        role: "Fundador & Frontend Lead",
        bio: "Especialista en React y desarrollo de interfaces de alta performance con más de 8 años de experiencia.",
        image: "/img/07-dataextra/Foto Ale 2.jpg",
        social: [
          { icon: <FaGithub />, url: "#" },
          { icon: <FaLinkedin />, url: "#" },
          { icon: <FaTwitter />, url: "#" }
        ]
      },
      {
        id: 2,
        name: "Fabiola Lutrario",
        role: "Desarrolladora Backend",
        bio: "Especialista en Backend, Bases de Datos, Sql, Mongo, Aws.",
     
        image: "/img/07-dataextra/Foto Fabi 1.JPG",
        social: [
          { icon: <FaLinkedin />, url: "#" },
          { icon: <FaGlobe />, url: "#" }
        ]
      },
      {
        id: 3,
        name: "Alejandro Bavaro",
        role: "Diseñador UI/UX",
        bio: "Experto en diseño de interfaces centradas en el usuario y sistemas de diseño para productos digitales.",
        image: "/img/07-dataextra/Foto Ale 1.png",
        social: [
          { icon: <FaGithub />, url: "#" },
          { icon: <FaLinkedin />, url: "#" }
        ]
      }
    ];

  return (
    <section className="team-section">
      <div className="section-header">
        <h2 className="section-title">Conoce nuestro equipo</h2>
        <p className="section-subtitle">El talento humano detrás de Gondra World</p>
        <div className="divider"></div>
      </div>
      
      <div className="team-grid">
        {teamMembers.map(member => (
          <div key={member.id} className="team-card">
            <div className="member-image-container">
              <img 
                src={member.image} 
                alt={member.name} 
                className="member-image"
                loading="lazy"
              />
              <div className="image-overlay"></div>
            </div>
            
            <div className="member-info">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-bio">{member.bio}</p>
              
              <div className="member-social">
                {member.social.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label={`${member.name} ${social.url.includes('github') ? 'GitHub' : social.url.includes('linkedin') ? 'LinkedIn' : social.url.includes('twitter') ? 'Twitter' : 'Portfolio'}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NuestroEquipoGondraWorld;