import Pagination from '../../components/Pagination/Pagination.tsx';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

jest.mock('@tanstack/react-query', () => {
  const originalModule = jest.requireActual('@tanstack/react-query');
  return {
    ...originalModule,
    useQuery: jest.fn(() => ({
      data: 10, // Предполагаем, что всего 10 страниц
    })),
  };
});

const mockSetActivePage = jest.fn();

describe('Pagination Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders pagination with initial pages', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Pagination activePage={0} setActivePage={mockSetActivePage} />
      </QueryClientProvider>,
    );
    // Проверяем, что первая страница отображается
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('calls setActivePage with correct page number on page click', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Pagination activePage={0} setActivePage={mockSetActivePage} />
      </QueryClientProvider>,
    );

    const secondPage = await screen.findByText('2');

    fireEvent.click(secondPage);

    expect(mockSetActivePage).toHaveBeenCalledWith(1);
  });

  it('disables "prev" when on the first page', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Pagination activePage={0} setActivePage={mockSetActivePage} />
      </QueryClientProvider>,
    );
    // Проверяем, что кнопка "Prev" недоступна
    const prevButton = screen.queryByAltText('CombinedShapePrev');
    expect(prevButton).toBeNull();
  });

  it('navigates to the next range when "next" is clicked', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Pagination activePage={0} setActivePage={mockSetActivePage} />
      </QueryClientProvider>,
    );

    // Кнопка "Next"
    const nextButton = screen.getByAltText('CombinedShapeNext');

    // Нажимаем "Next"
    fireEvent.click(nextButton);

    // Проверяем, что setActivePage не вызывался напрямую, потому что Next меняет диапазон
    expect(mockSetActivePage).not.toHaveBeenCalled();

    // Проверяем, что "Next" изменяет диапазон страниц
    const newRangePage = screen.getByText('5'); // Первая страница следующего диапазона
    expect(newRangePage).toBeInTheDocument();
  });
});
