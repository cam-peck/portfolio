import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-4 mdlg:pt-8">
      <div className="mdlg:flex mdlg:mt-28 justify-center">
        <div className="mt-6 w-full mdlg:w-4/12 flex justify-center order-first mdlg:order-last">
          <Image className="rounded-[30%] mdlg:w-[300px]" src="/headshot.jpg" width={240} height={200} alt="profile-image" />
        </div>
        <div className="mdlg:w-1/2 order-last mdlg:order-first">
          <div className="flex flex-col justify-center items-center mdlg:items-start mt-6 leading-tight">
            <h1 className="text-[48px] font-bold text-charcoal text-center mdlg:text-left">Full-Stack PERN Developer</h1>
          </div>
          <div className="mt-6 flex justify-center items-center text-center mdlg:text-left mdlg:justify-start mdlg:pb-4 text-[18px] mb-2">
            <p className="text-black w-10/12">
              Howdy! I&apos;m Cameron Peck, a Software Developer based in Indianapolis. E2E testing is my passion.
            </p>
          </div>
          <div className="flex justify-center mdlg:justify-start items-center">
            <Link href="https://github.com/cam-peck" target="_blank">
              <div className="mt-[2px] hover:bg-darkgray hover:bg-opacity-10 pr-3 py-1.5">
                <Image src="/icons/github.png" alt="github-icon" width={90} height={50} />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/cameronjpeck/" target="_blank">
              <div className="px-3 py-3 hover:bg-darkgray hover:bg-opacity-10">
                <Image src="/icons/linkedin.png" alt="github-icon" width={90} height={50} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-20 mdlg:flex mdlg:w-10/12 mdlg:mx-auto">
        <p className="text-charcoal text-center mdlg:text-left font-bold text-[20px] mdlg:border-r-2 mdlg:pr-6 mdlg:flex items-center">
          Tech Stack
        </p>
        <div className="pt-2 flex justify-center mdlg:justify-start mb-6">
          <hr className="mdlg:hidden text-charcoal w-[112px] border-[1.5px] mdlg:max-w-full" />
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 grid-rows-2 techstack:flex gap-10 justify-center items-center max-w-[300px] sm:max-w-[400px] techstack:max-w-full mx-auto mdlg:mx-12 techstack:mx-12">
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
