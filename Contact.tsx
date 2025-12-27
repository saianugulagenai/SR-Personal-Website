'use client'

import { useState } from 'react'
import { Mail, Linkedin, MapPin } from 'lucide-react'

const useCases = [
  'GTM strategy for Cloud/SaaS companies',
  'Revenue operations transformation',
  'Partner ecosystem optimization',
  'Sales analytics & BI architecture',
  'AI/Agentic automation implementation',
  'Team building & capability development',
]



export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // HubSpot Form Configuration
  const HUBSPOT_PORTAL_ID = '244707398'
  const HUBSPOT_FORM_GUID = '7399ba13-ec5a-4279-b2ed-eb719508e770'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fields: [
              { name: 'firstname', value: formData.get('firstname') as string },
              { name: 'lastname', value: formData.get('lastname') as string },
              { name: 'email', value: formData.get('email') as string },
              { name: 'phone', value: formData.get('phone') as string },
              { name: 'message', value: formData.get('message') as string },
            ],
            context: {
              pageUri: window.location.href,
              pageName: document.title,
            },
          }),
        }
      )

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      } else {
        const errorData = await response.json()
        console.error('HubSpot submission error:', errorData)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-navy">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="font-serif text-4xl text-white mb-6">
              Let's Build Something Together
            </h2>

            <p className="text-white/70 leading-relaxed mb-8">
              Whether you're scaling GTM operations, optimizing partner ecosystems,
              or building data-driven sales frameworks, I'd welcome the opportunity
              to explore collaboration.
            </p>

            <div className="mb-8">
              <h4 className="text-gold text-xs font-semibold uppercase tracking-wider mb-4">
                How I Can Help
              </h4>
              <ul>
                {useCases.map((item) => (
                  <li
                    key={item}
                    className="text-white/70 text-sm py-2 pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-gold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@sairamanugula.com"
                className="flex items-center gap-4 text-white/80 hover:text-gold transition-colors"
              >
                <span className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <Mail size={18} className="text-gold" />
                </span>
                hello@sairamanugula.com
              </a>

              <a
                href="https://www.linkedin.com/in/sairamanugula"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/80 hover:text-gold transition-colors"
              >
                <span className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <Linkedin size={18} className="text-gold" />
                </span>
                LinkedIn Profile
              </a>

              <span className="flex items-center gap-4 text-white/80">
                <span className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <MapPin size={18} className="text-gold" />
                </span>
                Seattle, Washington
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/[0.03] border border-white/[0.08] p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="font-serif text-2xl text-white mb-4">
                  Thank you for reaching out!
                </div>
                <p className="text-white/60">
                  I'll get back to you within 24-48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-xs text-white/60 uppercase tracking-wider mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      required
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/60 uppercase tracking-wider mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      required
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-xs text-white/60 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-xs text-white/60 uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-xs text-white/60 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-gold via-gold-light to-gold text-navy py-4 font-semibold text-sm uppercase tracking-wider hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
