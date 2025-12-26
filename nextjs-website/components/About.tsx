import { Check } from 'lucide-react'

const highlights = [
  'Partner ecosystem strategy at scale',
  'AI/ML-driven sales intelligence',
  'Global sales operations transformation',
  'High-performance team leadership',
]

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-16 items-start">
          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-navy to-navy-light aspect-[4/5] flex items-center justify-center relative overflow-hidden">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: 'linear-gradient(rgba(201,169,98,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,98,0.05) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              <span className="font-serif text-8xl text-gold/30">SA</span>
            </div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 border border-gold/30" />
          </div>
          
          {/* Content */}
          <div>
            <h2 className="font-serif text-4xl text-slate-900 mb-6">
              Building Revenue Engines at Scale
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              I architect scalable GTM frameworks and data-driven operating mechanisms 
              that transform go-to-market operations into predictable revenue engines.
            </p>
            
            <p className="text-slate-500 leading-relaxed mb-6">
              With 15+ years leading global sales operations and analytics functions at 
              leading cloud and technology companies, I've developed a unique methodology 
              for enabling significant growth through systematic operational excellence.
            </p>
            
            <p className="text-slate-500 leading-relaxed mb-8">
              My approach combines strategic vision with execution rigor—leveraging AI-driven 
              automation, predictive analytics, and high-performance team building to deliver 
              measurable business outcomes.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 pt-8 border-t border-slate-100">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gold rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-navy" />
                  </div>
                  <span className="text-sm text-slate-500">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
