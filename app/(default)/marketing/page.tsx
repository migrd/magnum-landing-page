export const metadata = {
  title: 'Agência Magnum',
  description: 'A Magnum é uma empresa especializada em marketing digital e tecnologia, oferecendo soluções inovadoras para negócios que desejam expandir suas vendas, atrair mais clientes e gerenciar suas presenças online. Nossos serviços abrangem desde a criação de chatbots inteligentes, landing pages e sites otimizados, até a automação de processos e a gestão de tráfego pago em plataformas como Facebook Ads, Google Ads e muito mais. Com o nosso método Magnum, diferente do marketing tradicional, proporcionamos resultados tangíveis, pagando as contas dos nossos clientes. Acreditamos em gerar valor para o sucesso dos nossos clientes, pois entendemos que quando eles prosperam, o nosso negócio também prospera. Nossa missão é impulsionar o crescimento dos negócios, oferecendo soluções personalizadas, expertise em marketing digital e tecnologia de ponta. Junte-se à Magnum e descubra o poder de transformar o seu negócio no mercado digital.',
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
