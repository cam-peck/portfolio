export default function TextareaInput() {
  return (
    <div>
      <label htmlFor="message">Message:</label>
      <textarea
        className="border-2 border-charcoal bg-paynesgray bg-opacity-90 rounded-lg p-3 pl-[12px]"
        rows={4}
        name="message"
        placeholder="The Wheel of Time turns, and Ages come and pass, leaving memories that become legend. Legend fades to myth, and even myth is long forgotten when the Age that gave it birth comes again."
      />
    </div>
  );
}
