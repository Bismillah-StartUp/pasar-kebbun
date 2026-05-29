'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const DEFAULT_IMAGES = [
  '/assets/images/landings/landing_one.png',
  '/assets/images/landings/landing_two.png',
  '/assets/images/landings/landing_three.png',
  '/assets/images/landings/landing_four.png',
  '/assets/images/landings/landing_five.png',
];

const TRANSITION_INTERVAL = 5000; // 5 seconds per image

interface HeadViewsProps {
  images?: string[];
}

export default function HeadViews({ images = DEFAULT_IMAGES }: HeadViewsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setNextIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 600); // Duration of the eraser effect
    }, TRANSITION_INTERVAL);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Current Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-600 ease-in-out ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Image
          src={images[currentIndex]}
          alt={`Landing view ${currentIndex + 1}`}
          fill
          className="object-cover"
          priority={currentIndex === 0}
          sizes="100vw"
        />
      </div>

      {/* Next Image (Hidden, shown during transition) */}
      <div
        className={`absolute inset-0 transition-opacity duration-600 ease-in-out ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image
          src={images[nextIndex]}
          alt={`Landing view ${nextIndex + 1}`}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/40"></div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentIndex(index);
                setNextIndex((index + 1) % IMAGES.length);
                setIsTransitioning(false);
              }, 300);
            }}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-white'
                : 'w-3 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to image ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          setIsTransitioning(true);
          setTimeout(() => {
            const prev = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
            setCurrentIndex(prev);
            setNextIndex((prev + 1) % IMAGES.length);
            setIsTransitioning(false);
          }, 300);
        }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all duration-200"
        aria-label="Previous image"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={() => {
          setIsTransitioning(true);
          setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
            setNextIndex((prev) => (prev + 2) % images.length);
            setIsTransitioning(false);
          }, 300);
        }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all duration-200"
        aria-label="Next image"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Image Counter */}
      <div className="absolute top-6 right-6 z-10 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-semibold">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
