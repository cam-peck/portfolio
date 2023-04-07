import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import ContactForm from '../contact-form';
import '@testing-library/jest-dom';
import { server } from '../__mocks__/server';
import 'whatwg-fetch';

describe('Projects', () => {
  beforeEach(() => {
    server.listen();
    render(<ContactForm />);
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
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

  it('successfully submits data and gives the user appropriate feedback when "Submit" is clicked', async () => {
    const nameInput = screen.getByRole('textbox', { name: 'name' });
    const emailInput = screen.getByRole('textbox', { name: 'email' });
    const messageInput = screen.getByRole('textbox', { name: 'message' });
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(nameInput, { target: { value: 'Cameroonie' } });
    fireEvent.change(emailInput, { target: { value: 'cameroonie@bestest-test.com' } });
    fireEvent.change(messageInput, { target: { value: 'Cameroon is a country in Africa.' } });
    fireEvent.click(submitButton);

    await waitForElementToBeRemoved(screen.getByTestId('loading-spinner'));
    expect(screen.getByText('Submit successful.')).toBeInTheDocument();
  });

  it('Clears the inputs and returns to the form when "Return to form" is clicked after a submission"', async () => {
    const nameInput = screen.getByRole('textbox', { name: 'name' });
    const emailInput = screen.getByRole('textbox', { name: 'email' });
    const messageInput = screen.getByRole('textbox', { name: 'message' });
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(nameInput, { target: { value: 'Cameroonie' } });
    fireEvent.change(emailInput, { target: { value: 'cameroonie@bestest-test.com' } });
    fireEvent.change(messageInput, { target: { value: 'Cameroon is a country in Africa.' } });
    fireEvent.click(submitButton);

    await waitForElementToBeRemoved(screen.getByTestId('loading-spinner'));
    expect(screen.getByText('Submit successful.')).toBeInTheDocument();

    const returnToFormButton = screen.getByRole('button', { name: 'Return to form' });
    fireEvent.click(returnToFormButton);

    const newNameInput = screen.getByRole('textbox', { name: 'name' });
    const newEmailInput = screen.getByRole('textbox', { name: 'email' });
    const newMessageInput = screen.getByRole('textbox', { name: 'message' });
    const newSubmitButton = screen.getByRole('button', { name: 'Submit' });
    expect(newNameInput).toBeInTheDocument();
    expect((newNameInput as HTMLInputElement).value).toBe('');
    expect(newEmailInput).toBeInTheDocument();
    expect((newEmailInput as HTMLInputElement).value).toBe('');
    expect(newMessageInput).toBeInTheDocument();
    expect((newMessageInput as HTMLInputElement).value).toBe('');
    expect(newSubmitButton).toBeInTheDocument();
  });

  it('shows the appropriate error message when submission is unsuccessful', async () => {
    const nameInput = screen.getByRole('textbox', { name: 'name' });
    const emailInput = screen.getByRole('textbox', { name: 'email' });
    const messageInput = screen.getByRole('textbox', { name: 'message' });
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(nameInput, { target: { value: 'Server Thrower' } });
    fireEvent.change(emailInput, { target: { value: 'thebestthrower@discus.net' } });
    fireEvent.change(messageInput, { target: { value: 'Nobody throws server errors like I do.' } });
    fireEvent.click(submitButton);

    await waitForElementToBeRemoved(screen.getByTestId('loading-spinner'));
    expect(screen.getByText('Oops. We ran into an unexpected error.')).toBeInTheDocument();
  });
});
