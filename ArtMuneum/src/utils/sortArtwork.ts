import { Artwork } from './artworkSchema.ts';

const sortArtwork = (artworks: Artwork[], method: string) => {
  if (!artworks || artworks.length === 0) return [];

  return artworks.sort((a, b) => {
    switch (method) {
      case 'title':
        return (a.title || '').localeCompare(b.title || '');
      case 'artist':
        return (a.artist_title || '').localeCompare(b.artist_title || '');
      case 'date':
        return (a.date_start || 0) - (b.date_start || 0);
      default:
        return 0;
    }
  });
};

export default sortArtwork;
