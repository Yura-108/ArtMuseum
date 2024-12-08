import { render, screen } from '@testing-library/react';
import Message from '@components/Message/Message.tsx';

describe('Message', () => {
  it('renders the Message component with children', () => {
    render(<Message>Test Message</Message>);

    const messageElement = screen.getByRole('heading', { level: 2 });
    expect(messageElement).toBeInTheDocument();
    expect(messageElement).toHaveTextContent('Test Message');
    expect(messageElement).toHaveClass('message');
  });

  it('renders correctly with different text', () => {
    render(<Message>Another Message</Message>);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Another Message');
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Message>Snapshot Message</Message>);

    expect(asFragment()).toMatchSnapshot();
  });
});
