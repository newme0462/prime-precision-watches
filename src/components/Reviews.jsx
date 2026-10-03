import { REVIEWS } from '../data/content'

export default function Reviews() {
  return (
    <section id="reviews" className="mt-32 w-full max-w-7xl px-4 sm:px-8">
      <div className="mb-16 text-center">
        <h2 className="mb-6 text-4xl font-medium tracking-tight md:text-5xl">
          Client <span className="text-gradient">Testimonials</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((review, i) => (
          <div
            key={review.name}
            className={`glass-panel relative p-8 ${i === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
          >
            <div className="absolute left-4 top-2 font-serif text-5xl text-gray-700 opacity-50">"</div>
            <p className="relative z-10 mb-6 mt-4 font-light italic text-gray-300">{review.text}</p>
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 font-bold">
                {review.initial}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">{review.name}</p>
                <div className="mt-1 text-xs text-yellow-500" aria-label="5 out of 5 stars">★★★★★</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
