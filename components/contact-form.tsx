import { useState } from 'react';
import TextInput from './inputs/text-input';
import TextareaInput from './inputs/textarea-input';

export default function ContactForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const clearForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form className="flex flex-col gap-8 bg-charcoal p-8 rounded-xl text-lg">
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
          className="p-2 px-3 w-[100px] xsm:min-w-[120px] bg-danger-red text-ghostwhite rounded-lg shadow-lg"
          type="button"
        >
          Clear Form
        </button>
        <button className="p-2 px-3 w-[100px] xsm:min-w-[120px] bg-lightblue rounded-lg shadow-lg" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}