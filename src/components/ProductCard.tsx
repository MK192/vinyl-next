import Image from 'next/image';
import Link from 'next/link';

//Components
import { Button } from './UI/Button';
//types
import { Vinyl } from '@/types';


interface ProductCardProps {
  product: Vinyl;
}

function getBorderColor(genre: string) {
  switch (genre) {
    case 'Jazz':
      return 'hover:border-jazzBlue';
    case 'Rock':
      return 'hover:border-darkRed';
    case 'Electronic':
      return 'hover:border-electronicPurple';
    default:
      return 'hover:border-gray-400';
  }
}

function getTextColor(genre: String) {
  switch (genre) {
    case 'Jazz':
      return 'text-jazzBlue';
    case 'Rock':
      return 'text-darkRed';
    case 'Electronic':
      return 'text-electronicPurple';
    default:
      return 'text-gray-400';
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const borderColor = getBorderColor(product.genre)
  const textColor = getTextColor(product.genre)

  return (
    <div className={`group relative bg-card-bg rounded-2xl overflow-hidden border-2 border-white/10 ${borderColor} transition-all duration-300 shadow-2xl`}>
      <div className="relative aspect-square overflow-hidden">
        {/* Vinyl Record Animation Behind Cover */}
        <div className="absolute inset-0 flex items-center justify-center translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-12 transition-all duration-500 ease-out">
          <div className="w-4/5 h-4/5 bg-[#111] rounded-full border-4 border-[#222] relative animate-spin-slow shadow-[0_0_20px_rgba(0,0,0,0.8)]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1/3 h-1/3 rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-2 h-2 bg-gold rounded-full" />
              </div>
            </div>
            {/* Grooves */}
            <div className="absolute inset-2 rounded-full border border-white/5" />
            <div className="absolute inset-4 rounded-full border border-white/5" />
            <div className="absolute inset-6 rounded-full border border-white/5" />
          </div>
        </div>

        {/* Album Cover */}
        <Image
          src={product.coverImage}
          alt={product.title}
          fill
          className="object-cover z-10 transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end p-4">
          <Link href={`/product/${product.id}`}>
            <Button
              variant="primary"
              size="sm"
              fullWidth
            >
              View Details
            </Button>
          </Link>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold truncate">{product.title}</h3>
        <p className="text-sm text-gray-400">{product.artist}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-gold font-mono">${product.price}</span>
          <span className={`text-sm ${textColor} font-bold uppercase tracking-widest`}>{product.genre}</span>
        </div>
      </div>
    </div>
  );
}
