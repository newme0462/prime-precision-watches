import { ArrowRight } from 'lucide-react'
import { NAV_LINKS } from '../data/content'

export default function Navbar() {
  return (
    <nav className="mb-12 flex items-center justify-between border-b border-gray-800 pb-6">
      <a href="#top" aria-label="Prime Precision home" className="flex items-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <path d="M4 19V5H8.5L14 14.5V5H19V19H14.5L9 9.5V19H4Z" fill="currentColor" />
        </svg>
      </a>

      <div className="hidden space-x-12 text-sm font-medium text-gray-400 md:flex">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="transition-colors hover:text-white">
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="#contacts"
        className="inline-flex items-center rounded-full border border-gray-600 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black"
      >
        Contact Us
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </nav>
  )
}
