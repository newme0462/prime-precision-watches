import { COLLECTIONS } from '../data/content'

export default function Collections() {
  return (
    <section id="pricing" className="mt-32 w-full max-w-7xl px-4 sm:px-8">
      <div className="mb-16 text-center">
        <h2 className="mb-6 text-4xl font-medium tracking-tight md:text-5xl">
          Featured <span className="text-gradient">Collections</span>
        </h2>
        <p className="mx-auto max-w-2xl font-light leading-relaxed text-gray-400">
          Explore our curated selection of luxury timepieces, designed for those who appreciate the extraordinary.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {COLLECTIONS.map((item) => (
          <div
            key={item.name}
            className={`glass-panel group flex flex-col items-center p-6 ${item.featured ? 'border-white/20' : ''}`}
          >
            {item.featured && (
              <div className="absolute -top-3 right-6 z-10 rounded-full bg-white px-3 py-1 text-xs font-bold text-black shadow-lg">
                BEST SELLER
              </div>
            )}
            <div className="mb-6 flex h-64 w-full items-center justify-center overflow-hidden rounded-xl bg-black/20 p-4">
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full transform rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="mb-2 w-full text-left text-xl font-medium">{item.name}</h3>
            <p className="mb-4 line-clamp-2 w-full text-left text-sm font-light text-gray-400">{item.description}</p>
            <div className="mt-auto flex w-full items-center justify-between border-t border-gray-800 pt-4">
              <span className="text-xl font-medium">{item.price}</span>
              <button
                type="button"
                className={
                  item.featured
                    ? 'rounded-full bg-white px-4 py-2 text-sm text-black shadow-md shadow-white/10 transition-colors'
                    : 'rounded-full bg-white/10 px-4 py-2 text-sm transition-colors hover:bg-white hover:text-black'
                }
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
