import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Для использования Link
import handleImageError from '@utils/handleImageError.ts';
import Card from '../../components/Card/Card.tsx';
import { TextEncoder, TextDecoder } from 'util';

// Полифиллим TextEncoder и TextDecoder
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as unknown as typeof global.TextDecoder;
// Моки для зависимостей
jest.mock('@constants/API.ts', () => ({
  IMAGE_URL: jest.fn(() => 'mocked-image-url'),
}));

jest.mock('@utils/handleImageError.ts', () => jest.fn());

// Мок данных artwork
const mockArtwork = {
  id: 1,
  image_id: 'mock-image-id',
  title: 'Mona Lisa',
  artist_title: 'Leonardo da Vinci',
  on_loan_display: false,
};

describe('Card Component', () => {
  it('renders correctly with artwork data', () => {
    render(
      <Router>
        <Card artwork={mockArtwork} />
      </Router>
    );

    // Проверяем, что изображение рендерится с правильным src
    const img = screen.getByAltText('image');
    expect(img).toHaveAttribute('src', 'mocked-image-url');

    // Проверяем, что компонент CardInfo отображается с правильными данными
    expect(screen.getByText('Mona Lisa')).toBeInTheDocument();
    expect(screen.getByText('Leonardo da Vinci')).toBeInTheDocument();
  });

  it('links to the correct artwork page', () => {
    render(
      <Router>
        <Card artwork={mockArtwork} />
      </Router>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('to', `/artwork/${mockArtwork.id}`);
  });

  it('calls handleImageError when image fails to load', () => {
    render(
      <Router>
        <Card artwork={mockArtwork} />
      </Router>
    );

    // Симулируем ошибку при загрузке изображения
    const img = screen.getByAltText('image');
    img.dispatchEvent(new ErrorEvent('error'));

    // Проверяем, что handleImageError был вызван
    expect(handleImageError).toHaveBeenCalled();
  });

  it('passes the correct props to CardInfo', () => {
    render(
      <Router>
        <Card artwork={mockArtwork} />
      </Router>
    );

    // Проверяем, что компонент CardInfo получил правильные пропсы
    const cardInfo = screen.getByText('Mona Lisa').closest('.card-info'); // Предположим, что у CardInfo есть класс 'card-info'
    expect(cardInfo).toHaveTextContent('Leonardo da Vinci');
    expect(cardInfo).toHaveTextContent('Mona Lisa');
  });
});
