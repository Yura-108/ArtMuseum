import { useQuery } from '@tanstack/react-query';
import { fetchPaintings } from '../utils/apiService.ts';

interface Painting {
  id: number;
  title: string;
  artist: string;
  imageUrl: string;
}

export const usePaintings = (
  page: number,
  limit: number,
  imageSize: number,
) => {
  return useQuery<Painting[], Error>({
    queryKey: ['paintings', page, limit, imageSize], // Уникальный ключ для запроса
    queryFn: async () => {
      const data = await fetchPaintings(page, limit);
      return data.map((painting: any) => ({
        id: painting.id,
        title: painting.title,
        artist: painting.artist_title,
        imageUrl: `https://www.artic.edu/iiif/2/${painting.image_id}/full/${imageSize},/0/default.jpg`,
      }));
    },
  });
};
