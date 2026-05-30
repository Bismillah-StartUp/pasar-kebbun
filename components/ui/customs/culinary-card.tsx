import Image from 'next/image';
import React from 'react';

interface CulinaryCardProps {
  image: string;
  title: string;
  description: string;
  price?: string | number;
}

export default function CulinaryCard({
  image,
  title,
  description,
}: CulinaryCardProps) {
  return (
    <div className="flex gap-8 items-start py-6">
      {/* Image Section - Fixed width and height */}
      <div className="relative w-52 h-44 shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded"
          sizes="208px"
          priority={false}
          loading="lazy"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1">
        {/* Title */}
        <h3 className="text-xl font-bold text-green-700 mb-4 text-center">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-green-700 text-sm leading-relaxed text-justify">
          {description}
        </p>
      </div>
    </div>
  );
}
