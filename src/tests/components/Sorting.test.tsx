import { render, screen, fireEvent } from '@testing-library/react';
import Sorting from '@components/Sorting/Sorting.tsx';


describe('Sorting', () => {
  const mockSetSortMethod = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the Sorting component', () => {
    render(<Sorting setSortMethod={mockSetSortMethod} />);

    expect(screen.getByText('Sorting:')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'By title' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'By artist' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'By date' })).toBeInTheDocument();
  });

  it('calls setSortMethod when a sort method is selected', () => {
    render(<Sorting setSortMethod={mockSetSortMethod} />);

    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'artist' } });

    expect(mockSetSortMethod).toHaveBeenCalledTimes(1);
    expect(mockSetSortMethod).toHaveBeenCalledWith('artist');
  });

  it('updates value when a new option is selected', () => {
    render(<Sorting setSortMethod={mockSetSortMethod} />);

    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'date' } });

    expect(selectElement).toHaveValue('date');
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Sorting setSortMethod={mockSetSortMethod} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
