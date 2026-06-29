import Link from 'next/link';
import type { IconType } from 'react-icons';

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
  link: string;
  ctaLabel?: string;
}

export function FeatureCard({ icon: Icon, title, description, link, ctaLabel = 'Lihat Disini' }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-primary transition-transform duration-300">
        <Icon className="w-10 h-10 text-white" />
      </div>
      <h3 className="text-xl font-bold text-primary mb-3 text-center">{title}</h3>
      <p className="text-center text-gray-600 text-sm whitespace-pre-line mb-4">{description}</p>
      <Link href={link}>
        <button className="bg-accent hover:bg-accent/90 text-gray-900 font-bold py-2 px-6 rounded-full transition-colors duration-200 text-sm cursor-pointer">
          {ctaLabel}
        </button>
      </Link>
    </div>
  );
}
