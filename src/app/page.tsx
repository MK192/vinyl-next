import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import NewsletterForm from "@/components/NewsletterForm";
import { Vinyl } from "@/types";
import { prisma } from "@/lib/prisma";

async function getFeaturedProducts(): Promise<Vinyl[]> {
  try {
    const products = await prisma.vinyl.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
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
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute aspect-square h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[url('https://i.pinimg.com/736x/29/b7/28/29b728830db4dcefe86b367809bd7693.jpg')] bg-cover bg-center scale-90  rounded-full border border-transparent animate-spin  [animation-duration:20s]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-6xl md:text-6xl font-black mb-6 tracking-tighter text-white">
            ELECTRIC{" "}
            <span className="text-lightRed italic underline decoration-brass/30">
              WIZARD.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light tracking-wide">
            Experience the warmth of analog in a digital world. <br />
            Build collection from timeless classics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="px-8 py-4 bg-lightRed text-black font-bold rounded-full hover:bg-darkRed transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              Browse Vinyls</Link>
            <Link
              href="/"
              className="px-8 py-4 border border-white/20 hover:border-darkRed rounded-full transition-all"
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
            <h2 className="text-5xl font-bold mb-2 text-white">
              Featured Releases
            </h2>
            <p className="text-gray-400">
              Hand-picked classics and modern masterpieces.
            </p>
          </div>
          <Link
            href="/shop"
            className="transition-colors font-semibold hover:!text-light"
          >
            View All Collection →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section >
    </div >
  );
}
