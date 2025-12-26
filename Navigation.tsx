'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#frameworks', label: 'Frameworks' },
  { href: '#impact', label: 'Impact' },
  { href: '#contact', label: 'Contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled ? 'bg-navy/95 backdrop-blur-xl py-4' : 'py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <Link href="/" className="font-serif text-2xl text-white">
            SaiRam<span className="text-gold">.</span>
          </Link>
          
          <ul className="hidden lg:flex gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className="text-white/80 text-sm font-medium uppercase tracking-wider hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <Link 
            href="#contact"
            className="hidden lg:inline-block bg-gradient-to-r from-gold via-gold-light to-gold text-navy px-6 py-3 font-semibold text-xs uppercase tracking-wider hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/30 transition-all"
          >
            Let's Connect
          </Link>
          
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-navy z-[999] flex flex-col p-8 pt-24 transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <button 
          className="absolute top-6 right-6 text-white"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-serif text-2xl text-white py-3 hover:text-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  )
}
