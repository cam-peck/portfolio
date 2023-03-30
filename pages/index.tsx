import Image from 'next/image';

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-4 md:pt-8">
      <div className="md:flex justify-center">
        <div className="md:w-1/2">
          <div className="mt-6 w-full md:w-1/2 flex justify-center">
            <Image className="rounded-[30%] md:w-[300px]" src="/headshot.jpg" width={240} height={200} alt="profile-image" />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start mt-6 leading-tight">
            <h1 className="text-[48px] font-bold text-charcoal text-center">Full-Stack PERN Developer</h1>
          </div>
          <div className="mt-6 flex justify-center items-center text-center md:text-left md:justify-start text-[18px] mb-2">
            <p className="text-black w-10/12">
              Howdy! I&apos;m Cameron Peck, a Software Developer based in Indianapolis. E2E testing is my passion.
            </p>
          </div>
          <div className="flex gap-6 justify-center items-center">
            <div className="pt-1">
              <Image src="/icons/github.png" alt="github-icon" width={90} height={50} />
            </div>
            <div>
              <Image src="/icons/linkedin.png" alt="github-icon" width={90} height={50} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <p className="text-charcoal text-center font-bold text-[20px]">Tech Stack</p>
        <div className="pt-2 flex justify-center md:justify-start mb-6">
          <hr className="text-charcoal w-[112px] border-[1.5px] md:max-w-full" />
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 grid-rows-2 gap-10 justify-center items-center max-w-[300px] sm:max-w-[400px] mx-auto">
          <div className="flex justify-center">
            <Image src="/icons/react.png" alt="react-icon" width={50} height={50} />
          </div>
          <div className="flex justify-center">
            <Image src="/icons/next.png" alt="nextjs-icon" width={50} height={50} />
          </div>
          <div className="flex justify-center">
            <Image src="/icons/node.png" alt="node-icon" width={50} height={50} />
          </div>
          <div className="flex justify-center">
            <Image src="/icons/aws.webp" alt="aws-icon" width={50} height={50} />
          </div>
          <div className="flex justify-center">
            <Image src="/icons/tailwind.png" alt="tailwindcss-icon" width={50} height={50} />
          </div>
          <div className="flex justify-center">
            <Image src="/icons/postgres.png" alt="postgres-icon" width={50} height={50} />
          </div>
          <div className="flex justify-center">
            <Image src="/icons/jest.webp" alt="jest-icon" width={50} height={50} />
          </div>
          <div className="flex justify-center">
            <Image src="/icons/rtl.png" alt="rtl-icon" width={50} height={50} />
          </div>
        </div>
      </div>
    </main>
  );
}
