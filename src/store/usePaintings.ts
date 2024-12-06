import { fetchPaintings } from '@utils/API/apiService.ts';
import { useQuery } from '@tanstack/react-query';
import { Artwork } from '@utils/artworkSchema.ts';

export const usePaintings = (
  page: number,
  limit: number,
  imageSize: number,
) => {
  return useQuery<Artwork[], Error>({
    queryKey: ['artwork', page, limit, imageSize], // Уникальный ключ для запроса
    queryFn: async () => {
      const data = await fetchPaintings(page, limit);
      return data.map((artwork: Artwork) => ({
        id: artwork.id,
        title: artwork.title,
        artist: artwork.artist_title,
        imageUrl: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/${imageSize},/0/default.jpg`,
      }));
    },
  });
};
