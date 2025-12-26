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

const interests = [
  { value: '', label: 'Select an option' },
  { value: 'advisory', label: 'Advisory & Consulting' },
  { value: 'speaking', label: 'Speaking Engagement' },
  { value: 'collaboration', label: 'Collaboration Opportunity' },
  { value: 'employment', label: 'Employment Opportunity' },
  { value: 'other', label: 'Other' },
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      // Replace YOUR_FORM_ID with actual Formspree ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
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
                <div className="mb-6">
                  <label className="block text-xs text-white/60 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                  />
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
                    I'm interested in
                  </label>
                  <select
                    name="interest"
                    required
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23c9a962' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                    }}
                  >
                    {interests.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-navy">
                        {opt.label}
                      </option>
                    ))}
                  </select>
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
