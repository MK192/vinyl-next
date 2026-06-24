'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-gold to-brass bg-clip-text text-transparent">
              Electric Wizard
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/shop" className="hover:text-gold transition-colors text-sm font-medium uppercase tracking-widest">Shop</Link>
            <Link href="/cart" className="relative group flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:border-gold/50 transition-all">
              <span className="text-sm font-medium uppercase tracking-widest">Cart</span>
              {cartCount > 0 && (
                <span className="bg-gold text-black text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-in zoom-in duration-300">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
