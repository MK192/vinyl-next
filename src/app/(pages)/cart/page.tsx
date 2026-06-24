'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-4xl font-black mb-6 uppercase tracking-tighter">Your Collection is Empty</h1>
        <p className="text-gray-400 mb-12 max-w-md mx-auto">It seems you haven't added any analog warmth to your collection yet.</p>
        <Link 
          href="/shop" 
          className="px-8 py-4 bg-gold text-black font-bold rounded-full hover:bg-brass transition-all"
        >
          Browse Records
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-black mb-12 uppercase tracking-tighter">YOUR COLLECTION</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-8">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-6 p-6 bg-midnight rounded-2xl border border-white/5 items-center">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={item.coverImage}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.artist}</p>
                <div className="mt-2 text-gold font-mono">${item.price} x {item.quantity}</div>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-gray-500 hover:text-red-500 transition-colors p-2"
              >
                Remove
              </button>
            </div>
          ))}

          <button 
            onClick={clearCart}
            className="text-sm text-gray-500 hover:text-white transition-colors"
          >
            Clear Collection
          </button>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="p-8 bg-card-bg rounded-2xl border border-gold/20 shadow-[0_0_40px_rgba(212,175,55,0.05)] sticky top-24">
            <h2 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">SUMMARY</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Shipping</span>
                <span className="text-green-500">FREE</span>
              </div>
              <div className="flex justify-between text-xl font-bold pt-4 border-t border-white/10">
                <span>Total</span>
                <span className="text-gold font-mono">${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full py-4 bg-gold text-black font-black rounded-xl hover:bg-brass transition-all transform hover:scale-[1.02]">
              PROCEED TO CHECKOUT
            </button>
            
            <p className="mt-6 text-center text-xs text-gray-500 uppercase tracking-widest font-medium">
              Secure Checkout • Global Shipping
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
