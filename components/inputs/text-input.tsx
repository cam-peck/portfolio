import React from 'react';

interface TextInput {
  labelText: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (newValue: string) => void;
}

export default function TextInput({ labelText, name, placeholder, value, onChange }: TextInput) {
  return (
    <div className="flex flex-col gap-2 text-ghostwhite">
      <label htmlFor={name}>{labelText}</label>
      <input
        className="border border-charcoal active:border-ghostwhite bg-paynesgray bg-opacity-90 rounded-lg p-3 pl-[12px]"
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
}