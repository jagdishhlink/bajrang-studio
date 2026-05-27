import SocialLinks from './SocialLinks'

export default function Footer({ business, ai, theme }) {
  const year = new Date().getFullYear()
  const isElegant = theme === 'elegant'

  return (
    <footer className={`py-12 border-t ${isElegant ? 'border-gray-100 bg-gray-50' : 'border-white/5'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            {business.logo ? (
              <img src={business.logo} alt={business.name} className="h-10 w-auto object-contain" />
            ) : (
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold" style={{ background: 'var(--color-secondary)' }}>
                {business.name?.charAt(0) || 'B'}
              </div>
            )}
            <div>
              <span className="font-display font-bold">{business.name}</span>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{ai.tagline}</p>
            </div>
          </div>

          {/* Social links */}
          {business.socials && <SocialLinks socials={business.socials} />}
        </div>

        <div className={`mt-8 pt-6 border-t ${isElegant ? 'border-gray-100' : 'border-white/5'} flex flex-col md:flex-row items-center justify-between gap-4`}>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            &copy; {year} {business.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm" style={{ color: 'var(--text-muted)' }}>
            <a href="#about" className="hover:opacity-100 opacity-60 transition-opacity">About</a>
            <a href="#services" className="hover:opacity-100 opacity-60 transition-opacity">Services</a>
            <a href="#contact" className="hover:opacity-100 opacity-60 transition-opacity">Contact</a>
            {business.mapUrl && (
              <a href={business.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-100 opacity-60 transition-opacity">Maps</a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
