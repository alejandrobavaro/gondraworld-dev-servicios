import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsCart4, BsArrowRight } from "react-icons/bs";
import "../assets/scss/_03-Componentes/_TiendaCarritoMini2.scss";

const TiendaCarritoMini2 = ({ cart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const total = cart.reduce((sum, product) => sum + (product.precio * (product.quantity || 1)), 0);

  return (
    <div 
      className="tech-floating-cart"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate('/carrito')}
    >
      <div className="cart-icon-badge">
        <BsCart4 className="cart-icon" />
        {cart.length > 0 && <span className="badge">{cart.length}</span>}
      </div>
      
      {isHovered && (
        <div className="cart-preview">
          <p className="cart-total">Total: ${total.toFixed(2)}</p>
          <button className="view-cart-btn">
            Ver carrito <BsArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default TiendaCarritoMini2;