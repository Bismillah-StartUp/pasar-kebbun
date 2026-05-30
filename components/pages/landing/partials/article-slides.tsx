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




        </div>
      </div>
    </section>
  );
}
