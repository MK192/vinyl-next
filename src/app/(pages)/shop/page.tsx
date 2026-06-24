import ProductCard from '@/components/ProductCard';
import { Vinyl } from '@/types';

import { prisma } from '@/lib/prisma';

async function getProducts(): Promise<Vinyl[]> {
  try {
    const products = await prisma.vinyl.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return products.map((product) => ({
      ...product,
      createdAt: product.createdAt.toISOString(),
      updatedAt: product.updatedAt.toISOString(),
    }));
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw new Error('Failed to fetch products');
  }
}

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <header className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl font-black tracking-tight mb-4">The Collection</h1>
        <p className="text-gray-400">Showing all {products.length} records</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
