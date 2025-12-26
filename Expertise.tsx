'use client'

const expertise = [
  {
    number: '01',
    title: 'GTM Strategy & Execution',
    description: 'Architecting go-to-market motions for cloud, SaaS, and enterprise workloads across direct, partner, and marketplace channels.',
  },
  {
    number: '02',
    title: 'Revenue Operations',
    description: 'Building scalable frameworks for goal planning, territory management, pipeline forecasting, and performance analytics.',
  },
  {
    number: '03',
    title: 'Business Intelligence',
    description: 'Transforming data into actionable insights through self-serve dashboards, predictive modeling, and automated reporting.',
  },
  {
    number: '04',
    title: 'Partner & Alliance Strategy',
    description: 'Developing partner ecosystems with CSPs, GSIs, ISVs. Expertise in co-sell motions, funding programs, and profitability frameworks.',
  },
  {
    number: '05',
    title: 'AI & Agentic Automation',
    description: 'Implementing AI-driven solutions for sales automation, pipeline management, and data workflow optimization.',
  },
  {
    number: '06',
    title: 'Team & Capability Building',
    description: 'Building high-performance teams through coaching, enablement, and scalable operational mechanisms.',
  },
]

export function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-navy">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="section-label justify-center">Core Expertise</span>
          <h2 className="font-serif text-4xl text-white">Strategic Capabilities</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item) => (
            <div 
              key={item.number}
              className="group bg-white/[0.03] border border-white/[0.08] p-8 relative overflow-hidden hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-400"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold via-gold-light to-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
              
              <div className="font-serif text-5xl text-gold/30 leading-none mb-4">
                {item.number}
              </div>
              
              <h3 className="font-serif text-xl text-white mb-3">
                {item.title}
              </h3>
              
              <p className="text-sm text-white/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
