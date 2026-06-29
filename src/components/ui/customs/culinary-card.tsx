import Image from 'next/image';
import { formatRupiah } from '@/lib/utils';

interface CulinaryCardProps {
  image: string;
  title: string;
  description: string;
  hargaKoin?: number;
}

export default function CulinaryCard({ image, title, description, hargaKoin }: CulinaryCardProps) {
  return (
    <div className="flex gap-8 items-start py-6">
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

      <div className="flex-1">
        <h3 className="text-xl font-bold text-primary mb-4 text-center">{title}</h3>

        <p className="text-primary text-sm leading-relaxed text-justify">{description}</p>

        {hargaKoin !== undefined && (
          <p className="text-accent text-sm font-bold mt-3">
            {hargaKoin} Koin <span className="text-slate-400 font-normal">({formatRupiah(hargaKoin)})</span>
          </p>
        )}
      </div>
    </div>
  );
}
