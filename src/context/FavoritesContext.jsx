import { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    setFavorites((prev) => {
      if (prev.find((m) => m.id === movie.id)) return prev; // avoid duplicates
      return [...prev, movie];
    });
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
