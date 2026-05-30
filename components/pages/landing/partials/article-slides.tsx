'use client';

import { useState, useEffect, useRef } from 'react';
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
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragCurrent, setDragCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragCurrent(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    setDragCurrent(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const dragDistance = dragStart - dragCurrent;
    const threshold = 50; // minimum drag distance to trigger slide change

    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        // Dragged left - show next
        setCurrentIndex((prev) => (prev + 1) % (articles.length - itemsVisible + 1));
      } else {
        // Dragged right - show previous
        setCurrentIndex((prev) =>
          prev === 0 ? articles.length - itemsVisible : prev - 1
        );
      }
    }
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
    setDragCurrent(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    setDragCurrent(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const dragDistance = dragStart - dragCurrent;
    const threshold = 50;

    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        setCurrentIndex((prev) => (prev + 1) % (articles.length - itemsVisible + 1));
      } else {
        setCurrentIndex((prev) =>
          prev === 0 ? articles.length - itemsVisible : prev - 1
        );
      }
    }
  };

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
        <div
          ref={containerRef}
          className="relative cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Articles Wrapper */}
          <div className="overflow-hidden select-none">
            <div
              className={`flex transition-transform ${isDragging ? '' : 'duration-500'} ease-out gap-4 sm:gap-6`}
              style={{
                transform: `translateX(-${(currentIndex + (dragStart - dragCurrent) / 300) * (100 / itemsVisible + (16 / (itemsVisible * 200)))}%)`,
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
