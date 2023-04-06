interface SubmitResponse {
  success: boolean;
  onClick: (boolean: boolean) => void;
}

export default function SubmitResponse({ success, onClick }: SubmitResponse) {
  const successHeader = 'Submit successful.';
  const failureHeader = 'Oops. We ran into an unexpected error.';

  const successSubHeader = 'Thank you for your feedback!';
  const failureSubHeader = 'Please try again later.';

  return (
    <div className="flex flex-col justify-center items-center w-full bg-charcoal text-ghostwhite p-8 rounded-xl h-[560px]">
      <h1 className="text-[40px]">{success ? successHeader : failureHeader}</h1>
      <h1 className="text-[32px] mb-8">{success ? successSubHeader : failureSubHeader}</h1>
      <button
        className="p-2 px-3 w-[140px] xsm:min-w-[120px] text-charcoal bg-lightblue rounded-lg shadow-lg hover:scale-[1.03] active:translate-y-[1px]"
        onClick={() => onClick(false)}
      >
        Return to form
      </button>
    </div>
  );
}
