import { sortPaintings } from './sortPaintings';

test('sorts paintings by title', () => {
  const paintings = [
    { title: 'B', artist: 'John', date: '2000-01-01' },
    { title: 'A', artist: 'Jane', date: '1990-01-01' },
  ];
  const sorted = sortPaintings(paintings, 'title');
  expect(sorted[0].title).toBe('A');
});

test('sorts paintings by artist', () => {
  const paintings = [
    { title: 'B', artist: 'Jane', date: '2000-01-01' },
    { title: 'A', artist: 'John', date: '1990-01-01' },
  ];
  const sorted = sortPaintings(paintings, 'artist');
  expect(sorted[0].artist).toBe('Jane');
});
