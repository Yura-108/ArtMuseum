import sortArtwork from '@utils/sortArtwork.ts';

test('sorts paintings by title', () => {
  const artwork = [
    {
      id: 1,
      artist_title: 'Artist',
      date_display: '2024-01-01',
      date_start: 2024,
      date_end: 2024,
      dimensions: '50x50',
      image_id: '1',
      title: 'A',
      credit_line: 'Credit',
      on_loan_display: 'On loan',
      artist_display: 'Artist Display',
      thumbnail: { alt_text: 'Thumbnail' },
    },
    {
      id: 1,
      artist_title: 'Artist 2',
      date_display: '2024-01-01',
      date_start: 2024,
      date_end: 2024,
      dimensions: '60x60',
      image_id: '2',
      title: 'Art 2',
      credit_line: 'Credit 2',
      on_loan_display: 'On loan',
      artist_display: 'Artist Display',
      thumbnail: { alt_text: 'Thumbnail' },
    },
  ];
  const sorted = sortArtwork(artwork, 'title');
  expect(sorted[0].title).toBe('A');
});

test('sorts paintings by artist', () => {
  const artwork = [
    {
      id: 1,
      artist_title: 'Zara',
      date_display: '2024-01-01',
      date_start: 2024,
      date_end: 2024,
      dimensions: '50x50',
      image_id: '1',
      title: 'Art',
      credit_line: 'Credit',
      on_loan_display: 'On loan',
      artist_display: 'Artist Display',
      thumbnail: { alt_text: 'Thumbnail' },
    },
    {
      id: 1,
      artist_title: 'Jane',
      date_display: '2024-01-01',
      date_start: 2024,
      date_end: 2024,
      dimensions: '60x60',
      image_id: '2',
      title: 'Art 2',
      credit_line: 'Credit 2',
      on_loan_display: 'On loan',
      artist_display: 'Artist Display',
      thumbnail: { alt_text: 'Thumbnail' },
    },
  ];
  const sorted = sortArtwork(artwork, 'artist');
  expect(sorted[0].artist_title).toBe('Jane');
}