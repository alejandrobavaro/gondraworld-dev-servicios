import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./SesionAuthContext";
import { BiUser, BiUserPlus, BiLogOut } from "react-icons/bi";
import "../assets/scss/_03-Componentes/_Header.scss";

const Header = ({ searchQuery, setSearchQuery }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state, dispatch } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const showSearch = location.pathname === "/tienda" || location.pathname === "/musica";

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-top-bar"></div>
      
      <div className="header-container">
        <Link to="/" className="header-logo">
          <img
            src="/img/02-logos/logogondraworld1.png"
            alt="Gondra World Logo"
            className="logo-image"
            loading="lazy"
          />
        </Link>

        {showSearch && (
          <div className="search-container">
            <input
              type="search"
              className="search-input"
              placeholder={location.pathname === "/tienda" ? "Buscar..." : "Buscar servicios..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Buscar"
            />
          </div>
        )}

        <nav className={`main-nav ${isMenuOpen ? "open" : ""}`}>
          <div className="nav-links">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/proyectos" className="nav-link">Proyectos</Link>
          <Link to="/servicios" className="nav-link">Servicios</Link>
          <Link to="/tienda" className="nav-link">Tienda</Link>
          <Link to="/ContactoUnificado" className="nav-link">Contacto</Link>
          </div>
          
          <div className="header-actions">
            {/* Botón de CV destacado */}
            <button 
              className="cv-button"
              onClick={() => navigate("/CurriculumCv")}
            >
              CV
            </button>
            
            <div className="auth-links">
              {state.isAuthenticated ? (
                <>
                  {isMobile && (
                    <button 
                      className="logout-btn" 
                      onClick={() => dispatch({ type: "LOGOUT" })}
                    >
                      Cerrar sesión
                    </button>
                  )}
                  <Link 
                    to="/account" 
                    className="auth-icon-btn" 
                    title="Mi cuenta"
                  >
                    <BiUser className="auth-icon" />
                  </Link>
                  {!isMobile && (
                    <button 
                      className="logout-btn" 
                      onClick={() => dispatch({ type: "LOGOUT" })}
                    >
                      Cerrar sesión
                    </button>
                  )}
                </>
              ) : (
                <>
                  {isMobile ? (
                    <>
                      <Link to="/login" className="login-btn">Iniciar sesión</Link>
                      <Link to="/register" className="register-btn">Registrarse</Link>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="auth-icon-btn" title="Iniciar sesión">
                        <BiUser className="auth-icon" />
                      </Link>
                      <Link to="/register" className="auth-icon-btn" title="Registrarse">
                        <BiUserPlus className="auth-icon" />
                      </Link>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </nav>

        <button 
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menú"
          aria-expanded={isMenuOpen}
        >
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;