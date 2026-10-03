import { useState } from 'react'
import { MapPin, Mail } from 'lucide-react'

const inputClass =
  'w-full rounded-lg border border-gray-700 bg-white/5 p-3 text-white transition-colors focus:border-gray-400 focus:outline-none'
const labelClass = 'mb-2 block text-xs font-medium uppercase tracking-wider text-gray-400'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
    event.target.reset()
    setTimeout(() => setSent(false), 6000)
  }

  return (
    <section id="contacts" className="mb-16 mt-32 w-full max-w-7xl px-4 sm:px-8">
      <div className="glass-panel flex flex-col gap-12 p-8 md:flex-row md:p-16">
        <div className="w-full md:w-1/2">
          <h2 className="mb-6 text-4xl font-medium tracking-tight">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="mb-8 font-light text-gray-400">
            Have a question about a specific model or need assistance with your luxury purchase? Our dedicated
            concierge team is ready to assist you.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 text-gray-300">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-white" strokeWidth={1.5} />
              <div>
                <p className="font-medium text-white">Boutique Address</p>
                <p className="mt-1 text-sm">
                  15 Luxury Avenue, Victoria Island
                  <br />
                  Lagos, Nigeria
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 text-gray-300">
              <Mail className="mt-1 h-6 w-6 shrink-0 text-white" strokeWidth={1.5} />
              <div>
                <p className="font-medium text-white">Email Us</p>
                <p className="mt-1 text-sm">concierge@primeprecision.com.ng</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="rounded-2xl border border-white/5 bg-black/30 p-6">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className={labelClass}>Full Name</label>
                <input id="name" name="name" type="text" className={inputClass} required />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email Address</label>
                <input id="email" name="email" type="email" className={inputClass} required />
              </div>
              <div>
                <label htmlFor="message" className={labelClass}>Message</label>
                <textarea id="message" name="message" rows={4} className={`${inputClass} resize-none`} required />
              </div>
              <button
                type="submit"
                className="mt-2 rounded-lg bg-white py-3.5 font-medium text-black transition-colors hover:bg-gray-200"
              >
                Send Message
              </button>
              {sent && (
                <p role="status" className="text-center text-sm text-green-400">
                  Message sent successfully. Our concierge will be in touch shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
