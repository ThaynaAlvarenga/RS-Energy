"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calculator, FileCheck, Sun, BadgeDollarSign, ChevronRight } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Calculator,
    title: "Faça sua simulação",
    desc: "Em apenas 2 minutos, saiba quanto você pode economizar todo mês na sua conta de luz.",
  },
  {
    number: "2",
    icon: FileCheck,
    title: "Assine o plano",
    desc: "Processo 100% digital, sem obras e sem equipamentos. Só assinar e aguardar.",
  },
  {
    number: "3",
    icon: Sun,
    title: "Energia gerada nas fazendas",
    desc: "Nossas fazendas solares geram energia renovável e injetam na rede em seu nome.",
  },
  {
    number: "4",
    icon: BadgeDollarSign,
    title: "Desconto direto na fatura",
    desc: "O crédito é compensado pela distribuidora — sua conta chega com o desconto aplicado.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 px-4 sm:px-6 lg:px-[6%] bg-[#F4F7F9]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#00C972] text-xs font-bold uppercase 
            tracking-[3px] block mb-3">
            Como funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1F3C] 
            leading-tight mb-4">
            Simples como assinar um streaming
          </h2>
          <p className="text-gray-500 text-base max-w-lg mx-auto">
            só que você economiza de verdade
          </p>
        </div>

        {/* Cards com setas conectoras */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 w-full min-w-0 overflow-hidden">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={step.number}>
                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex-1 flex flex-col bg-white rounded-2xl p-5 sm:p-6 
                    border border-black/8 shadow-sm h-full w-full min-w-0"
                >
                {/* Número + ícone lado a lado */}
                <div className="flex items-center gap-3 mb-5">
                  {/* Número grande em destaque */}
                  <span className="text-5xl font-black text-[#00C972] 
                    leading-none select-none">
                    {step.number}
                  </span>
                  {/* Ícone à direita do número */}
                  <Icon 
                    size={32} 
                    strokeWidth={1.5} 
                    className="text-[#0D1F3C]/30" 
                  />
                </div>

                {/* Título */}
                <h3 className="font-bold text-[#0D1F3C] text-base 
                  leading-snug mb-2">
                  {step.title}
                </h3>

                {/* Descrição — flex-1 para empurrar para baixo */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {step.desc}
                </p>
                </motion.div>

                {/* Seta separadora — só aparece no desktop entre cards */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center px-2 flex-shrink-0 absolute -right-6 top-1/2 -translate-y-1/2">
                    <ChevronRight 
                      size={24} 
                      strokeWidth={1.5}
                      className="text-[#00C972]" 
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
