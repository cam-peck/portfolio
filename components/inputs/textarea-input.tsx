interface TextareaInput {
  labelText: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (newValue: string) => void;
}

export default function TextareaInput({ labelText, name, placeholder, value, onChange }: TextareaInput) {
  const style = {
    outline: 'transparent',
  };

  return (
    <div className="flex flex-col gap-2 text-ghostwhite">
      <label htmlFor={name}>{labelText}</label>
      <textarea
        style={style}
        className="border border-charcoal bg-paynesgray focus:border-ghostwhite bg-opacity-90 rounded-lg p-3 pl-[12px]"
        rows={4}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        name="message"
        placeholder={placeholder}
      />
    </div>
  );
}
