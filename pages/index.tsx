import Image from 'next/image';

const imageStyle = {
  borderRadius: '20%',
};

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[64px] font-bold text-charcoal">Welcome!</h1>
        <h2 className="text-[40px] font-bold text-charcoal -mt-2">I&apos;m Cameron.</h2>
        <Image className="pt-4" src="/headshot.jpg" width={200} height={200} alt="navbar-emblem" style={imageStyle} />
      </div>
      <div className="pt-12 flex justify-center">
        <hr className="text-charcoal w-[90%] border-[1.5px]" />
      </div>
      <div className="pt-8 flex justify-center text-center text-[18px]">
        <p>
          I create software for the web. I&apos;m a full stack developer currently learning Next.js and Cypress. I&apos;m also reading
          Eloquent JavaScript and The Great Hunt. They have a surprising amount of things in common.
        </p>
      </div>
    </main>
  );
}
