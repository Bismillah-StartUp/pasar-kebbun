import Image from 'next/image';

interface PageHeroProps {
  image: string;
  title: string;
  alt?: string;
}

export default function PageHero({ image, title, alt }: PageHeroProps) {
  return (
    <div className="relative w-full h-72 md:h-96 overflow-hidden">
      <Image
        src={image}
        alt={alt ?? title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10">
        <div className="w-8 h-0.5 bg-accent mb-3" />
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
      </div>
    </div>
  );
}
