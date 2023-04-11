import { fireEvent, render, screen } from '@testing-library/react';
import SubmitResponse from '../submit-response';
import '@testing-library/jest-dom';

describe('Submit Response', () => {
  describe('Submit Success', () => {
    let onClick: (boolean: boolean) => void;
    beforeEach(() => {
      onClick = jest.fn();
      const successStatus = true;
      render(<SubmitResponse success={successStatus} onClick={onClick} />);
    });
    it('renders the appropriate header messages', () => {
      const mainHeader = screen.getByTestId('main-header');
      const subHeader = screen.getByTestId('sub-header');
      expect(mainHeader).toHaveTextContent('Submit successful.');
      expect(subHeader).toHaveTextContent('Thank you for your feedback!');
    });
    it('calls the passed in onClick function when the "Return to form" button is clicked.', () => {
      const returnButton = screen.getByRole('button', { name: 'Return to form' });
      fireEvent.click(returnButton);
      expect(onClick).toHaveBeenCalledWith(false);
    });
  });

  describe('Submit Failure', () => {
    let onClick: (boolean: boolean) => void;
    beforeEach(() => {
      onClick = jest.fn();
      const successStatus = false;
      render(<SubmitResponse success={successStatus} onClick={onClick} />);
    });
    it('renders the appropriate header messages', () => {
      const mainHeader = screen.getByTestId('main-header');
      const subHeader = screen.getByTestId('sub-header');
      expect(mainHeader).toHaveTextContent('Oops. We ran into an unexpected error.');
      expect(subHeader).toHaveTextContent('Please try again later.');
    });
    it('calls the passed in onClick function when the "Return to form" button is clicked.', () => {
      const returnButton = screen.getByRole('button', { name: 'Return to form' });
      fireEvent.click(returnButton);
      expect(onClick).toHaveBeenCalledWith(false);
    });
  });
});
