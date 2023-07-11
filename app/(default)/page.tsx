export const metadata = {
  title: 'Agência Magnum',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Clients from '@/components/clients'
import Features from '@/components/features'
import Features02 from '@/components/features-02'
import TestimonialsCarousel from '@/components/testimonials-carousel'
import Features04 from '@/components/features-04'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <Features02 />
      <TestimonialsCarousel />
      <Features04 />
      {/* <Features03 /> */}
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <Cta />
    </>
  )
}
