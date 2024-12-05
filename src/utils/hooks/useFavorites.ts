<<<<<<< HEAD
import { FAVORITES_STORAGE_KEY } from '@constants/storageKeys.ts';
=======
import { useEffect, useState } from 'react';
>>>>>>> main
import {
  getFromSessionStorage,
  setToSessionStorage,
} from '../sessionStorageHelpers.ts';
<<<<<<< HEAD
import { useEffect, useState } from 'react';
=======
import { FAVORITES_STORAGE_KEY } from '../../constants/storageKeys.ts';
>>>>>>> main

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>(() =>
    getFromSessionStorage(FAVORITES_STORAGE_KEY),
  );

  useEffect(() => {
    setToSessionStorage(FAVORITES_STORAGE_KEY, favorites);
  }, [favorites]);

  const addToFavorites = (id: number) => {
    if (!favorites.includes(id)) {
      setFavorites((prev) => [...prev, id]);
    }
  };

  const removeFromFavorites = (id: number) => {
    setFavorites((prev) => prev.filter((favId) => favId !== id));
  };

  const isFavorite = (id: number) => favorites.includes(id);

  return { favorites, addToFavorites, removeFromFavorites, isFavorite };
};
