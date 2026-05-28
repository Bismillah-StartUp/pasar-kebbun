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
  price,
}: CulinaryCardProps) {
  return (
    <div className="flex gap-6 rounded-lg bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      {/* Image Section */}
      <div className="relative w-1/3 h-60 shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100px, 300px"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between p-6 flex-1">
        {/* Header */}
        <div>
          <h3 className="text-2xl font-bold text-green-700 mb-3">{title}</h3>
          <p className="text-gray-700 text-sm leading-relaxed text-justify">
            {description}
          </p>
        </div>

        {/* Footer */}
        {price && (
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <span className="text-lg font-semibold text-gray-800">Harga</span>
            <span className="text-2xl font-bold text-green-700">
              Rp {typeof price === 'number' ? price.toLocaleString('id-ID') : price}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
