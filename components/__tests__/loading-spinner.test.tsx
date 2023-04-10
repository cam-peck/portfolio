import { render, screen } from '@testing-library/react';
import LoadingSpinner from '../loading-spinner';
import '@testing-library/jest-dom';

describe('Loading Spinner', () => {
  beforeEach(() => {
    render(<LoadingSpinner />);
  });

  it('renders the loading spinner with the ellipsis animation class', () => {
    const loadingSpinner = screen.getByTestId('loading-spinner');
    expect(loadingSpinner.firstChild).toHaveClass('lds-ellipsis');
    expect(loadingSpinner).toBeInTheDocument();
  });
});
