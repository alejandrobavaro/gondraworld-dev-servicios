import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../assets/scss/_03-Componentes/_CurriculumCv.scss';

const CurriculumCv = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const sectionVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div 
      className="cv-container"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="cv-wrapper">
        {/* Header */}
        <motion.div className="cv-header" variants={itemVariants}>
          <motion.h1 
            className="cv-name"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Alejandro Bavaro
          </motion.h1>
          <motion.h2 
            className="cv-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Desarrollador Front End
          </motion.h2>
          <motion.div 
            className="cv-contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p>📍 Mar del Plata, Argentina</p>
            <p>📧 bavaroalejandro@gmail.com</p>
            <p>🔗 <a href="https://linkedin.com/in/tuperfil" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p>🌐 <a href="https://alejandrobavaro.github.io/gondraworld-dev/" target="_blank" rel="noopener noreferrer">Portfolio Gondra World Dev</a></p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="cv-divider"
          variants={dividerVariants}
        />

        {/* Perfil Profesional */}
        <motion.section className="cv-section" variants={sectionVariants}>
          <motion.h3 className="cv-section-title" variants={itemVariants}>🎯 Perfil Profesional</motion.h3>
          <motion.p className="cv-section-content" variants={itemVariants}>
            Soy un Desarrollador Front End Junior, en constante evolución y apasionado por transformar ideas en experiencias digitales funcionales, atractivas e intuitivas. Actualmente en transición desde el área audiovisual y administrativa hacia el sector IT, combinando creatividad, atención al detalle y buenas prácticas de desarrollo. Experiencia en proyectos freelance utilizando React, JavaScript, HTML, CSS, y metodologías ágiles. Busco nuevos desafíos que impulsen mi crecimiento profesional y técnico.
          </motion.p>
        </motion.section>

        <motion.div 
          className="cv-divider"
          variants={dividerVariants}
        />

        {/* Stack Tecnológico */}
        <motion.section className="cv-section" variants={sectionVariants}>
          <motion.h3 className="cv-section-title" variants={itemVariants}>💻 Stack Tecnológico</motion.h3>
          <motion.div className="cv-section-content" variants={itemVariants}>
            <p><strong>Frontend:</strong> React, JavaScript, HTML5, CSS3, Figma</p>
            <p><strong>Herramientas:</strong> Jira, Trello, QA Testing</p>
            <p><strong>Complementos:</strong> Marketing Digital, Producción Audiovisual</p>
          </motion.div>
        </motion.section>

        <motion.div 
          className="cv-divider"
          variants={dividerVariants}
        />

        {/* Idiomas */}
        <motion.section className="cv-section" variants={sectionVariants}>
          <motion.h3 className="cv-section-title" variants={itemVariants}>🌍 Idiomas</motion.h3>
          <motion.ul className="cv-section-content" variants={itemVariants}>
            <li><strong>Español:</strong> Nativo</li>
            <li><strong>Inglés:</strong> Intermedio (Estudiando)</li>
          </motion.ul>
        </motion.section>

        <motion.div 
          className="cv-divider"
          variants={dividerVariants}
        />

        {/* Experiencia Laboral */}
        <motion.section className="cv-section" variants={sectionVariants}>
          <motion.h3 className="cv-section-title" variants={itemVariants}>🧑💼 Experiencia Laboral</motion.h3>
          <motion.div className="cv-section-content" variants={itemVariants}>
            <div className="cv-experience">
              <h4>Proyectos Freelance</h4>
              <p className="cv-experience-period">📅 2022 - 2025 | Front End Junior (Part-time)</p>
              <ul>
                <li>Desarrollo de página web interactiva para casamientos (React, JavaScript).</li>
                <li>Creación de sitios web para emprendimientos de e-commerce.</li>
                <li>Desarrollo de sitio web de noticias sobre videojuegos.</li>
                <li>Maquetación con HTML, CSS, y gestión de tareas con Jira y Trello.</li>
              </ul>
            </div>

            <div className="cv-experience">
              <h4>Administración Bavaro (GABA)</h4>
              <p className="cv-experience-period">📅 2008 - 2025 | Gerente Administrativo</p>
              <ul>
                <li>Gestión administrativa, contable y operativa.</li>
                <li>Atención al cliente y resolución de conflictos.</li>
                <li>Soporte técnico básico y mantenimiento de equipos.</li>
              </ul>
            </div>

            <div className="cv-experience">
              <h4>Gondra Estudios - Productora Audiovisual</h4>
              <p className="cv-experience-period">📅 2010 - 2023 | Productor General</p>
              <ul>
                <li>Dirección técnica y artística de producciones audiovisuales.</li>
                <li>Producción musical completa y gestión de estudios.</li>
                <li>Coordinación técnica y logística de eventos sociales y corporativos.</li>
              </ul>
            </div>

            <div className="cv-experience">
              <h4>Spectrum MDQ</h4>
              <p className="cv-experience-period">📅 2010 | Cameraman</p>
              <ul>
                <li>Cámara y edición para programa televisivo local.</li>
                <li>Realización de entrevistas a artistas.</li>
              </ul>
            </div>

            <div className="cv-experience">
              <h4>Sono Film - Madrid</h4>
              <p className="cv-experience-period">📅 2009 | Técnico en Instalaciones</p>
              <ul>
                <li>Montaje y operación de sistemas audiovisuales para eventos y ferias.</li>
                <li>Proyección de contenido visual en vivo (VJing, Mapping).</li>
              </ul>
            </div>
          </motion.div>
        </motion.section>

        <motion.div 
          className="cv-divider"
          variants={dividerVariants}
        />

        {/* Formación Académica */}
        <motion.section className="cv-section" variants={sectionVariants}>
          <motion.h3 className="cv-section-title" variants={itemVariants}>🎓 Formación Académica</motion.h3>
          <motion.ul className="cv-section-content cv-education" variants={itemVariants}>
            <li>• 2023 | Coderhouse | Argentina<br/>Bootcamp en Desarrollo Web - Frontend (JavaScript, React)</li>
            <li>• 2020 - 2023 | Instituto Teclab | Mar del Plata, Argentina<br/>Tecnicatura Superior en Programación</li>
            <li>• 2020 - 2021 | Curso Daniel Aragón | Madrid, España<br/>Marketing Digital y Community Manager</li>
            <li>• 2013 - 2018 | Universidad de Palermo | Buenos Aires, Argentina<br/>Licenciatura en Comunicación Audiovisual</li>
            <li>• 2001 - 2004 | Instituto Bristol | Mar del Plata, Argentina<br/>Tecnicatura en Realización Audiovisual</li>
          </motion.ul>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default CurriculumCv;