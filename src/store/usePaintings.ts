<<<<<<< HEAD
import { fetchPaintings } from '@utils/API/apiService.ts';
import { useQuery } from '@tanstack/react-query';
import { Artwork } from '@utils/artworkSchema.ts';
=======
import { useQuery } from '@tanstack/react-query';
import { fetchPaintings } from '../utils/apiService.ts';

interface Painting {
  id: number;
  title: string;
  artist: string;
  imageUrl: string;
}
>>>>>>> main

export const usePaintings = (
  page: number,
  limit: number,
  imageSize: number,
) => {
<<<<<<< HEAD
  return useQuery<Artwork[], Error>({
    queryKey: ['artwork', page, limit, imageSize], // Уникальный ключ для запроса
    queryFn: async () => {
      const data = await fetchPaintings(page, limit);
      return data.map((artwork: Artwork) => ({
        id: artwork.id,
        title: artwork.title,
        artist: artwork.artist_title,
        imageUrl: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/${imageSize},/0/default.jpg`,
=======
  return useQuery<Painting[], Error>({
    queryKey: ['paintings', page, limit, imageSize], // Уникальный ключ для запроса
    queryFn: async () => {
      const data = await fetchPaintings(page, limit);
      return data.map((painting: any) => ({
        id: painting.id,
        title: painting.title,
        artist: painting.artist_title,
        imageUrl: `https://www.artic.edu/iiif/2/${painting.image_id}/full/${imageSize},/0/default.jpg`,
>>>>>>> main
      }));
    },
  });
};
