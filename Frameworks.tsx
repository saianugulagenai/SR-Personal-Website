import { BarChart3, Clock, Users, LayoutGrid, Zap, Activity } from 'lucide-react'

const frameworks = [
  {
    icon: BarChart3,
    title: 'Partner Health Score Model',
    description: 'Comprehensive partner evaluation framework measuring Alignment (15%), Capability (30%), Execution (30%), and Quality (25%) to prioritize investments.',
    features: ['Partner Scoring', 'Performance Tracking', 'Investment Prioritization', 'Cohort Analysis'],
  },
  {
    icon: Clock,
    title: 'Goal Planning Automation',
    description: 'Standardized methodology for automating goal planning and target setting. Reduces planning cycles by 30-40% while improving data accuracy.',
    features: ['Enterprise Planning Tools', 'Cascade Automation', 'Version Control', 'Attainment Tracking'],
  },
  {
    icon: Users,
    title: 'Partner Maturity Framework',
    description: 'Three-tier classification—Strategic, Focused, Long-tail—enabling differentiated engagement strategies and resource allocation.',
    features: ['Tier Classification', 'Propensity Modeling', 'Graduation Paths', 'Coverage Optimization'],
  },
  {
    icon: LayoutGrid,
    title: 'BI & Reporting Architecture',
    description: 'End-to-end business intelligence framework including data products, self-serve dashboards, and advanced analytics for forecasting.',
    features: ['Dashboard Consolidation', 'Data Products', 'Forecasting Models', 'ROB Automation'],
  },
  {
    icon: Zap,
    title: 'Agentic Automation Solutions',
    description: 'AI-powered automation agents for sales operations including notifications, deal alerts, pipeline management, and workflow optimization.',
    features: ['CRM Agents', 'Batch Processing', 'Alert Systems', 'Data Pipelines'],
  },
  {
    icon: Activity,
    title: 'Sales Intelligence Platform',
    description: 'Unified data architecture integrating CRM, ERP, and third-party sources to deliver standardized analytics for performance and pipeline.',
    features: ['Unified Data Mart', 'Self-Serve Portal', 'ML Insights', 'Customer Profiling'],
  },
]

export function Frameworks() {
  return (
    <section id="frameworks" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="section-label justify-center">Proven Methodologies</span>
          <h2 className="font-serif text-4xl text-slate-900">Frameworks & Models</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {frameworks.map((framework) => {
            const Icon = framework.icon
            return (
              <div 
                key={framework.title}
                className="group bg-white border border-slate-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
              >
                <div className="w-12 h-12 bg-gold/10 rounded flex items-center justify-center mb-6">
                  <Icon size={24} className="text-gold" />
                </div>
                
                <h3 className="font-serif text-xl text-slate-900 mb-3">
                  {framework.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {framework.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {framework.features.map((feature) => (
                    <span 
                      key={feature}
                      className="bg-gold/10 text-slate-600 px-3 py-1.5 text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
