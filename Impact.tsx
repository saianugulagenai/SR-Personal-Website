const caseStudies = [
  {
    tag: 'Process Automation',
    title: 'Goal Planning Transformation',
    description: 'Standardized and automated goal planning using enterprise tools, eliminating manual efforts across 30+ managers. Reduced planning timeline significantly.',
    results: [
      { value: '25-30%', label: 'Productivity Gain' },
      { value: '4000+', label: 'Users Enabled' },
      { value: '$1M+', label: '3-Year Savings' },
    ],
  },
  {
    tag: 'Analytics Transformation',
    title: 'Sales Intelligence Platform',
    description: 'Transformed inconsistent reporting into standardized self-serve BI dashboards. Created unified data mart across 15+ sales segments.',
    results: [
      { value: '8-10%', label: 'Business Improvement' },
      { value: '30%', label: 'Time Saved' },
      { value: '20%', label: 'Reports Eliminated' },
    ],
  },
  {
    tag: 'Partner Strategy',
    title: 'Partner Experience Framework',
    description: 'Developed comprehensive partner intelligence framework with Health Score model and propensity modeling for large partner networks.',
    results: [
      { value: '150K+', label: 'Partners Profiled' },
      { value: '6', label: 'Workloads' },
      { value: '85%', label: 'Untapped Potential' },
    ],
  },
  {
    tag: 'AI Automation',
    title: 'Agentic Sales Operations',
    description: 'Designed agentic solutions for pipeline automation including notification agents, deal alerts, and data workflow automation.',
    results: [
      { value: '25-30%', label: 'Efficiency Gain' },
      { value: 'Real-time', label: 'Alerts' },
      { value: '40%', label: 'Manual Reduction' },
    ],
  },
]

export function Impact() {
  return (
    <section id="impact" className="py-24 bg-navy">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="section-label justify-center">Business Impact</span>
          <h2 className="font-serif text-4xl text-white">Transformation Stories</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div 
              key={study.title}
              className="group bg-white/[0.03] border border-white/[0.08] p-8 hover:bg-white/[0.05] hover:border-gold/30 transition-all duration-400"
            >
              <span className="inline-block bg-gold/15 text-gold px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4">
                {study.tag}
              </span>
              
              <h3 className="font-serif text-xl text-white mb-4">
                {study.title}
              </h3>
              
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {study.description}
              </p>
              
              <div className="flex gap-8 pt-6 border-t border-white/[0.08]">
                {study.results.map((result) => (
                  <div key={result.label} className="text-center">
                    <div className="font-serif text-2xl text-gold leading-none">
                      {result.value}
                    </div>
                    <div className="text-xs text-white/50 uppercase tracking-wider mt-1">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
