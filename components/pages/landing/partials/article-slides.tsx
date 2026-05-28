'use client';

import { useState, useEffect } from 'react';
import ArticleCard from '@/components/ui/customs/article-card';

interface Article {
  id: string;
  image: string;
  title: string;
  source: string;
  href: string;
}

interface ArticleSlidesProps {
  articles: Article[];
  title?: string;
  showTitle?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  itemsPerSlide?: number;
}

export default function ArticleSlides({
  articles,
  title = 'BERITA',
  showTitle = true,
  autoplay = true,
  autoplayInterval = 5000,
  itemsPerSlide = 3,
}: ArticleSlidesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsVisible, setItemsVisible] = useState(itemsPerSlide);

  // Update items per slide based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsVisible(1);
      } else if (window.innerWidth < 1024) {
        setItemsVisible(2);
      } else {
        setItemsVisible(itemsPerSlide);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [itemsPerSlide]);

  // Auto-rotate slides
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (articles.length - itemsVisible + 1));
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, articles.length, itemsVisible]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? articles.length - itemsVisible : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (articles.length - itemsVisible + 1));
  };

  const canSlide = articles.length > itemsVisible;

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        {showTitle && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-green-700 inline-block pb-2 border-b-4 border-yellow-400">
              {title}
            </h2>
          </div>
        )}

        {/* Carousel Container */}
        <div className="relative">
          {/* Articles Wrapper */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out gap-4 sm:gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsVisible + (16 / (itemsVisible * 200)))}%)`,
              }}
            >
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="shrink-0"
                  style={{ width: `calc((100% - ${(itemsVisible - 1) * 16}px) / ${itemsVisible})` }}
                >
                  <ArticleCard
                    image={article.image}
                    title={article.title}
                    source={article.source}
                    href={article.href}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {canSlide && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 sm:-translate-x-16 z-10 bg-green-700 hover:bg-green-800 text-white p-3 rounded-full transition-all duration-200"
                aria-label="Previous articles"
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
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 sm:translate-x-16 z-10 bg-green-700 hover:bg-green-800 text-white p-3 rounded-full transition-all duration-200"
                aria-label="Next articles"
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
            </>
          )}

          {/* Navigation Dots */}
          {canSlide && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: articles.length - itemsVisible + 1 }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-green-700'
                        : 'w-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
