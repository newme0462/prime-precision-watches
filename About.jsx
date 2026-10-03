import { HERITAGE } from '../data/content'

export default function About() {
  return (
    <section id="about" className="mt-32 w-full max-w-7xl px-4 sm:px-8">
      <div className="mb-16 text-center">
        <h2 className="mb-6 text-4xl font-medium tracking-tight md:text-5xl">
          Our Heritage &amp; <span className="text-gradient">Craftsmanship</span>
        </h2>
        <p className="mx-auto max-w-3xl font-light leading-relaxed text-gray-400">
          For over a century, Prime Precision has been at the forefront of luxury watchmaking. Our timepieces are more
          than just instruments for measuring time; they are masterpieces of micro-engineering, assembled by hand with
          absolute devotion to detail.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {HERITAGE.map((item) => (
          <div key={item.title} className="glass-panel p-8 md:p-12">
            <h3 className="mb-4 text-2xl font-medium">{item.title}</h3>
            <p className="font-light leading-relaxed text-gray-400">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
