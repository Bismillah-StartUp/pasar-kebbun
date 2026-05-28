import Image from 'next/image';
import Link from 'next/link';

interface ArticleCardProps {
  image: string;
  title: string;
  source: string;
  href: string;
  className?: string;
}

export default function ArticleCard({
  image,
  title,
  source,
  href,
  className = '',
}: ArticleCardProps) {
  return (
    <div
      className={`group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-200">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content Container */}
      <div className="bg-white p-5 flex flex-col justify-between min-h-50">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 line-clamp-3 mb-3 group-hover:text-green-700 transition-colors">
          {title}
        </h3>

        {/* Source */}
        <p className="text-sm text-gray-500 mb-4 line-clamp-1">{source}</p>

        {/* Button */}
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-full transition-colors duration-200 w-fit"
        >
          Baca Disini
        </Link>
      </div>
    </div>
  );
}
