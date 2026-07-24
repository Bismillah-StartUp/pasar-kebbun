'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface PageHeroImage {
  src: string;
  alt?: string;
}

interface PageHeroProps {
  image?: string;
  images?: PageHeroImage[];
  title: string;
  alt?: string;
  interval?: number;
}

export default function PageHero({ image, images, title, alt, interval = 5000 }: PageHeroProps) {
  const slides: PageHeroImage[] = images?.length ? images : [{ src: image ?? '', alt }];
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(() => setActive((p) => (p + 1) % slides.length), interval);
    return () => clearInterval(t);
  }, [slides.length, interval]);

  return (
    <div className="relative w-full h-72 md:h-96 overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt ?? title}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/50" style={{ zIndex: 2 }} />
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-8 md:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-8 h-0.5 bg-accent mb-3" />
          <h1 className="text-[48px] leading-12 tracking-[-1.2px] font-bold text-white">{title}</h1>
        </div>
      </div>
    </div>
  );
}
