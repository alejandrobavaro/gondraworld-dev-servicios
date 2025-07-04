 import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { BsCartCheck, BsTrash, BsPlus, BsDash, BsArrowLeft } from "react-icons/bs";
import "../assets/scss/_03-Componentes/_TiendaCarritoCompra.scss";

const TiendaCarritoCompra = ({ cart = [], removeFromCart, handlePagar, updateProductQuantity }) => {
  const [localCart, setLocalCart] = useState(cart);
  const total = localCart.reduce((sum, product) => sum + (product.precio * (product.quantity || 1)), 0);

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  const handleComprar = () => {
    handlePagar();
    toast.success("¡Compra realizada con éxito!", {
      position: "top-center",
      className: "tech-toast"
    });
  };

  const handleQuantityChange = (id, delta) => {
    const newQuantity = Math.max(1, (localCart.find(p => p.id === id)?.quantity || 1) + delta);
    updateProductQuantity(id, newQuantity);
  };


  return (
    <div className="tech-cart-container">
      <header className="tech-cart-header">
        <button className="tech-back-button" onClick={() => window.history.back()}>
          <BsArrowLeft />
        </button>
        <h1 className="tech-cart-title">
          <BsCartCheck className="tech-cart-icon" /> 
          Tu Carrito de Servicios
        </h1>
      </header>

      <div className="tech-cart-content">
        {localCart.length === 0 ? (
          <div className="tech-empty-cart">
            <p>No hay servicios en tu carrito</p>
            <button className="tech-browse-btn" onClick={() => window.location.href = '/tienda'}>
              Explorar Servicios
            </button>
          </div>
        ) : (
          <>
            <div className="tech-cart-summary">
              <div className="tech-summary-item">
                <span>Productos:</span>
                <span>{localCart.length}</span>
              </div>
              <div className="tech-summary-item tech-total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <ul className="tech-cart-items">
              {localCart.map((product) => (
                <li key={product.id} className="tech-cart-item">
                  <div className="tech-item-image">
                    <img 
                      src={product.imagenes?.[0] || '/img/default-service.png'} 
                      alt={product.nombre}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/img/default-service.png';
                      }}
                    />
                  </div>
                  
                  <div className="tech-item-details">
                    <h3 className="tech-item-name">{product.nombre}</h3>
                    <p className="tech-item-desc">{product.descripcion}</p>
                    
                    <div className="tech-item-controls">
                      <div className="tech-quantity-selector">
                        <button 
                          className="tech-qty-btn"
                          onClick={() => handleQuantityChange(product.id, -1)}
                          aria-label="Reducir cantidad"
                        >
                          <BsDash />
                        </button>
                        <span className="tech-qty-display">{product.quantity || 1}</span>
                        <button 
                          className="tech-qty-btn"
                          onClick={() => handleQuantityChange(product.id, 1)}
                          aria-label="Aumentar cantidad"
                        >
                          <BsPlus />
                        </button>
                      </div>
                      
                      <span className="tech-item-price">${product.precio.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <button 
                    className="tech-remove-btn"
                    onClick={() => removeFromCart(product.id)}
                    aria-label="Eliminar servicio"
                  >
                    <BsTrash />
                  </button>
                </li>
              ))}
            </ul>

            <div className="tech-cart-actions">
              <button 
                className="tech-checkout-btn"
                onClick={handleComprar}
                disabled={localCart.length === 0}
              >
                Finalizar Compra - ${total.toFixed(2)}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TiendaCarritoCompra;