import { render, screen } from '@testing-library/react';
import Contact from '../../pages/contact';
import '@testing-library/jest-dom';

describe('Contact Page', () => {
  beforeEach(() => {
    render(<Contact />);
  });

  it('renders a main heading', () => {
    const mainHeading = screen.getByTestId('main-header');
    expect(mainHeading).toBeInTheDocument();
  });

  it('renders the contact form', () => {
    const nameLabel = screen.getByText('Name:');
    const nameInput = screen.getByRole('textbox', { name: 'name' });
    const emailLabel = screen.getByText('Email:');
    const emailInput = screen.getByRole('textbox', { name: 'email' });
    const messageLabel = screen.getByText('Message:');
    const messageInput = screen.getByRole('textbox', { name: 'message' });
    const clearFormButton = screen.getByRole('button', { name: 'Clear Form' });
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    expect(nameLabel).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageLabel).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(clearFormButton).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
