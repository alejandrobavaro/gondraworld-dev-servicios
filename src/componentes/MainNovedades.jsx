import React, { useState } from 'react';
import { FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import '../assets/scss/_03-Componentes/_MainNovedades.scss';

const MainNovedades = ({ darkMode = false }) => {
  const [expandedArticle, setExpandedArticle] = useState(null);

  const toggleArticle = (id) => {
    setExpandedArticle(expandedArticle === id ? null : id);
  };

  const articles = [
    {
      id: 1,
      title: "Lanzamiento Oficial de Gondra World Dev",
      excerpt: "Hoy marcamos un hito importante: el lanzamiento oficial de Gondra World Dev como agencia de desarrollo web profesional. Después de más de 5 años trabajando como freelancers independientes, hemos decidido unir nuestras fuerzas y expertise para formar Gondra World Dev, una agencia especializada en desarrollo frontend con capacidades full-stack.",
      content: `¿Qué nos hace diferentes?

Enfoque centrado en el cliente: Cada proyecto comienza con una consultoría gratuita para entender tus necesidades reales

Equipo multidisciplinario: Combinamos diseñadores UX/UI con desarrolladores full-stack para soluciones integrales

Tecnologías de vanguardia: Especializados en React, Next.js, Node.js y diseño con Figma

Procesos ágiles: Metodologías Scrum para entregas rápidas y transparentes

Nuestros servicios principales

Desarrollo Web a Medida
Desde landing pages hasta aplicaciones web complejas

E-commerce
Tiendas online con pasarelas de pago integradas

Diseño UX/UI
Interfaces intuitivas que mejoran la experiencia de usuario

Ya hemos trabajado con más de 15 clientes en proyectos freelance y estamos listos para llevar esa experiencia a nuestra nueva etapa como agencia.

"En Gondra World Dev no solo construimos sitios web, creamos experiencias digitales que ayudan a nuestros clientes a crecer"

Alejandro Gondra, Fundador`,
      image: "../../img/00-fondos/banner2.jpg",
      date: "01/06/2025",
      destacado: true,
      links: [
        { url: "https://alejandrobavaro.github.io/gondraworld-dev/", text: "Ver Nuestros Proyectos" }
      ]
    },
    {
      id: 2,
      title: "Chulus Games: Ecommerce de Videojuegos con +15k en ventas",
      excerpt: "Nuestro proyecto de ecommerce para videojuegos retro supera expectativas",
      content: "El ecommerce desarrollado para Chulus Games ha generado más de $15,000 en ventas durante sus primeros dos meses. Implementamos Next.js con Stripe para pagos y un diseño retro que enamoró a los clientes. El proyecto incluye: catálogo con filtros avanzados, sistema de recomendaciones y pasarela de pagos segura.",
      image: "/img/03-img-cuadradas/logochulusgames.png",
      date: "12/09/2023",
      links: [
        { url: "https://chulusgames.vercel.app/", text: "Visitar tienda" },
        { url: "#", text: "Caso de éxito" }
      ]
    },
    {
      id: 3,
      title: "Nuevo Curso: React Avanzado para Desarrollo Profesional",
      excerpt: "Lanzamos nuestro curso más completo con proyectos reales",
      content: "Hemos creado un curso intensivo de React Avanzado que cubre desde hooks personalizados hasta integración con backends. Incluye 3 proyectos reales y mentorías personalizadas. Más de 50 estudiantes ya se han inscrito en la primera semana. Próxima edición comienza el 15 de julio.",
      image: "../../img/01-galeria1/galeria1.jpg",
      date: "20/05/2024",
      links: [
        { url: "#", text: "Inscribirse al curso" }
      ]
    },
    {
      id: 4,
      title: "Nuevo Cliente: Deira Carteras - Ecommerce Premium",
      excerpt: "Desarrollamos tienda online para marca de carteras artesanales",
      content: "Hemos comenzado a trabajar con Deira, marca de carteras artesanales, para desarrollar su ecommerce premium. El proyecto incluirá galería 360° de productos, historias de artesanos y pasarela de pagos segura. Estamos utilizando WooCommerce con personalizaciones avanzadas.",
      image: "/img/03-img-cuadradas/logodeira.png",
      date: "14/07/2023",
      links: [
        { url: "https://deira.netlify.app/", text: "Ver avances" }
      ]
    },
    {
      id: 5,
      title: "Taller Gratuito: Diseño de Interfaces con Figma",
      excerpt: "Aprende las bases del diseño UI/UX en nuestro próximo taller",
      content: "El 25 de mayo realizaremos un taller gratuito de introducción al diseño UI/UX con Figma. Cubriremos desde los fundamentos del diseño de interfaces hasta la creación de prototipos interactivos. Este taller forma parte de nuestra iniciativa para compartir conocimiento con la comunidad de desarrolladores.",
      image: "../../img/01-galeria1/galeria5.jpg",
      date: "15/05/2024",
      links: [
        { url: "#", text: "Inscribirse al taller" }
      ]
    },
    {
      id: 6,
      title: "Bavaro Propiedades: Plataforma Inmobiliaria con WordPress",
      excerpt: "Desarrollamos sistema de gestión de propiedades para inmobiliaria",
      content: "Lanzamos la nueva plataforma para Bavaro Propiedades con galería de propiedades, mapas interactivos y sistema de búsqueda avanzada. El proyecto fue implementado con WordPress y Elementor para facilitar la gestión de contenidos por parte del cliente. El sitio ya muestra más de 50 propiedades disponibles.",
      image: "/img/03-img-cuadradas/logobavaropropiedades.png",
      date: "05/08/2023",
      links: [
        { url: "https://bavaropropiedades.netlify.app/", text: "Visitar sitio" }
      ]
    },
    {
      id: 7,
      title: "Certificación en React 18 para Todo el Equipo",
      excerpt: "Actualizamos nuestros conocimientos con las últimas features de React",
      content: "Todo el equipo de desarrollo frontend ha completado con éxito la certificación en React 18, aprendiendo sobre Suspense, Transiciones y el nuevo hook useId. Mantenemos nuestro compromiso de estar a la vanguardia tecnológica para ofrecer las mejores soluciones a nuestros clientes.",
      image: "../../img/01-galeria1/galeria9.jpg",
      date: "28/04/2024",
      links: [
        { url: "#", text: "Ver certificados" }
      ]
    }
  ];

  return (
    <section className="novedades-section">
      <div className="novedades-header">
        <h1 className="section-title">GONDRA WORLD NEWS</h1>
        <p className="section-subtitle">Las últimas novedades de nuestra agencia de desarrollo web</p>
        <div className="header-divider"></div>
        <p className="header-description">
          En Gondra World Dev transformamos ideas en realidades digitales. Aquí encontrarás todo sobre nuestros proyectos, 
          cursos, logros y cómo podemos ayudarte a hacer crecer tu negocio en internet.
        </p>
      </div>

      <div className="featured-article">
        <div className="featured-content">
          <span className="article-category">DESTACADO</span>
          <h2>{articles.find(a => a.destacado)?.title}</h2>
          <p className="article-excerpt">{articles.find(a => a.destacado)?.excerpt}</p>
          <div className="article-meta">
            <span className="article-date">{articles.find(a => a.destacado)?.date}</span>
            <button className="read-more-btn" onClick={() => toggleArticle(articles.find(a => a.destacado)?.id)}>
              {expandedArticle === articles.find(a => a.destacado)?.id ? 'Ver menos' : 'Ver más'} <FaArrowRight />
            </button>
          </div>
          {expandedArticle === articles.find(a => a.destacado)?.id && (
            <div className="article-full-content">
              <p>{articles.find(a => a.destacado)?.content}</p>
              <div className="article-links">
                {articles.find(a => a.destacado)?.links.map((link, index) => (
                  <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> {link.text}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="featured-image">
          <img src={articles.find(a => a.destacado)?.image} alt="Artículo destacado" />
        </div>
      </div>

      <div className="novedades-grid">
        {articles.filter(a => !a.destacado).map(article => (
          <article key={article.id} className={`article-card ${expandedArticle === article.id ? 'expanded' : ''}`}>
            <div className="article-image">
              <img src={article.image} alt={article.title} />
            </div>
            <div className="article-content">
              <div className="article-header">
                <span className="article-date">{article.date}</span>
                <h3>{article.title}</h3>
              </div>
              
              <div className="article-body">
                <p className="article-excerpt">{article.excerpt}</p>
                
                {expandedArticle === article.id && (
                  <div className="article-full-content">
                    <p>{article.content}</p>
                    <div className="article-links">
                      {article.links.map((link, index) => (
                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                          <FaExternalLinkAlt /> {link.text}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <button 
                className="toggle-content-btn"
                onClick={() => toggleArticle(article.id)}
              >
                {expandedArticle === article.id ? 'Ver menos' : 'Ver más'}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MainNovedades;