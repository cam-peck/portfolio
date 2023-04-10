import { fireEvent, render, screen } from '@testing-library/react';
import TextareaInput from '../inputs/textarea-input';
import '@testing-library/jest-dom';

describe('Textarea', () => {
  let onChange: () => void;

  beforeEach(() => {
    const labelText = 'Top Secret Message:';
    const name = 'message';
    const placeholder = 'the best message!';
    const value = 'Treasure today.';
    onChange = jest.fn();
    render(<TextareaInput labelText={labelText} name={name} placeholder={placeholder} value={value} onChange={onChange} />);
  });

  it('renders the appropriate label text', () => {
    const nameLabel = screen.getByText('Top Secret Message:');
    expect(nameLabel).toBeInTheDocument();
  });

  it('renders the appropriate placeholder text', () => {
    const placeholder = screen.getByPlaceholderText('the best message!');
    expect(placeholder).toBeInTheDocument();
  });

  it('renders the appropriate value text', () => {
    const nameInput = screen.getByRole('textbox', { name: 'message' });
    expect((nameInput as HTMLInputElement).value).toBe('Treasure today.');
  });

  it('calls the onChange function with the new value when a user types in the input.', () => {
    const nameInput = screen.getByRole('textbox', { name: 'message' });
    fireEvent.change(nameInput, { target: { value: 'Good things come to those who wait.' } });
    expect(onChange).toHaveBeenCalledWith('Good things come to those who wait.');
  });
});
