'use client';

export default function NewsletterForm() {
  return (
    <section className="max-w-5xl mx-auto px-4 w-full text-center py-20 bg-midnight rounded-3xl border border-white/5">
      <h2 className="text-4xl font-bold mb-4">Join the Inner Circle</h2>
      <p className="text-gray-400 mb-8 max-w-md mx-auto">Get early access to limited edition drops and exclusive member-only pressings.</p>
      <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="your@email.com" 
          className="flex-grow bg-black border border-white/10 px-6 py-3 rounded-full focus:outline-none focus:border-gold/50 text-white"
        />
        <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gold transition-colors">
          Subscribe
        </button>
      </form>
    </section>
  );
}
