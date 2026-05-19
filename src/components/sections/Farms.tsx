"use client";
import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const farms = [
  {
    src: "/images/fazendas/faz1.jpg",
    name: "Fazenda Solar – Região Centro-Oeste",
    sub: "Capacidade instalada · Energia limpa",
  },
  {
    src: "/images/fazendas/faz2.jpg",
    name: "Fazenda Solar – Interior de SP",
    sub: "Tecnologia de ponta · Alta eficiência",
  },
  {
    src: "/images/fazendas/faz3.jpg",
    name: "Fazenda Solar – Fronteira BR/PY",
    sub: "Geração distribuída · Impacto regional",
  },
];

export default function Farms() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      setSelectedIndex(index);
    }
  }, [emblaApi]);

  return (
    <section id="fazendas" className="py-16 sm:py-24 px-4 sm:px-[6%] bg-[#F4F7F9]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-[#00C972] text-xs font-bold uppercase
            tracking-[3px] block mb-3">
            Fazendas Solares
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D1F3C]
            leading-tight mb-4">
            Conheça nossas fazendas
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto">
            Energia renovável gerada nas melhores localizações do Brasil.
          </p>
        </div>

        {/* Carrossel — largura total do container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-5xl mx-auto"
        >
          {/* Viewport do Embla */}
          <div className="relative overflow-hidden rounded-2xl w-full" ref={emblaRef}>
            <div className="flex">
              {farms.map((farm) => (
                <div
                  key={farm.src}
                  className="relative flex-[0_0_100%] h-56 sm:h-80 md:h-[460px]"
                >
                  <Image
                    src={farm.src}
                    alt={farm.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t
                    from-black/70 via-black/10 to-transparent" />

                  {/* Texto sobre a imagem */}
                  <div className="absolute bottom-0 left-0 p-4 sm:p-7">
                    <p className="text-white font-bold text-base sm:text-xl
                      leading-tight mb-1 drop-shadow">
                      {farm.name}
                    </p>
                    <p className="text-white/70 text-sm">{farm.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Botão Anterior */}
            <button
              onClick={scrollPrev}
              aria-label="Slide anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors duration-200"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Botão Próximo */}
            <button
              onClick={scrollNext}
              aria-label="Próximo slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors duration-200"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots de navegação */}
          <div className="flex justify-center gap-2 mt-5">
            {farms.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Ir para slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === i
                    ? "w-8 bg-[#00C972]"
                    : "w-2 bg-[#0D1F3C]/25"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA abaixo do carrossel */}
        <div className="flex justify-center mt-8 sm:mt-10">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-[#00C972]
              text-[#0D1F3C] font-bold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl
              hover:opacity-85 transition-opacity"
          >
            Eu quero economizar
          </a>
        </div>

      </div>
    </section>
  );
}
