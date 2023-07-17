'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Particles from './particles'
import Highlighter, { HighlighterItem } from './highlighter'

import CarouselImg01 from '@/public/images/carousel-icon-01.svg'
import CarouselImg02 from '@/public/images/carousel-icon-02.svg'
import CarouselImg03 from '@/public/images/carousel-icon-03.svg'
import CarouselImg04 from '@/public/images/carousel-icon-04.svg'
import CarouselImg05 from '@/public/images/carousel-icon-05.svg'

// Import Swiper
import Swiper, { Navigation } from 'swiper'
import 'swiper/swiper.min.css'
Swiper.use([Navigation])

export default function TestimonialsCarousel() {

  const [swiperInitialized, setSwiperInitialized] = useState<boolean>(false)

  useEffect(() => {
    const carousel = new Swiper('.testimonials-carousel', {
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        640: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    })
    setSwiperInitialized(true)
  }, [])

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          { /* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div>
              {/* <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-200 pb-3">Temos os profissionais que você precisa</div> */}
            </div>
            <h3 className="h3 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Para replicar o que a <span className='text-blue-300'>Magnum faz pela sua empresa</span>, você precisaria de no mínimo, 5 funcionários especialistas</h3>
          </div>

          { /* Carousel built with Swiper.js [https://swiperjs.com/] */}
          { /* * Custom styles in src/css/additional-styles/theme.scss */}
          <div className="relative before:absolute before:inset-0 before:-translate-x-full before:z-20 before:bg-gradient-to-l before:from-transparent before:to-slate-900 before:to-20% after:absolute after:inset-0 after:translate-x-full after:z-20 after:bg-gradient-to-r after:from-transparent after:to-slate-900 after:to-20%">
            <div className="testimonials-carousel swiper-container group">
              <Highlighter className="swiper-wrapper w-fit" refresh={swiperInitialized}>
                { /* Carousel items */}
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    { /* Particles animation */}
                    <Particles className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" quantity={3} refresh={swiperInitialized} />                     
                    { /* Radial gradient */}
                    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-blue-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image className="mb-3" src={CarouselImg04} width={56} height={56} alt="Icon 01" />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">Gestor de Tráfego</div>
                        <div className="text-slate-400 mb-3">Responsável por criar e gerenciar campanhas de anúncios pagos em diferentes plataformas, como Facebook Ads, Google Ads e outras, visando aumentar o tráfego qualificado para o site da empresa e maximizar o retorno do investimento em publicidade.</div>
                      </div>
                      {/* <div className="text-right">
                        <a className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group" href="#0">Learn More <span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
                      </div> */}
                    </div>
                  </div>
                </HighlighterItem>
                
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    { /* Particles animation */}
                    <Particles className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" quantity={3} refresh={swiperInitialized} />                     
                    { /* Radial gradient */}
                    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-blue-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image className="mb-3" src={CarouselImg03} width={56} height={56} alt="Icon 01" />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">Designer</div>
                        <div className="text-slate-400 mb-3">Responsável pela criação e design de logotipos, materiais gráficos, identidade visual da marca, imagens para redes sociais, banners e outros elementos visuais que ajudam a fortalecer a imagem e a identidade da empresa.</div>
                      </div>
                      {/* <div className="text-right">
                        <a className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group" href="#0">Learn More <span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
                      </div> */}
                    </div>
                  </div>
                </HighlighterItem>

                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    { /* Particles animation */}
                    <Particles className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" quantity={3} refresh={swiperInitialized} /> 
                    { /* Radial gradient */}
                    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-blue-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image className="mb-3" src={CarouselImg01} width={56} height={56} alt="Icon 01" />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">Analista de Business Intelligence</div>
                        <div className="text-slate-400 mb-3">Coleta e analisa dados de marketing e vendas, fornecendo insights para tomada de decisões. Identifica tendências, realiza pesquisas de mercado e oferece recomendações para impulsionar o crescimento do negócio.</div>
                      </div>
                      {/* <div className="text-right">
                        <a className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group" href="#0">Learn More <span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
                      </div> */}
                    </div>
                  </div>
                </HighlighterItem>

                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    { /* Particles animation */}
                    <Particles className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" quantity={3} refresh={swiperInitialized} />                     
                    { /* Radial gradient */}
                    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-blue-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image className="mb-3" src={CarouselImg05} width={56} height={56} alt="Icon 05" />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">Especialista em Redes Sociais</div>
                        <div className="text-slate-400 mb-3">Encarregado de gerenciar as contas de redes sociais da empresa, criar conteúdo relevante e atraente, desenvolver estratégias de engajamento, responder a comentários e mensagens, e analisar métricas de desempenho para otimizar a presença nas redes sociais.</div>
                      </div>
                      {/* <div className="text-right">
                        <a className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group" href="#0">Learn More <span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
                      </div> */}
                    </div>
                  </div>
                </HighlighterItem>

                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    { /* Particles animation */}
                    <Particles className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" quantity={3} refresh={swiperInitialized} />                     
                    { /* Radial gradient */}
                    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-blue-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image className="mb-3" src={CarouselImg02} width={56} height={56} alt="Icon 01" />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">Desenvolvedor Web</div>
                        <div className="text-slate-400 mb-3">Encarregado de projetar e desenvolver o site da sua empresa, garantindo uma experiência de usuário intuitiva, design atrativo e funcionalidade adequada. Além disso, pode ajudar na implementação de ferramentas e integrações técnicas.</div>
                      </div>
                      {/* <div className="text-right">
                        <a className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group" href="#0">Learn More <span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
                      </div> */}
                    </div>
                  </div>
                </HighlighterItem>

              </Highlighter>
            </div>
          </div>

          { /* Arrows */}
          <div className="flex mt-8 justify-end">
            <button className="carousel-prev relative z-20 w-12 h-12 flex items-center justify-center group">
              <span className="sr-only">Previous</span>
              <svg className="w-4 h-4 fill-slate-500 group-hover:fill-blue-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-12 h-12 flex items-center justify-center group">
              <span className="sr-only">Next</span>
              <svg className="w-4 h-4 fill-slate-500 group-hover:fill-blue-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>

          <div className="max-w-3xl mx-auto text-center pt-14 pb-12 md:pb-12 pt-15">
            <p className="text-lg text-slate-400">Poupe-se do trabalho árduo de encontrar profissionais qualificados e confie na expertise da Magnum para atender às suas necessidades. Com a nossa ajuda, você terá tranquilidade e poderá direcionar seus esforços para impulsionar o <span className='text-blue-300 font-bold'>sucesso do seu negócio</span>.</p>
          </div>
          <div className="flex justify-center items-center">
            <a className="btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white transition duration-150 ease-in-out group" href="https://wa.me/+555192152520?text=Ol%C3%A1,%20eu%20quero%20crescer%20minha%20empresa" target="_blank">
              ENTRE EM CONTATO
                {/* <span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"></span> */}
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}