import Artwork from '../../pages/artwork/Artwork.tsx';
import { FavoritesProvider } from '../../store/FavoritesContext.tsx';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

const queryClient = new QueryClient();

jest.mock('@utils/APIFunctions', () => ({
  getArtWork: jest.fn(),
}));

jest.mock('@tanstack/react-query', () => {
  const originalModule = jest.requireActual('@tanstack/react-query');
  return {
    ...originalModule,
    useQuery: jest.fn(),
  };
});

describe('ArtworkPage', () => {
  it('renders the artwork details correctly', async () => {
    const artworkMock = {
      id: 1,
      image_id: 'image_id',
      title: 'title',
      artist_title: 'artist_title',
      date_display: '1999',
      date_start: 1999,
      date_end: 1999,
      artist_display: 'artist_display',
      dimensions: '50X50 cm',
      credit_line: 'credit_line',
      on_loan_display: 'on_loan_display',
      thumbnail: { alt_text: 'artwork_humbnail' },
    };

    (useQuery as jest.Mock).mockReturnValue(artworkMock);

    render(
      <QueryClientProvider client={queryClient}>
        <FavoritesProvider>
          <MemoryRouter initialEntries={['/artwork/1']}>
            <Routes>
              <Route path="/artwork/:id" element={<Artwork />} />
              <Route path="/404" element={<div>404 Page</div>} />
            </Routes>
          </MemoryRouter>
        </FavoritesProvider>
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText('Artwork Title')).toBeInTheDocument();
      expect(screen.getByText('Artist Title')).toBeInTheDocument();
      expect(screen.getByText('2024')).toBeInTheDocument();
      expect(screen.getByText('Artist Nationality')).toBeInTheDocument();
      expect(screen.getByText('20x30 cm')).toBeInTheDocument();
      expect(screen.getByText('Credit Line')).toBeInTheDocument();
      expect(screen.getByText('On Loan')).toBeInTheDocument();
      expect(screen.getByAltText('Artwork Thumbnail')).toBeInTheDocument();
    });
  });

  it('redirects to 404 if the ID is invalid', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <FavoritesProvider>
          <MemoryRouter initialEntries={['/artwork/invalid']}>
            <Routes>
              <Route path="/artwork/:id" element={<Artwork />} />
              <Route path="/404" element={<div>404 Page</div>} />
            </Routes>
          </MemoryRouter>
        </FavoritesProvider>
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText('404 Page')).toBeInTheDocument();
    });
  });
});
