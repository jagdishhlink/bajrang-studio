import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

export default function Hero({ business, ai, theme }) {
  const images = business.images || []
  const hasImages = images.length > 0

  if (theme === 'elegant') return <HeroElegant business={business} ai={ai} images={images} hasImages={hasImages} />
  return <HeroDark business={business} ai={ai} images={images} hasImages={hasImages} />
}

function HeroElegant({ business, ai, images, hasImages }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-width background image slider */}
      {hasImages ? (
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full"
          >
            {images.slice(0, 5).map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={`${business.name} ${i + 1}`} className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 z-0" />
      )}

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
        {business.category && (
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
            {business.category}
          </span>
        )}

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          {business.name}
        </h1>

        <p className="text-xl md:text-2xl font-light opacity-90 mb-4">{ai.tagline}</p>
        <p className="max-w-2xl mx-auto text-base opacity-70 mb-10">{ai.heroDescription}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="px-8 py-4 rounded-full bg-secondary text-white font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg" style={{ backgroundColor: 'var(--color-secondary)' }}>
            {ai.ctaButtonText || 'Get in Touch'}
          </a>
          <a href="#gallery" className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium hover:bg-white/20 transition-all">
            View Our Work
          </a>
        </div>

        {/* Rating */}
        {business.rating && (
          <div className="mt-10 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className={`w-4 h-4 ${i < Math.round(parseFloat(business.rating)) ? 'text-yellow-400' : 'text-white/30'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-bold text-sm">{business.rating}</span>
            {business.reviewsCount && <span className="text-sm opacity-60">({business.reviewsCount} reviews)</span>}
          </div>
        )}
      </div>
    </section>
  )
}

function HeroDark({ business, ai, images, hasImages }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: 'var(--color-primary)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15" style={{ background: 'var(--color-secondary)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <div className="w-2 h-2 rounded-full" style={{ background: 'var(--color-secondary)' }} />
          <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>{business.category}</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 gradient-text">
          {business.name}
        </h1>
        <p className="text-xl md:text-2xl font-light mb-4" style={{ color: 'var(--text-light)' }}>{ai.tagline}</p>
        <p className="max-w-2xl mx-auto text-base mb-10" style={{ color: 'var(--text-muted)' }}>{ai.heroDescription}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg hover:scale-105 transition-all" style={{ background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))` }}>
            {ai.ctaButtonText || 'Get Started'}
          </a>
          <a href="#services" className="px-8 py-4 rounded-full glass font-medium hover:opacity-80 transition-all">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  )
}
