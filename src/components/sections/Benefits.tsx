"use client";
import { motion } from "framer-motion";
import {
  TrendingDown,
  CheckCircle2,
  Leaf,
  ShieldCheck,
  MapPin,
  Zap,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Economia Imediata",
    desc: "Veja a redução na sua conta desde o primeiro mês.",
  },
  {
    icon: CheckCircle2,
    title: "Sem Burocracia",
    desc: "Processo 100% digital e sem documentação complexa.",
  },
  {
    icon: Leaf,
    title: "Compromisso Ambiental",
    desc: "Energia 100% renovável e sustentável para o planeta.",
  },
  {
    icon: ShieldCheck,
    title: "Geração Garantida",
    desc: "Garantimos a geração de energia com backup de rede.",
  },
  {
    icon: MapPin,
    title: "Atendimento Regional",
    desc: "Suporte especializado para sua região do Brasil.",
  },
  {
    icon: Zap,
    title: "Flexibilidade",
    desc: "Planos personalizados para sua necessidade específica.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-16 sm:py-24 px-4 sm:px-[6%] bg-[#0D1F3C]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#00C972] text-xs font-bold uppercase 
            tracking-[3px] block mb-3">
            Benefícios
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white 
            leading-tight mb-4">
            Por que escolher a RS Energy
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-lg mx-auto">
            mais de mil clientes já estão economizando com a gente
          </p>
        </div>

        {/* Grid de benefícios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-10 sm:mt-12">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col bg-white/5 rounded-2xl p-5 sm:p-7 border border-white/10 h-full hover:bg-white/8 hover:border-[#00C972]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
              >
                {/* Ícone com background sutil */}
                <div className="w-11 h-11 rounded-xl border border-[#00C972]/25 
                  bg-[#00C972]/8 flex items-center justify-center mb-4 flex-shrink-0">
                  <Icon 
                    size={20} 
                    strokeWidth={1.5} 
                    className="text-[#00C972]" 
                  />
                </div>

                {/* Título */}
                <h3 className="font-bold text-white text-base 
                  leading-snug mb-2">
                  {benefit.title}
                </h3>

                {/* Descrição — flex-1 para empurrar para baixo */}
                <p className="text-gray-300 text-sm leading-relaxed flex-1">
                  {benefit.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
