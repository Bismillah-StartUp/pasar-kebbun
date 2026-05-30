'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
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

const GAP = 24;
const TRANSITION = 'transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';

export default function ArticleSlides({
  articles,
  title = 'BERITA',
  showTitle = true,
  autoplay = true,
  autoplayInterval = 5000,
  itemsPerSlide = 3,
}: ArticleSlidesProps) {
  const [itemsVisible, setItemsVisible] = useState(itemsPerSlide);
  const [itemWidth, setItemWidth] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0); // current real index (starts at cloneCount)
  const isAnimatingRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);

  const cloneCount = itemsPerSlide;

  const clonedArticles = [
    ...articles.slice(-cloneCount),
    ...articles,
    ...articles.slice(0, cloneCount),
  ];

  // Calculate item width in state
  useEffect(() => {
    const updateWidth = () => {
      const containerWidth = wrapperRef.current?.offsetWidth ?? 0;
      if (containerWidth > 0) {
        const width = (containerWidth - GAP * (itemsVisible - 1)) / itemsVisible;
        setItemWidth(width);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [itemsVisible]);

  // Responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsVisible(1);
      else if (window.innerWidth < 1024) setItemsVisible(2);
      else setItemsVisible(itemsPerSlide);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [itemsPerSlide]);

  // Get translateX in px for a given index
  const getTranslateX = useCallback((index: number, dragDelta = 0) => {
    return -(index * (itemWidth + GAP)) + dragDelta;
  }, [itemWidth]);

  // Apply position to track (with or without transition)
  const applyTransform = useCallback((index: number, animated: boolean, dragDelta = 0) => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transition = animated ? TRANSITION : 'none';
    track.style.transform = `translateX(${getTranslateX(index, dragDelta)}px)`;
  }, [getTranslateX]);

  // Set initial position without animation
  useEffect(() => {
    indexRef.current = cloneCount;
    applyTransform(cloneCount, false);
  }, [itemsVisible, cloneCount, applyTransform]);

  // Slide to index
  const slideTo = useCallback((newIndex: number) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    indexRef.current = newIndex;
    applyTransform(newIndex, true);
  }, [applyTransform]);

  // After transition ends — silent reset if on clone
  const handleTransitionEnd = useCallback(() => {
    const realStart = cloneCount;
    const realEnd = cloneCount + articles.length - 1;
    let idx = indexRef.current;

    if (idx > realEnd) {
      idx = realStart + (idx - realEnd - 1);
      indexRef.current = idx;
      applyTransform(idx, false);
    } else if (idx < realStart) {
      idx = realEnd - (realStart - idx - 1);
      indexRef.current = idx;
      applyTransform(idx, false);
    }

    isAnimatingRef.current = false;
  }, [cloneCount, articles.length, applyTransform]);

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      slideTo(indexRef.current + 1);
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, slideTo]);

  // Drag handlers
  const startDrag = (x: number) => {
    if (isAnimatingRef.current) return;
    isDraggingRef.current = true;
    dragStartXRef.current = x;
    if (trackRef.current) trackRef.current.style.transition = 'none';
  };

  const moveDrag = (x: number) => {
    if (!isDraggingRef.current) return;
    const delta = x - dragStartXRef.current;
    applyTransform(indexRef.current, false, delta);
  };

  const endDrag = (x: number) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    const delta = x - dragStartXRef.current;
    const threshold = 50;

    if (delta < -threshold) {
      slideTo(indexRef.current + 1);
    } else if (delta > threshold) {
      slideTo(indexRef.current - 1);
    } else {
      // Snap back
      isAnimatingRef.current = true;
      applyTransform(indexRef.current, true);
      setTimeout(() => { isAnimatingRef.current = false; }, 600);
    }
  };

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {showTitle && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-green-700 inline-block pb-2 border-b-4 border-yellow-400">
              {title}
            </h2>
          </div>
        )}

        <div
          ref={wrapperRef}
          className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={(e) => { e.preventDefault(); startDrag(e.clientX); }}
          onMouseMove={(e) => { e.preventDefault(); moveDrag(e.clientX); }}
          onMouseUp={(e) => endDrag(e.clientX)}
          onMouseLeave={(e) => endDrag(e.clientX)}
          onTouchStart={(e) => { e.preventDefault(); startDrag(e.touches[0].clientX); }}
          onTouchMove={(e) => { e.preventDefault(); moveDrag(e.touches[0].clientX); }}
          onTouchEnd={(e) => endDrag(e.changedTouches[0].clientX)}
        >
          <div
            ref={trackRef}
            className="flex"
            style={{ gap: `${GAP}px` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {clonedArticles.map((article, index) => (
              <div
                key={`${article.id}-${index}`}
                className="shrink-0"
                style={{ width: `${itemWidth}px` }}
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
    </section>
  );
}