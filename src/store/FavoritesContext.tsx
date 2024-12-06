import { useFavorites } from '@utils/hooks/useFavorites.ts';
import React, { createContext, useContext } from 'react';
import { FavoriteType } from '@types/favoriteTypes.ts';

const FavoritesContext = createContext<FavoriteType | null>(null);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const favorites = useFavorites();
  return (
    <FavoritesContext.Provider value={favorites}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(
      'useFavoritesContext must be used within a FavoritesProvider',
    );
  }
  return context;
};
