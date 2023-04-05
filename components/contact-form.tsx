import React, { useState } from 'react';
import TextInput from './inputs/text-input';
import TextareaInput from './inputs/textarea-input';
import LoadingSpinner from './loading-spinner';

export default function ContactForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const clearForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    };
    try {
      const response = await fetch('/api/firebase', req);
      console.log(response);
      if (response.status !== 200) {
        throw new Error();
      }
      setLoading(false);
      clearForm();
      alert('Submit successful! Thanks for reaching out.');
    } catch (err) {
      setLoading(false);
      alert('We encountered an error on our end. Please try to submit again later.');
      console.error(err);
    }
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)} className="flex flex-col gap-8 bg-charcoal p-8 rounded-xl text-lg">
      <TextInput labelText="Name:" name="name" value={name} onChange={setName} placeholder="Rand al'Thor" />
      <TextInput labelText="Email:" name="email" value={email} onChange={setEmail} placeholder="therealdragon@wheeloftime.net" />
      <TextareaInput
        labelText="Message:"
        name="message"
        value={message}
        onChange={setMessage}
        placeholder="The Wheel of Time turns, and Ages come and pass, leaving memories that become legend. Legend fades to myth, and even myth is long forgotten when the Age that gave it birth comes again."
      />
      <div className="flex w-full justify-end gap-8">
        <button
          onClick={() => clearForm()}
          className="p-2 px-3 w-[100px] xsm:min-w-[120px] bg-danger-red text-ghostwhite rounded-lg shadow-lg hover:scale-[1.02] active:translate-y-[1px]"
          type="button"
        >
          Clear Form
        </button>
        <button
          className="p-2 px-3 w-[100px] xsm:min-w-[120px] bg-lightblue rounded-lg shadow-lg hover:scale-[1.03] active:translate-y-[1px]"
          type="submit"
        >
          Submit
        </button>
      </div>
      {loading ? <LoadingSpinner /> : ''}
    </form>
  );
}
