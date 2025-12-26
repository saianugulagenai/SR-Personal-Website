import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#050d18] py-12">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} SaiRam Anugula. All rights reserved.
        </p>
        
        <div className="flex gap-8">
          <a 
            href="https://www.linkedin.com/in/sairamanugula"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 text-sm hover:text-gold transition-colors"
          >
            LinkedIn
          </a>
          <Link 
            href="#contact"
            className="text-white/40 text-sm hover:text-gold transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
