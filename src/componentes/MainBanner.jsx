import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/scss/_03-Componentes/_MainBanner.scss';

const MainBanner = () => {
  const banners = [
    '/img/04-img-banners/banner1.png',
    '/img/04-img-banners/banner2.png',
    // '/img/04-img-banners/banner3.png',
    // '/img/04-img-banners/banner4.png',
    // '/img/04-img-banners/banner5.png',
    // '/img/04-img-banners/banner6.png',
    // '/img/04-img-banners/banner7.png',
    // '/img/04-img-banners/banner8.png',
    // '/img/04-img-banners/banner9.png',
    // '/img/04-img-banners/banner10.png',
    // '/img/04-img-banners/banner11.png',
    // '/img/04-img-banners/banner12.png',
    // '/img/04-img-banners/banner13.png',
    // '/img/04-img-banners/banner14.png',
    // '/img/04-img-banners/banner15.png',
    // '/img/04-img-banners/banner16.png',
    // '/img/04-img-banners/banner17.png',
    // '/img/04-img-banners/banner18.png',
    // '/img/04-img-banners/banner19.png',
    // '/img/04-img-banners/banner20.png'
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
  };

  return (
    <section className="hero-banner">
      <div className="hero-slider-container">
        <Slider {...settings} className="hero-slider">
          {banners.map((banner, index) => (
            <div key={index} className="hero-slide">
              <div 
                className="hero-slide-bg" 
                style={{ backgroundImage: `url(${banner})` }}
              />
            </div>
          ))}
        </Slider>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="hero-title">Gondra World</h1>
          <p className="hero-subtitle">Soluciones digitales a medida</p>
        </div>
        <div className="hero-cta">
          <a 
            href="https://alejandrobavaro.github.io/gondraworld-dev/" 
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Proyectos
          </a>
          <Link to="/ContactoUnificado" className="cta-button outline">
            Contactar
          </Link>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default MainBanner;
