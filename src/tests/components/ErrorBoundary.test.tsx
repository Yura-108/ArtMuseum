import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary.tsx';


describe('ErrorBoundary', () => {
  const FallbackComponent = <h1>Error occurred</h1>;

  it('renders children when no error occurs', () => {
    render(
      <ErrorBoundary fallback={FallbackComponent}>
        <div>Child Component</div>
      </ErrorBoundary>
    );

    // Проверяем, что дочерний компонент отображается
    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });

  it('renders fallback UI when an error occurs', () => {
    const ProblematicComponent = () => {
      throw new Error('Test error');
    };

    render(
      <ErrorBoundary fallback={FallbackComponent}>
        <ProblematicComponent />
      </ErrorBoundary>
    );

    // Проверяем, что отображается fallback
    expect(screen.getByText('Error occurred')).toBeInTheDocument();
  });

  it('renders default fallback UI if no fallback prop is provided', () => {
    const ProblematicComponent = () => {
      throw new Error('Test error');
    };

    render(
      <ErrorBoundary>
        <ProblematicComponent />
      </ErrorBoundary>
    );

    // Проверяем, что отображается стандартный fallback
    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
  });
});
