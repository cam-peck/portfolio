import Image from 'next/image';

export default function About() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-4 mdlg:pt-8">
      <div className="mb-16 pb-2 border-b-2">
        <h1 data-testid="main-header" className="text-[48px] font-bold text-charcoal text-center mdlg:text-left">
          About Me
        </h1>
      </div>
      <div className="w-full mx-auto overflow-x-scroll">
        <Image className="min-w-[1100px]" src="/about-me.png" width={1600} height={1600} alt="profile-image" />
      </div>
    </main>
  );
}
