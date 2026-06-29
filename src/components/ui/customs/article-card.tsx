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
      className={`group flex flex-col items-center justify-start bg-primary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full ${className}`}
    >
      <div className="relative w-full h-48 bg-gray-200">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-6 flex flex-col items-center justify-center gap-4 flex-1 w-full">
        <h3 className="text-lg font-bold text-white text-center line-clamp-3">
          {title}
        </h3>

        <p className="text-sm text-gray-200 text-center line-clamp-1">{source}</p>

        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-gray-900 font-bold py-2 px-6 rounded-full transition-colors duration-200 mt-auto"
        >
          Baca Disini
        </Link>
      </div>
    </div>
  );
}
