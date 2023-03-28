import Image from 'next/image';

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-4 md:pt-8">
      <div className="md:flex justify-center">
        <div className="md:w-1/2">
          <div className="flex flex-col justify-center items-center md:items-start">
            <h1 className="text-[64px] font-bold text-charcoal">Welcome!</h1>
            <h2 className="text-[40px] font-bold text-charcoal -mt-2 ml-2">I&apos;m Cameron.</h2>
          </div>
          <div className="mt-6 w-full md:w-1/2 flex justify-center">
            <Image className="rounded-[15%] md:w-[300px]" src="/headshot.jpg" width={200} height={200} alt="profile-image" />
          </div>
          <div className="mt-6 flex justify-center md:justify-start pl-2">
            <hr className="text-charcoal w-[100%] max-w-[450px] border-[1.5px] md:max-w-full" />
          </div>
          <div className="mt-6 flex flex-col text-center md:text-left md:justify-start text-[18px] pl-2">
            <p className="text-charcoal text-[24px] mb-2">Test Driven Software Developer.</p>
            <div className="flex flex-col gap-4">
              <p>
                <strong>Learning:</strong> Cypress & E2E Testing
              </p>
              <p>
                <strong>Loves:</strong> GitHub Actions & CI / CD
              </p>
              <p>
                <strong>Reading:</strong> Eloquent JavaScript & The Great Hunt
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6 w-full md:w-1/2 flex justify-center hidden md:flex"></div>
      </div>
      <div className="pt-6 flex justify-center md:justify-start pl-2">
        <hr className="text-charcoal w-[100%] max-w-[450px] border-[1.5px] md:max-w-full" />
      </div>
      <div className="mt-6">
        <p className="text-charcoal text-center text-[24px] mb-6">My Tech Stack</p>
        <div className="grid grid-cols-4 grid-rows-2 gap-10 w-full flex justify-center">
          <Image src="/icons/react.png" alt="react-icon" width={70} height={50} />
          <Image src="/icons/next.png" alt="nextjs-icon" width={70} height={50} />
          <Image src="/icons/node.png" alt="node-icon" width={90} height={50} />
          <Image src="/icons/aws.webp" alt="aws-icon" width={70} height={50} />
          <Image src="/icons/tailwind.png" alt="tailwindcss-icon" width={70} height={50} />
          <Image src="/icons/postgres.png" alt="postgres-icon" width={70} height={50} />
          <Image src="/icons/jest.webp" alt="jest-icon" width={70} height={50} />
          <Image src="/icons/rtl.png" alt="rtl-icon" width={70} height={50} />
        </div>
      </div>
    </main>
  );
}
