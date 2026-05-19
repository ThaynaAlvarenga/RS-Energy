"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ParkingSquare, Zap, Smartphone } from "lucide-react";

const features = [
  {
    Icon: ParkingSquare,
    title: "Estacionamento Gratuito",
    desc: "Estacione enquanto seu veículo recarrega, sem cobranças.",
  },
  {
    Icon: Zap,
    title: "Pague Só pela Recarga",
    desc: "Cobrança transparente e justa pelo que você consumiu.",
  },
  {
    Icon: Smartphone,
    title: "Tudo pelo Aplicativo",
    desc: "Localize, ative e pague sua recarga direto do smartphone.",
  },
];

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function PyaeSection() {
  return (
    <section
      id="pyae"
      className="relative py-24 px-[6%] overflow-x-hidden
        bg-gradient-to-br from-[#0D1F3C] to-[#0a3d2e]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Grid com proporções definidas */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-16 
          items-center">

          {/* COLUNA ESQUERDA — Texto e features */}
          <div className="flex flex-col gap-6">
            <span className="text-[#00E676] text-xs font-bold uppercase
              tracking-[3px] block">
              Em breve · Mobilidade Elétrica
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white
              leading-tight">
              PYA'E Energia<br/>Chegando na Região
            </h2>
            <p className="text-white/65 text-base leading-relaxed">
              Depois de revolucionar a geração solar, chegamos na
              mobilidade elétrica. Carregue seu veículo com energia
              100% renovável.
            </p>

            {/* Features */}
            <div className="flex flex-col gap-5">
              {features.map(({ Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00E676]/15
                    flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={20} strokeWidth={1.5}
                      className="text-[#00E676]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">
                      {title}
                    </p>
                    <p className="text-white/55 text-sm mt-0.5
                      leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 w-fit">
              <a
                href="https://www.instagram.com/cargadorespyae/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#00E676]
                  text-[#0D1F3C] font-bold text-sm px-5 py-3 rounded-xl
                  hover:opacity-85 transition-opacity w-fit"
              >
                <InstagramIcon size={18} />
                Seguir no Instagram
              </a>
              
            </div>
          </div>

          {/* COLUNA DIREITA — Card com mascote sobreposto */}
          <div className="relative">
            {/* Card */}
            <div className="bg-white/8 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#00E676]/15
                  flex items-center justify-center">
                  <Zap size={20} strokeWidth={1.5}
                    className="text-[#00E676]" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm leading-tight">
                    PYA'E Energia
                  </p>
                  <p className="text-white/45 text-xs">
                    Eletropostos Inteligentes
                  </p>
                </div>
              </div>

              <span className="inline-block bg-[#00E676]/15
                text-[#00E676] text-xs font-bold px-3 py-1.5 rounded-full
                uppercase tracking-wide mb-4">
                Em breve
              </span>

              <p className="text-white/60 text-sm leading-relaxed mb-5">
                A próxima revolução em mobilidade sustentável.
                Eletropostos inteligentes distribuídos pela região
                com energia 100% renovável.
              </p>

              <div className="flex gap-2 flex-wrap mb-5">
                <span className="bg-white/8 text-white/75 text-xs
                  font-medium px-3 py-1.5 rounded-full">
                  BR · Brasil
                </span>
                <span className="bg-white/8 text-white/75 text-xs
                  font-medium px-3 py-1.5 rounded-full">
                  PY · Paraguai
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/cargadorespyae/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#00E676]
                    text-sm font-semibold hover:underline"
                >
                  <InstagramIcon size={16} />
                  @cargadorespyae →
                </a>
                <a
                  href="mailto:info@cargadorespyae.com"
                  className="flex items-center gap-2 text-[#00E676]/80
                    text-sm font-semibold hover:text-[#00E676] transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  info@cargadorespyae.com
                </a>
              </div>
            </div>

            {/* Mascote sobreposto na borda direita do card */}
            <div className="hidden lg:block absolute -right-28 -bottom-6 
              z-10 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Image
                  src="/images/pyae/mascote.png"
                  alt="Mascote PYA'E Energia"
                  width={220}
                  height={300}
                  loading="eager"
                  style={{ height: "auto" }}
                  className="object-contain drop-shadow-2xl
                    hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
