import { useState, useRef } from 'react';
import Image from 'next/image';

export default function About() {
  const [isDown, setIsDown] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const ref = useRef<HTMLDivElement>(null);

  const setMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    setIsDown(true);
    setStartX(event.pageX);
    setScrollLeft(ref.current.scrollLeft);
  };

  const setMouseUp = () => {
    setIsDown(false);
  };

  const drag = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown || !ref.current) return;
    event.preventDefault();
    const walk = event.pageX - startX;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <main className="max-w-6xl mx-auto px-6 pt-4 mdlg:pt-8">
      <div className="mb-16 pb-2 border-b-2">
        <h1 data-testid="main-header" className="text-[48px] font-bold text-charcoal text-center mdlg:text-left">
          About Me
        </h1>
      </div>
      <div
        className="w-full mx-auto overflow-x-scroll active:cursor-grabbing active:scale-[1.01]"
        ref={ref}
        onMouseDown={(event) => setMouseDown(event)}
        onMouseUp={setMouseUp}
        onMouseMove={(event) => drag(event)}
        onMouseLeave={setMouseUp}
      >
        <Image className="min-w-[1100px]" src="/about-me.png" width={1600} height={1600} alt="about-me-image" draggable={false} />
      </div>
    </main>
  );
}
