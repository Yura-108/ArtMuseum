import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import handleImageError from '@utils/handleImageError.ts';
import plugImage from '@assets/images/plug.svg';

describe('handleImageError', () => {
  it('replaces image src and alt attributes when an error occurs', () => {
    render(<img src="broken-link.jpg" alt="Broken image" onError={handleImageError} />);

    const img = screen.getByAltText('Broken image');

    // Эмулируем ошибку загрузки изображения
    fireEvent.error(img);

    // Проверяем, что src заменился на plugImage
    expect(img).toHaveAttribute('src', plugImage);

    // Проверяем, что alt заменился на "Placeholder image"
    expect(img).toHaveAttribute('alt', 'Placeholder image');
  });

  it('does not modify the image src and alt if no error occurs', () => {
    render(<img src="valid-image.jpg" alt="Valid image" onError={handleImageError} />);

    const img = screen.getByAltText('Valid image');

    // Проверяем, что src и alt остались неизменными
    expect(img).toHaveAttribute('src', 'valid-image.jpg');
    expect(img).toHaveAttribute('alt', 'Valid image');
  });
});
