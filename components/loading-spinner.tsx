export default function LoadingSpinner() {
  return (
    <section
      data-testid="loading-spinner"
      className="fixed top-0 left-0 right-0 bottom-0 flex justify-center bg-black bg-opacity-40 items-center z-20"
    >
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </section>
  );
}
