export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black mt-auto py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} VinylNext. All rights reserved.</p>
        <p className="mt-2">Premium Vinyl Curations for the Analog Soul.</p>
      </div>
    </footer>
  );
}
