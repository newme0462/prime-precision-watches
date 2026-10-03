import Hero from './components/Hero'
import About from './components/About'
import Collections from './components/Collections'
import Reviews from './components/Reviews'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-8 sm:px-8 md:px-12">
      <Hero />
      <About />
      <Collections />
      <Reviews />
      <Contact />
    </div>
  )
}
