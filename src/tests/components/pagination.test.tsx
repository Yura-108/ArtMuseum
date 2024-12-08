import { render, screen, fireEvent } from '@testing-library/react';
import { MAX_PAGE_PAGINATION } from '@constants/nums';
import useRandomPageNumber from '@utils/generatorRandomNumber.ts';
import Pagination from '@components/Pagination/Pagination.tsx';

jest.mock('@utils/generatorRandomNumber.ts', () => jest.fn());

describe('Pagination Component', () => {
  const setActivePageMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders visible pages correctly', () => {
    (useRandomPageNumber as jest.Mock).mockReturnValue(10); // Mock total pages
    render(<Pagination activePage={2} setActivePage={setActivePageMock} />);

    const pages = screen.getAllByText(/^\d+$/); // Matches only page numbers
    expect(pages).toHaveLength(MAX_PAGE_PAGINATION); // Ensure max visible pages is respected
    expect(pages[0]).toHaveTextContent('1'); // First page is 1
    expect(pages[1]).toHaveTextContent('2'); // Second page is 2
  });

  it('calls setActivePage when a page is clicked', () => {
    (useRandomPageNumber as jest.Mock).mockReturnValue(10);
    render(<Pagination activePage={0} setActivePage={setActivePageMock} />);

    const page = screen.getByText('3'); // Clickable page number
    fireEvent.click(page);

    expect(setActivePageMock).toHaveBeenCalledWith(2); // Page numbers are 0-based
  });

  it('disables going to previous range when on the first page', () => {
    (useRandomPageNumber as jest.Mock).mockReturnValue(10);
    render(<Pagination activePage={0} setActivePage={setActivePageMock} />);

    const prevButton = screen.getByAltText('CombinedShapePrev');
    fireEvent.click(prevButton);

    expect(setActivePageMock).not.toHaveBeenCalled();
  });

  it('disables going to next range when on the last page', () => {
    (useRandomPageNumber as jest.Mock).mockReturnValue(4);
    render(<Pagination activePage={4} setActivePage={setActivePageMock} />);

    const nextButton = screen.getByAltText('CombinedShapeNext');
    fireEvent.click(nextButton);

    expect(setActivePageMock).not.toHaveBeenCalled();
  });

  it('updates range when navigating to a page outside the current range', () => {
    (useRandomPageNumber as jest.Mock).mockReturnValue(15);
    render(<Pagination activePage={0} setActivePage={setActivePageMock} />);

    const nextButton = screen.getByAltText('CombinedShapeNext');
    fireEvent.click(nextButton); // Navigate to next range

    expect(setActivePageMock).toHaveBeenCalledWith(1);
  });

  it('highlights the active page', () => {
    (useRandomPageNumber as jest.Mock).mockReturnValue(10);
    render(<Pagination activePage={2} setActivePage={setActivePageMock} />);

    const activePage = screen.getByText('3');
    expect(activePage).toHaveClass('active'); // Ensure the active class is applied
  });
});
