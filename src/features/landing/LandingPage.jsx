export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">
      {/* 1) Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-emerald-50">
        <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-500">
              New Season • New Picks
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Curated essentials, <span className="text-emerald-600">delivered fast.</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-xl">
              Shop handpicked styles and everyday basics with free returns and same-day dispatch on most orders.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold shadow-md hover:bg-emerald-700 transition">
                Shop Collection
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-300 text-gray-800 font-semibold bg-white hover:bg-gray-50 transition">
                View Bestsellers
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-gray-600">
              <span className="inline-flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-sm">
                  ✓
                </span>
                Free shipping over ₹999
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-sm">
                  ↺
                </span>
                30-day free returns
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-sm">
                  🔒
                </span>
                Secure checkout
              </span>
            </div>
          </div>

          {/* Hero visual placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-white shadow-xl border border-slate-100 p-4 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-100" />
              <div className="rounded-2xl bg-slate-200" />
              <div className="rounded-2xl bg-slate-200" />
              <div className="rounded-2xl bg-slate-100" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-md px-4 py-3 text-xs text-gray-700">
              ⭐ 4.8 / 5 from 1,200+ shoppers
            </div>
          </div>
        </div>
      </section>

      {/* 6) Promo / Offer band */}
      <section className="bg-indigo-600 text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap items-center justify-center gap-2">
          <span className="font-semibold">Limited time:</span>
          <span>Get 10% off orders over ₹1999 with code</span>
          <span className="font-mono px-2 py-0.5 rounded bg-white/10 border border-white/20">
            WELCOME10
          </span>
        </div>
      </section>

      {/* 2) Featured collections */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Shop by collection</h2>
          <button className="text-sm text-indigo-600 font-semibold hover:text-indigo-700">
            View all
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {['Men', 'Women', 'Accessories', 'Home'].map(label => (
            <button
              key={label}
              className="group relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/5] flex items-end p-4 text-left shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <span className="text-sm font-semibold text-white z-10">
                {label}
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
            </button>
          ))}
        </div>
      </section>

      {/* 3) Bestsellers / New arrivals */}
      <section className="max-w-6xl mx-auto px-4 pb-10 md:pb-14">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Bestsellers</h2>
          <div className="flex gap-2 text-xs">
            <button className="px-3 py-1 rounded-full bg-gray-900 text-white">
              Bestsellers
            </button>
            <button className="px-3 py-1 rounded-full bg-white border text-gray-700">
              New Arrivals
            </button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-slate-100" />
              <div className="p-4 flex flex-col gap-2 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                    {i === 0 ? 'Hot' : i === 1 ? 'New' : 'Trending'}
                  </span>
                  <span className="text-xs text-amber-500">★ 4.{8 - i}</span>
                </div>
                <p className="text-sm font-semibold line-clamp-2">
                  Product name placeholder
                </p>
                <p className="text-sm font-bold text-emerald-700 mt-auto">
                  ₹1,299
                </p>
                <button className="mt-2 w-full rounded-full bg-gray-900 text-white text-xs font-semibold py-2 hover:bg-gray-800 transition">
                  Quick add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4) Benefits / Trust */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-4 gap-6">
          {[
            ['🚚', 'Fast shipping', 'Free over ₹999 & same-day dispatch in metro cities.'],
            ['↺', '30-day returns', 'Easy, no-questions-asked returns on all orders.'],
            ['💬', 'Human support', 'Chat and email support 7 days a week.'],
            ['🔒', 'Secure payments', 'UPI, cards, and wallets with encryption.'],
          ].map(([icon, title, desc]) => (
            <div key={title} className="flex gap-3">
              <div className="h-9 w-9 rounded-full bg-indigo-50 flex items-center justify-center">
                <span>{icon}</span>
              </div>
              <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-xs text-gray-600 mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5) Social proof */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Loved by customers</h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            '“Super fast delivery and great curation.”',
            '“Quality is better than expected for the price.”',
            '“Return process was smooth and support was helpful.”',
          ].map((quote, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2 text-amber-500 text-xs">
                {'★★★★★'}
                <span className="text-gray-500 text-[11px]">Verified buyer</span>
              </div>
              <p className="text-gray-700">{quote}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7) Email capture */}
      <section className="max-w-3xl mx-auto px-4 pb-10 md:pb-16">
        <div className="bg-white rounded-3xl shadow-md border border-slate-100 px-6 py-8 md:px-8">
          <h3 className="text-lg md:text-xl font-bold mb-2">
            Get 10% off your first order
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Be the first to know about new drops, exclusive offers, and styling tips.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2.5 rounded-full border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="px-6 py-2.5 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">
              Get my 10% off
            </button>
          </form>
        </div>
      </section>

      {/* 8) Footer essentials */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-gray-600 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-gray-900">About</a>
            <a href="#" className="hover:text-gray-900">FAQ & Support</a>
            <a href="#" className="hover:text-gray-900">Shipping & Returns</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[11px] text-gray-500">We accept</span>
            <div className="flex gap-2 text-[10px]">
              <span className="px-2 py-1 rounded bg-slate-100">UPI</span>
              <span className="px-2 py-1 rounded bg-slate-100">Visa</span>
              <span className="px-2 py-1 rounded bg-slate-100">Mastercard</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

