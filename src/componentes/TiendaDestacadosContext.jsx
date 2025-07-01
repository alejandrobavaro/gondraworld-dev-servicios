import React, { createContext, useContext, useEffect, useState } from 'react';

const TiendaDestacadosContext = createContext();

export const DestacadosProvider = ({ children }) => {
  const [destacados, setDestacados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestacados = async () => {
      try {
        const response = await fetch('./servicios.json');
        if (!response.ok) throw new Error('Error al cargar servicios');
        const servicios = await response.json();
        
        const serviciosDestacados = [...servicios]
          .sort((a, b) => b.precio - a.precio)
          .slice(0, 3)
          .map(s => s.id);
        
        setDestacados(serviciosDestacados);
      } catch (err) {
        console.error('Error al cargar servicios destacados:', err);
        setError(err.message);
        setDestacados([1, 2, 3]);
      } finally {
        setLoading(false);
      }
    };

    fetchDestacados();
  }, []);

  const value = {
    destacados,
    loading,
    error,
    actualizarDestacados: (nuevosDestacados) => {
      setDestacados(nuevosDestacados);
    },
    // Mantener compatibilidad con el nombre anterior
    ofertas: destacados
  };

  return (
    <TiendaDestacadosContext.Provider value={value}>
      {children}
    </TiendaDestacadosContext.Provider>
  );
};

// Export principal
export const useDestacados = () => {
  const context = useContext(TiendaDestacadosContext);
  if (context === undefined) {
    throw new Error('useDestacados debe usarse dentro de un DestacadosProvider');
  }
  return context;
};

// Alias para mantener compatibilidad
export const useOfertas = () => {
  const context = useContext(TiendaDestacadosContext);
  if (context === undefined) {
    throw new Error('useOfertas debe usarse dentro de un DestacadosProvider');
  }
  return {
    ofertas: context.destacados,
    loading: context.loading,
    error: context.error
  };
};