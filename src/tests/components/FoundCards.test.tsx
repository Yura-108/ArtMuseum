import { render, screen } from '@testing-library/react';
import { useQuery } from '@tanstack/react-query';
import { SEARCH_ITEMS_LIMIT } from '@constants/nums';
import FoundCards from '@components/FoundCards/FoundCards.tsx';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

jest.mock(
  '@components/ContainerSmallCards/ContainerSmallCard.tsx',
  () =>
    ({ data }: any) => <div>Rendered {data.length} cards</div>,
);
jest.mock('@components//Message/Message.tsx', () => ({ children }: any) => (
  <div>{children}</div>
));
jest.mock(
  '@components//Skeletons/SmallCardContainerSkeleton.tsx',
  () =>
    ({ length }: any) => <div>Loading {length} cards...</div>,
);

describe('FoundCards', () => {
  const mockQueryKey = 'searchQuery';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('does not render anything if debouncedQuery is empty', () => {
    const { container } = render(<FoundCards debouncedQuery="" />);
    expect(container.firstChild).toBeNull();
  });

  it('renders loading skeleton when data is loading', () => {
    (useQuery as jest.Mock).mockReturnValue({ data: null, isPending: true });

    render(<FoundCards debouncedQuery={mockQueryKey} />);
    expect(
      screen.getByText(`Loading ${SEARCH_ITEMS_LIMIT} cards...`),
    ).toBeInTheDocument();
  });

  it('renders "Nothing was found!" message if no data is returned', () => {
    (useQuery as jest.Mock).mockReturnValue({ data: [], isPending: false });

    render(<FoundCards debouncedQuery={mockQueryKey} />);
    expect(screen.getByText('Nothing was found!')).toBeInTheDocument();
  });

  it('renders the container with found cards when data is returned', () => {
    const mockData = [
      { id: 1, title: 'Card 1' },
      { id: 2, title: 'Card 2' },
    ];
    (useQuery as jest.Mock).mockReturnValue({
      data: mockData,
      isPending: false,
    });

    render(<FoundCards debouncedQuery={mockQueryKey} />);
    expect(screen.getByText('Rendered 2 cards')).toBeInTheDocument();
  });
});
