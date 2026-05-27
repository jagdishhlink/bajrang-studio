import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function Gallery({ business, theme }) {
  const [selected, setSelected] = useState(null)
  const images = business.images || []

  if (images.length === 0) return null

  const isElegant = theme === 'elegant'

  return (
    <section id="gallery" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${isElegant ? 'bg-gray-100 text-gray-600' : 'glass text-white/60'}`}>
            Our Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Gallery</h2>
        </div>

        {/* Carousel for larger view */}
        {images.length > 3 && (
          <div className="mb-12">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={true}
              loop={images.length > 3}
              className="pb-12"
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div
                    onClick={() => setSelected(img)}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
                  >
                    <img
                      src={img}
                      alt={`${business.name} ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* Grid for all images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelected(img)}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
            >
              <img
                src={img}
                alt={`${business.name} photo ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4" onClick={() => setSelected(null)}>
          <button onClick={() => setSelected(null)} className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white text-2xl hover:bg-white/20 transition-colors">
            &times;
          </button>
          <img src={selected} alt="Full view" className="max-w-full max-h-[90vh] rounded-xl object-contain" />
        </div>
      )}
    </section>
  )
}
