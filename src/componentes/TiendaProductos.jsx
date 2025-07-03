import React, { useState } from 'react';
import TiendaImgAgrandar from './TiendaImgAgrandar';
import { useOfertas } from './TiendaOfertasContext';
import '../assets/scss/_03-Componentes/_TiendaProductos.scss';

function TiendaProductos({ products, addToCart, handleShowDetalle, searchQuery, selectedCategory }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { ofertas } = useOfertas();

  const openImageModal = (images, index) => {
    setSelectedImages(images);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex === selectedImages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="tienda-productos-container">
      {products.map((product) => (
        <div key={product.id} className="tienda-producto-card">
          {ofertas.includes(product.id) && (
            <div className="tienda-oferta-tag">
              <span className="tienda-oferta-text">OFERTA</span>
              <span className="tienda-oferta-descuento">-30%</span>
            </div>
          )} 
          
          <div className="tienda-producto-imagen-container">
            <img
              src={product.imagenes[0]}
              alt={product.nombre}
              className="tienda-producto-imagen"
              onClick={() => openImageModal(product.imagenes, 0)}
            />
          </div>
          
          <div className="tienda-producto-info">
            <h3 className="tienda-producto-titulo">{product.nombre}</h3>
            
            <div className="tienda-producto-precio-container">
              {ofertas.includes(product.id) ? (
                <>
                  <span className="tienda-producto-precio-original">${product.precio.toFixed(2)}</span>
                  <span className="tienda-producto-precio-oferta">
                    ${(product.precio * 0.7).toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="tienda-producto-precio-normal">${product.precio.toFixed(2)}</span>
              )}
            </div>
            
            <p className="tienda-producto-descripcion">{product.descripcion}</p>
            
            <button
              className="tienda-producto-boton"
              onClick={() => addToCart(product)}
            >
              <i className="bi bi-cart-plus"></i> Añadir al carrito
            </button>
          </div>
        </div>
      ))}
      
      {isModalOpen && (
        <TiendaImgAgrandar
          images={selectedImages}
          isOpen={isModalOpen}
          closeModal={closeImageModal}
          handlePrevImage={handlePrevImage}
          handleNextImage={handleNextImage}
        />
      )}
    </div>
  );
}

export default TiendaProductos;