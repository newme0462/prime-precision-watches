import { ArrowRight, ArrowDown } from 'lucide-react'
import Navbar from './Navbar'
import WatchViewer from './WatchViewer'
import { MODEL_URL, HERO_PRICE } from '../data/content'

export default function Hero() {
  return (
    <div
      id="top"
      className="glass-panel relative flex min-h-[800px] w-full max-w-7xl flex-col justify-between p-8 md:p-12 lg:p-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-gray-600 opacity-20 mix-blend-screen blur-[100px]" />

      <Navbar />

      <main className="relative z-10 flex flex-grow flex-col items-center justify-between lg:flex-row">
        {/* Left: text */}
        <div className="z-20 w-full pr-0 text-center lg:w-1/2 lg:pr-12 lg:text-left">
          <h1 className="mb-8 text-5xl font-medium leading-tight tracking-tight sm:text-6xl lg:text-[5rem]">
            Timeless
            <br />
            elegance &amp;
            <br />
            <span className="text-gradient">swiss precision</span>
          </h1>

          <p className="mx-auto mb-10 max-w-md text-sm font-light leading-relaxed text-gray-400 lg:mx-0">
            At "Prime Precision" we are not just a store, we are an arena where time takes the form of elegance, and
            where every watch is the start of a new story. We create a world where a watch not only measures time, but
            becomes a symbol of elegance, style and excellence.
          </p>

          <button
            type="button"
            className="inline-flex items-center rounded-full bg-white px-8 py-3.5 font-medium text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-colors hover:bg-gray-200"
          >
            Buy for {HERO_PRICE}
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        {/* Right: 3D model */}
        <div className="relative mt-16 flex h-[400px] w-full items-center justify-center lg:mt-0 lg:h-[600px] lg:w-1/2 lg:justify-end">
          <WatchViewer src={MODEL_URL} alt="A 3D model of a Swiss watch" />
          <div className="pointer-events-none absolute inset-0 z-0 rounded-full bg-white opacity-5 blur-[50px]" />
        </div>
      </main>

      {/* Footer / social */}
      <footer className="mt-12 flex flex-col items-center justify-between border-t border-gray-800/50 pt-6 text-xs font-medium text-gray-500 sm:flex-row">
        <div className="mb-4 flex space-x-8 sm:mb-0">
          <a href="#" className="transition-colors hover:text-white">Instagram</a>
          <a href="#" className="transition-colors hover:text-white">Facebook</a>
          <a href="#" className="transition-colors hover:text-white">YouTube</a>
        </div>

        <div className="flex items-center space-x-2">
          <span>Scroll Below</span>
          <ArrowDown className="h-3 w-3" />
        </div>
      </footer>
    </div>
  )
}
