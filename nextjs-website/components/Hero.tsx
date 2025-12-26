'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const keywords = [
  'GTM Strategy',
  'Revenue Ops',
  'AI Automation',
  'Cloud & SaaS',
  'Analytics',
  'Partnerships',
]

const stats = [
  { value: '$B+', label: 'Revenue Enabled' },
  { value: '25-40%', label: 'Efficiency Gains' },
  { value: '4000+', label: 'Teams Enabled' },
]

export function Hero() {
  return (
    <section className="min-h-screen bg-navy relative flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(201,169,98,0.08)_0%,transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(201,169,98,0.05)_0%,transparent_40%)]" />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,169,98,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,98,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-8 py-32 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="section-label">
            GTM Strategy & Revenue Operations
          </span>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Architecting Revenue Growth Through{' '}
            <em className="italic text-gold">Data-Driven</em> Excellence
          </h1>
          
          <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-xl">
            15+ years enabling revenue growth for Cloud, SaaS, and AI companies through 
            scalable GTM frameworks, agentic automation, and predictive analytics.
          </p>
          
          <div className="flex flex-wrap gap-12 mb-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-4xl text-gold leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-white/50 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Link href="#contact" className="btn-primary">
              Start a Conversation
              <ArrowRight size={16} />
            </Link>
            <Link href="#frameworks" className="btn-secondary">
              Explore Frameworks
            </Link>
          </div>
        </div>
        
        {/* Visual Element */}
        <div className="relative hidden lg:flex justify-center items-center">
          {/* Rings */}
          {[300, 400, 500].map((size, i) => (
            <div
              key={size}
              className="absolute border border-gold/10 rounded-full animate-pulse-ring"
              style={{
                width: size,
                height: size,
                animationDelay: `${i}s`,
              }}
            />
          ))}
          
          {/* Keywords */}
          <div className="relative w-64 h-64">
            {keywords.map((keyword, i) => {
              const positions = [
                'top-0 left-1/2 -translate-x-1/2',
                'top-1/4 -right-5',
                'bottom-1/4 -right-10',
                'bottom-0 left-1/2 -translate-x-1/2',
                'bottom-1/4 -left-10',
                'top-1/4 -left-5',
              ]
              return (
                <span
                  key={keyword}
                  className={`absolute bg-navy-light/90 border border-gold/30 px-4 py-2 text-xs text-gold font-medium uppercase tracking-wider whitespace-nowrap animate-float ${positions[i]}`}
                  style={{ animationDelay: `${i * 0.5}s` }}
                >
                  {keyword}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
