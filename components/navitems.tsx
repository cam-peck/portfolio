import Link from 'next/link';

export default function NavItems() {
  return (
    <div className="flex items-center gap-2 font-bold py-2">
      <Link className="hover:bg-lightgray hover:bg-opacity-20 py-4 px-8" id="home" href="/">
        Home
      </Link>
      <Link className="hover:bg-lightgray hover:bg-opacity-20 py-4 px-8" href="/about">
        About
      </Link>
      <Link className="hover:bg-lightgray hover:bg-opacity-20 py-4 px-8" href="/projects">
        Projects
      </Link>
      <Link className="hover:bg-lightgray hover:bg-opacity-20 py-4 px-8" href="/contact">
        Contact
      </Link>
    </div>
  );
}
