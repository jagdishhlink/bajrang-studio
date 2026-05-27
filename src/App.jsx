import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import Team from './components/Team'
import FAQ from './components/FAQ'
import Booking from './components/Booking'
import Events from './components/Events'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsApp from './components/WhatsApp'
import { businessData, aiContent, siteConfig } from './data'

export default function App() {
  const theme = siteConfig.theme || 'elegant'
  const sections = siteConfig.sections || []

  return (
    <div className={`theme-${theme}`}>
      <Navbar business={businessData} sections={sections} theme={theme} />
      <Hero business={businessData} ai={aiContent} theme={theme} />

      {sections.includes('about') && <About business={businessData} ai={aiContent} theme={theme} />}
      {sections.includes('services') && <Services ai={aiContent} theme={theme} />}
      {sections.includes('portfolio') && <Portfolio ai={aiContent} business={businessData} />}
      {sections.includes('gallery') && <Gallery business={businessData} theme={theme} />}
      {sections.includes('pricing') && <Pricing ai={aiContent} theme={theme} />}
      {sections.includes('team') && <Team ai={aiContent} />}
      {sections.includes('events') && <Events ai={aiContent} />}
      {sections.includes('booking') && <Booking ai={aiContent} business={businessData} />}
      {sections.includes('faq') && <FAQ ai={aiContent} />}
      {sections.includes('testimonials') && <Testimonials ai={aiContent} theme={theme} />}
      {sections.includes('contact') && <Contact business={businessData} ai={aiContent} theme={theme} />}

      <Footer business={businessData} ai={aiContent} theme={theme} />
      <WhatsApp business={businessData} />
    </div>
  )
}
