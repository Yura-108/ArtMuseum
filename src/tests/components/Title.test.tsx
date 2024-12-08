import { render, screen } from '@testing-library/react';
import Title from '@components/Title/Title.tsx';
import '@testing-library/jest-dom';

describe('Title', () => {
  it('renders the Title component with children', () => {
    render(<Title>Test Title</Title>);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders correctly with different children', () => {
    render(<Title>Another Test</Title>);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText('Another Test')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Title>Snapshot Title</Title>);

    expect(asFragment()).toMatchSnapshot();
  });
});
