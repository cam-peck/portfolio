export default function ContactForm() {
  return (
    <form className="flex flex-col gap-8 bg-charcoal p-8 rounded-xl text-lg">
      <div className="flex flex-col gap-2 text-ghostwhite">
        <label htmlFor="name">Name:</label>
        <input
          className="border border-charcoal active:border-ghostwhite bg-paynesgray bg-opacity-90 rounded-lg p-3 pl-[12px]"
          name="name"
          placeholder="Rand al'Thor"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-2 text-ghostwhite">
        <label htmlFor="email">Email:</label>
        <input
          className="border-2 border-charcoal bg-paynesgray bg-opacity-90 rounded-lg p-3 pl-[12px]"
          name="email"
          type="text"
          placeholder="therealdragon@thewheel.net"
        />
      </div>
      <div className="flex flex-col gap-2 text-ghostwhite">
        <label htmlFor="message">Message:</label>
        <textarea
          className="border-2 border-charcoal bg-paynesgray bg-opacity-90 rounded-lg p-3 pl-[12px]"
          rows={4}
          name="message"
          placeholder="The Wheel of Time turns, and Ages come and pass, leaving memories that become legend. Legend fades to myth, and even myth is long forgotten when the Age that gave it birth comes again."
        />
      </div>
      <div className="flex w-full justify-end gap-8">
        <button className="p-2 px-3 min-w-[120px] bg-danger-red text-ghostwhite rounded-lg shadow-lg" type="button">
          Clear Form
        </button>
        <button className="p-2 px-3 min-w-[120px] bg-lightblue rounded-lg shadow-lg" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
