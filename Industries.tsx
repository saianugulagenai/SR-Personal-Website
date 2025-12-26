import { Activity, Monitor, PieChart, Users, Globe } from 'lucide-react'

const industries = [
  { icon: Activity, label: 'Cloud Infrastructure' },
  { icon: Monitor, label: 'SaaS & Software' },
  { icon: PieChart, label: 'AI & Machine Learning' },
  { icon: Users, label: 'Partner Ecosystems' },
  { icon: Globe, label: 'Enterprise Technology' },
]

export function Industries() {
  return (
    <section className="py-16 bg-white border-y border-black/5">
      <div className="max-w-5xl mx-auto px-8 text-center">
        <p className="text-xs text-slate-400 uppercase tracking-widest mb-8">
          Expertise Across Technology Sectors
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {industries.map(({ icon: Icon, label }) => (
            <span 
              key={label}
              className="flex items-center gap-2 text-sm font-medium text-slate-600 opacity-70 hover:opacity-100 transition-opacity"
            >
              <Icon size={20} className="text-gold" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
