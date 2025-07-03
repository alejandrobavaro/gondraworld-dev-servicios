import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../assets/scss/_03-Componentes/_CurriculumCv.scss';
import Slider from 'react-slick';

const CurriculumCv = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.start('hidden');
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } }
  };

  const sectionVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <motion.div className="cv-container" ref={ref} initial="hidden" animate={controls} variants={containerVariants}>
      <div className="cv-wrapper">

        <motion.div className="cv-header" variants={itemVariants}>
          <motion.h1 className="cv-name">Alejandro Bavaro</motion.h1>
          <motion.div className="cv-profile-pic" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <img src="/img/07-dataextra/Foto Ale 1.png" alt="Foto de Alejandro Bavaro" />
          </motion.div>
          <motion.h2 className="cv-title">
            Creativo Digital | Front End | Desarrollo Web<br />
            Lic. en Comunicación Audiovisual | Producción Músical
          </motion.h2>
          <motion.div className="cv-contact">
            <p>📍 Mar del Plata, Argentina</p>
            <p>📧 <a href="/ContactoUnificado">Contacto por formulario</a></p>
            <p>🌐 <a href="https://alejandrobavaro.github.io/gondraworld-dev/" target="_blank" rel="noopener noreferrer">Porfolio: Gondra World Dev</a></p>
          </motion.div>
        </motion.div>

        <motion.div className="cv-divider" variants={dividerVariants} />

        <motion.section className="cv-section" variants={sectionVariants}>
          <motion.h3 className="cv-section-title">🎯 Perfil Profesional</motion.h3>
          <motion.p className="cv-section-content">
            Desarrollador Front End con una fuerte orientación al diseño visual y la interactividad. Combino creatividad y tecnología para crear experiencias web atractivas, usables y modernas. Disfruto cada etapa del proceso: desde el diseño UI/UX hasta la implementación en React. Actualmente en transición desde el área audiovisual y administrativa hacia el sector IT, combinando creatividad, atención al detalle y buenas prácticas de desarrollo. Experiencia en proyectos freelance utilizando React, JS, HTML, CSS, SASS y metodologías ágiles. Busco nuevos desafíos que impulsen mi crecimiento profesional y técnico.
          </motion.p>
        </motion.section>

        <motion.div className="cv-divider" variants={dividerVariants} />

        <motion.section className="cv-section" variants={sectionVariants}>
          <motion.h3 className="cv-section-title">💻 Stack Tecnológico</motion.h3>
          <motion.div className="cv-section-content">
            <p><strong>Frontend:</strong> React, JavaScript, HTML5, CSS, SASS, Figma, Photoshop</p>
            <p><strong>Herramientas:</strong> Visual Studio Code, Testing, Git, Netlify, Vercel, Photoshop, Adobe Premiere, IA </p>
            <p><strong>Complementos:</strong> Marketing Digital, Producción Audiovisual, Coordinación de Equipos de trabajo</p>
          </motion.div>
        </motion.section>

        <motion.div className="cv-divider" variants={dividerVariants} />

        <motion.section className="cv-section" variants={sectionVariants}>
          <motion.h3 className="cv-section-title">🌍 Idiomas</motion.h3>
          <motion.ul className="cv-section-content">
            <li><strong>Español:</strong> Nativo</li>
            <li><strong>Inglés:</strong> Intermedio (Estudiando)</li>
          </motion.ul>
        </motion.section>

        <motion.div className="cv-divider" variants={dividerVariants} />

        <motion.section className="cv-section" variants={sectionVariants}>
          <motion.h3 className="cv-section-title">🚀 Servicios</motion.h3>
          <motion.ul className="cv-section-content">
            <li>Desarrollo Web Personalizado con tecnologías modernas</li>
            <li>Tienda Online con pasarela de pagos</li>
            <li>Diseño UX/UI atractivo y funcional</li>
            <li>Diseño Gráfico</li>
            <li>SEO y posicionamiento orgánico</li>
            <li>Servicio de Mantenimiento de Computadoras</li>
            <li>Creación y Soporte Técnico de sistemas Web Personalizados</li>
          </motion.ul>
        </motion.section>

        <motion.div className="cv-divider" variants={dividerVariants} />

        <motion.section className="cv-section galeria-proyectos" variants={sectionVariants}>
          <motion.h3 className="cv-section-title">🖼️ Galería de Proyectos</motion.h3>
          <Slider {...sliderSettings}>
            <div><img src="/img/04-img-banners/banner11.png" alt="Desarrollo Web Personalizado" /></div>
            <div><img src="/img/04-img-banners/banner4.png" alt="Tienda Online" /></div>
            <div><img src="/img/04-img-banners/banner5.png" alt="SEO Avanzado" /></div>
            <div><img src="/img/04-img-banners/banner6.png" alt="Mantenimiento Web" /></div>
            <div><img src="/img/04-img-banners/banner7.png" alt="Diseño UX/UI" /></div>
          </Slider>
        </motion.section>

        <motion.div className="cv-divider" variants={dividerVariants} />

        <motion.section className="cv-section" variants={sectionVariants}>
          <motion.h3 className="cv-section-title">💼 Experiencia Laboral</motion.h3>
          <motion.div className="cv-section-content">
            <div className="cv-experience">
              <h4>Proyectos Freelance</h4>
              <p className="cv-experience-period">2022 - 2025 | Front End Junior (Part-time)</p>
              <ul>
                <li>Desarrollo de página web interactiva para casamientos (React, JavaScript)</li>
                <li>Creación de sitios web para emprendimientos de e-commerce</li>
                <li>Landing pages y sitios promocionales</li>
                <li>Maquetación con HTML, CSS, y gestión de tareas con Jira y Trello</li>
              </ul>
            </div>
            <div className="cv-experience">
              <h4>Administración de consorcios</h4>
              <p className="cv-experience-period">2008 - 2025 | Gerente Administrativo</p>
              <ul>
                <li>Gestión administrativa, contable y operativa</li>
                <li>Atención al cliente y resolución de conflictos</li>
                <li>Soporte técnico básico y mantenimiento de equipos</li>
              </ul>
            </div>
            <div className="cv-experience">
              <h4>Gondra Estudio - Productora Audiovisual</h4>
              <p className="cv-experience-period">2010 - 2023 | Productor General</p>
              <ul>
                <li>Dirección técnica y artística de producciones audiovisuales</li>
                <li>Producción musical completa y gestión de estudios</li>
                <li>Coordinación técnica y logística de eventos sociales y corporativos</li>
                <li>Producción Audiovisual de Eventos - Vj - Mapping</li>
              </ul>
            </div>
          </motion.div>
        </motion.section>

        <motion.div className="cv-divider" variants={dividerVariants} />

        <motion.section className="cv-section" variants={sectionVariants}>
          <motion.h3 className="cv-section-title">🏆 Proyectos Reales</motion.h3>
          <motion.div className="cv-section-content">
            <ul>
              <li>Coordinemos Proyectos - Plataforma React para gestión colaborativa</li>
              <li>Almango Pop Music - Sitio web musical con reproductor y tienda</li>
              <li>Cosmocam - Landing page para cabina fotográfica interactiva</li>
              <li>Bavaro Propiedades - Portal inmobiliario con filtros avanzados</li>
              <li>Gondra Fotografía - Portfolio con animaciones y galería</li>
              <li>Chulus Games - E-commerce de videojuegos retro con Stripe</li>
              <li>Formateo Chords - App para visualizar y compartir acordes</li>
              <li>Personalizá - Tienda online de productos personalizados</li>
              <li>Mis Gastos Integrales - App React para gestión de finanzas personales</li>
              <li>Capacitaciones ADM - Plataforma de cursos online con seguimiento</li>
            </ul>
          </motion.div>
        </motion.section>

        <motion.div className="cv-divider" variants={dividerVariants} />

        <motion.section className="cv-section" variants={sectionVariants}>
          <motion.h3 className="cv-section-title">🎓 Formación Académica</motion.h3>
          <motion.ul className="cv-section-content cv-education">
            <li>2023 | Coderhouse | Argentina - Curso en Desarrollo Web Frontend (React)</li>
            <li>2020 - 2023 | Instituto Teclab | Mar del Plata - Tecnicatura Superior en Programación</li>
            <li>2020 - 2021 | Curso Daniel Aragón | Madrid - Marketing Digital y Community Manager</li>
            <li>2013 - 2018 | Universidad de Palermo | Buenos Aires - Licenciatura en Comunicación Audiovisual</li>
            <li>2001 - 2004 | Instituto Bristol | Mar del Plata - Tecnicatura en Realización Audiovisual</li>
          </motion.ul>
        </motion.section>

        <motion.div className="cv-divider" variants={dividerVariants} />

<motion.section className="cv-section" variants={sectionVariants}>
  <motion.h3 className="cv-section-title">🧩 ¿Por qué elegirme?</motion.h3>
  <motion.p className="cv-section-content">
    Me involucro en cada proyecto como si fuera propio. Combino creatividad, comunicación y tecnología para aportar soluciones reales que impacten positivamente.
  </motion.p>
</motion.section>

      </div>
    </motion.div>



  );
};

export default CurriculumCv;




