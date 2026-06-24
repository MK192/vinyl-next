import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import NewsletterForm from "@/components/NewsletterForm";
import { Vinyl } from "@/types";

import { prisma } from "@/lib/prisma";

async function getFeaturedProducts(): Promise<Vinyl[]> {
  try {
    const products = await prisma.vinyl.findMany({
      orderBy: { createdAt: "desc" },
      take: 3,
    });
    return products.map((product) => ({
      ...product,
      createdAt: product.createdAt.toISOString(),
      updatedAt: product.updatedAt.toISOString(),
    }));
  } catch (error) {
    console.error("Failed to fetch featured products:", error);
    return [];
  }
}

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=2000')] bg-cover bg-center opacity-30 scale-105 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white">
            ELECTRIC{" "}
            <span className="text-gold italic underline decoration-brass/30">
              WIZARD.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light tracking-wide">
            Experience the warmth of analog in a digital world. <br />
            Curated vinyl for the discerning ear.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="px-8 py-4 bg-gold text-black font-bold rounded-full hover:bg-brass transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              Shop</Link>
            <Link
              href="/"
              className="px-8 py-4 border border-white/20 hover:border-gold/50 rounded-full transition-all text-white"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-white">
              Featured Releases
            </h2>
            <p className="text-gray-400">
              Hand-picked classics and modern masterpieces.
            </p>
          </div>
          <Link
            href="/shop"
            className="text-gold hover:text-brass transition-colors font-semibold"
          >
            View All Collection →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <NewsletterForm />
    </div>
  );
}
