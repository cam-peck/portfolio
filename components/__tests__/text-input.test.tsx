import { fireEvent, render, screen } from '@testing-library/react';
import TextInput from '../inputs/text-input';
import '@testing-library/jest-dom';

describe('Text Input', () => {
  let onChange: () => void;

  beforeEach(() => {
    const labelText = 'Testing:';
    const name = 'testing';
    const placeholder = 'the best test!';
    const value = 'the bestest value';
    onChange = jest.fn();
    render(<TextInput labelText={labelText} name={name} placeholder={placeholder} value={value} onChange={onChange} />);
  });

  it('renders the appropriate label text', () => {
    const nameLabel = screen.getByText('Testing:');
    expect(nameLabel).toBeInTheDocument();
  });

  it('renders the appropriate placeholder text', () => {
    const placeholder = screen.getByPlaceholderText('the best test!');
    expect(placeholder).toBeInTheDocument();
  });

  it('renders the appropriate value text', () => {
    const nameInput = screen.getByRole('textbox', { name: 'testing' });
    expect((nameInput as HTMLInputElement).value).toBe('the bestest value');
  });

  it('calls the onChange function with the new value when a user types in the input.', () => {
    const nameInput = screen.getByRole('textbox', { name: 'testing' });
    fireEvent.change(nameInput, { target: { value: 'woohoo!' } });
    expect(onChange).toHaveBeenCalledWith('woohoo!');
  });
});
