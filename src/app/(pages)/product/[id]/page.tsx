"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Vinyl } from "@/types";
import { useCart } from "@/context/CartContext";
import { useState, useEffect, use } from "react";

import { Button } from "@/components/UI/Button";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params);
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Vinyl | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) {
          setProduct(null);
        } else {
          const data = await res.json();
          setProduct(data);
        }
      } catch (error) {
        console.error("Failed to fetch product", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold mx-auto"></div>
        <p className="mt-4 text-gray-400">Loading Record Details...</p>
      </div>
    );
  }

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Link
        href="/shop"
        className="text-gray-400 hover:text-gold mb-8 inline-block transition-colors font-medium"
      >
        ← Back to Collection
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Cover Art */}
        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/5 group">
          <Image
            src={product.coverImage}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-8">
          <div>
            <span className="text-gold font-mono tracking-widest text-sm uppercase">
              {product.artist}
            </span>
            <h1 className="text-5xl font-black mt-2 mb-4 tracking-tighter text-white">
              {product.title}
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-mono text-gold">
                ${product.price}
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 uppercase tracking-widest">
                {product.year} • {product.genre}
              </span>
            </div>
          </div>

          <div className="p-6 bg-midnight rounded-2xl border border-white/5">
            <h3 className="text-lg font-bold mb-3 text-brass uppercase tracking-tight">
              The Story
            </h3>
            <p className="text-gray-300 leading-relaxed font-light">
              {product.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-tighter border-b border-white/10 pb-2 text-white">
              Tracklist
            </h3>
            <ul className="space-y-1">
              {product.tracklist.map((track, index) => (
                <li key={index} className="flex items-center gap-4 py-2 group">
                  <span className="text-gray-500 font-mono text-xs w-6">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="text-gray-300 group-hover:text-gold transition-colors text-sm">
                    {track}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Button
            onClick={handleAddToCart}
            disabled={isAdding}
            variant={isAdding ? undefined : "secondary"}
            size="xl"

            fullWidth
            className={`font-black transition-all ${isAdding
              ? "bg-green-600! text-white! hover:bg-green-600!"
              : ""
              }`}
          >
            {isAdding ? "ADDED TO COLLECTION" : "Buy Vinyl"}
          </Button>
        </div>
      </div>
    </div>
  );
}
