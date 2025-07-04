import React from "react";
import { useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import "../assets/scss/_03-Componentes/_TiendaCarritoMini2.scss";

const TiendaCarritoMini2 = ({ cart = [] }) => {
  const navigate = useNavigate();
  const itemCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);
  const total = cart.reduce((sum, product) => sum + (product.precio * (product.quantity || 1)), 0);

  return (
    <div 
      className="tech-floating-cart"
      onClick={() => navigate('/carrito')}
      aria-label="Ver carrito de compras"
    >
      <div className="cart-icon-container">
        <BsCart4 className="cart-icon" />
        {itemCount > 0 && (
          <span className="cart-badge" aria-hidden="true">
            {itemCount}
          </span>
        )}
      </div>
      
      {itemCount > 0 && (
        <div className="cart-tooltip">
          <span>{itemCount} {itemCount === 1 ? 'item' : 'items'}</span>
          <span>Total: ${total.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
};

export default TiendaCarritoMini2;