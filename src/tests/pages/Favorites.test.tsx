import { render, screen } from '@testing-library/react';
import { useFavoritesContext } from '@store/FavoritesContext';
import { useQuery } from '@tanstack/react-query';
import Favorites from '@pages/favorites/Favorites.tsx';

jest.mock('@store/FavoritesContext.tsx', () => ({
  useFavoritesContext: jest.fn(),
}));

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

jest.mock('@components/ContainerSmallCards/ContainerSmallCard.tsx', () => ({ data }: any) => (
  <div>Rendered {data.length} favorite cards</div>
));
jest.mock('@components/ErrorMessage/ErrorMessage.tsx', () => ({ children }: any) => <div>{children}</div>);
jest.mock('@components/Message/Message.tsx', () => ({ children }: any) => <div>{children}</div>);
jest.mock('@components/Skeletons/SmallCardContainerSkeleton.tsx', () => ({ length }: any) => (
  <div>Loading {length} cards...</div>
));
jest.mock('@components/ErrorBoundary/ErrorBoundary.tsx', () => ({ fallback, children }: any) => (
  <div>{children || fallback}</div>
));

describe('Favorites', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading skeleton when data is loading', () => {
    (useFavoritesContext as jest.Mock).mockReturnValue({ favorites: [1, 2, 3] });
    (useQuery as jest.Mock).mockReturnValue({ data: null, isPending: true, isError: false });

    render(<Favorites />);
    expect(screen.getByText('Loading 3 cards...')).toBeInTheDocument();
  });

  it('renders error message when an error occurs', () => {
    (useFavoritesContext as jest.Mock).mockReturnValue({ favorites: [1, 2, 3] });
    (useQuery as jest.Mock).mockReturnValue({
      data: null,
      isPending: false,
      isError: true,
      error: { message: 'Failed to fetch data' },
    });

    render(<Favorites />);
    expect(screen.getByText('Failed to fetch data')).toBeInTheDocument();
  });

  it('renders "no favorites" message when the list is empty', () => {
    (useFavoritesContext as jest.Mock).mockReturnValue({ favorites: [] });
    (useQuery as jest.Mock).mockReturnValue({ data: [], isPending: false, isError: false });

    render(<Favorites />);
    expect(screen.getByText("You don't have any favorite artworks yet")).toBeInTheDocument();
  });

  it('renders favorite cards when data is available', () => {
    const mockData = [{ id: 1, title: 'Art 1' }, { id: 2, title: 'Art 2' }];
    (useFavoritesContext as jest.Mock).mockReturnValue({ favorites: [1, 2] });
    (useQuery as jest.Mock).mockReturnValue({ data: mockData, isPending: false, isError: false });

    render(<Favorites />);
    expect(screen.getByText('Rendered 2 favorite cards')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const mockData = [{ id: 1, title: 'Art 1' }];
    (useFavoritesContext as jest.Mock).mockReturnValue({ favorites: [1] });
    (useQuery as jest.Mock).mockReturnValue({ data: mockData, isPending: false, isError: false });

    const { asFragment } = render(<Favorites />);
    expect(asFragment()).toMatchSnapshot();
  });
});
