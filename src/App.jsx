import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from './componentes/Header';
import MainBanner from './componentes/MainBanner';
import MainContent from './componentes/MainContent';
import CurriculumCv from './componentes/CurriculumCv';
import ContactoUnificado from './componentes/ContactoUnificado';

import MainDestacadosSlider from './componentes/MainDestacadosSlider';
import Footer from './componentes/Footer';
import Tienda from './componentes/Tienda';
import CarritoCompleto from './componentes/TiendaCarritoCompra';
import { DestacadosProvider } from './componentes/TiendaDestacadosContext';
import { AuthProvider } from './componentes/SesionAuthContext';
import Login from './componentes/SesionLogin';
import Register from './componentes/SesionRegistrate';
import Logout from './componentes/SesionLogout';
import MainWhatsappIcon from './componentes/MainWhatsappIcon';
import '../src/assets/scss/_01-General/_App.scss';

function App() {
  const [productCart, setProductCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeEffect, setActiveEffect] = useState(false);

  const addProductToCart = (product) => {
    setProductCart([...productCart, product]);
    triggerEffect();
  };

  const removeProductFromCart = (id) => {
    setProductCart(productCart.filter((product) => product.id !== id));
  };

  const triggerEffect = () => {
    setActiveEffect(true);
    setTimeout(() => setActiveEffect(false), 300);
  };

  const showCustomAlert = (title, html, confirmText, cancelText) => {
    return Swal.fire({
      title: `<div class="alert-title">${title}</div>`,
      html: `<div class="alert-content">${html}</div>`,
      background: '#0a192f',
      color: '#e6f1ff',
      showCancelButton: true,
      confirmButtonText: `<div class="alert-button confirm">${confirmText}</div>`,
      cancelButtonText: `<div class="alert-button cancel">${cancelText}</div>`,
      focusConfirm: false,
      customClass: {
        popup: 'custom-alert',
        actions: 'alert-actions'
      }
    });
  };

  const handlePayment = () => {
    showCustomAlert(
      'Confirmación',
      'Proyecto seleccionado<br>¿Continuar al pago?',
      'Confirmar',
      'Cancelar'
    ).then((result) => {
      if (result.isConfirmed) {
        window.open('https://www.paypal.com/paypalme/alegondramusic?country.x=AR&locale.x=es_XC', '_blank');
      }
    });
  };

  return (
    <Router>
      <AuthProvider>
        <DestacadosProvider>
          <div className={`app-wrapper ${activeEffect ? 'active-effect' : ''}`}>
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <MainBanner />
            
            <div className="content-divider"></div>
            
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/CurriculumCv" element={<CurriculumCv />} />
              <Route path="/ContactoUnificado" element={<><ContactoUnificado /></>} />
              <Route path="/tienda" element={
                <Tienda 
                  setCart={setProductCart} 
                  cart={productCart} 
                  addToCart={addProductToCart} 
                  removeFromCart={removeProductFromCart} 
                  searchQuery={searchQuery} 
                  setSearchQuery={setSearchQuery} 
                />
              } />
              <Route path="/carrito" element={
                <CarritoCompleto 
                  cart={productCart} 
                  removeFromCart={removeProductFromCart} 
                  handlePayment={handlePayment} 
                />
              } />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
            
            <div className="content-divider with-icon">
              <div className="divider-element"></div>
            </div>
            
            <MainDestacadosSlider />
            <Footer />
            <MainWhatsappIcon />
          </div>
        </DestacadosProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;