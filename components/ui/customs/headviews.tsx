'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const TRANSITION_INTERVAL = 5000;
const TRANSITION_DURATION = 800;

interface HeadViewsProps {
  images: string[];
}

export default function HeadViews({ images }: HeadViewsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, TRANSITION_INTERVAL);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {images.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0"
          style={{
            opacity: index === activeIndex ? 1 : 0,
            transition: `opacity ${TRANSITION_DURATION}ms ease-in-out`,
            zIndex: index === activeIndex ? 1 : 0,
          }}
        >
          <Image
            src={src}
            alt={`Landing view ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/40"
        style={{ zIndex: 2 }}
      />
    </div>
  );
}