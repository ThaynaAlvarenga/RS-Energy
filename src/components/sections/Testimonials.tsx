"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendonça",
    role: "Produtor Rural · Dourados/MS",
    text: "Reduzi minha conta de R$4.800 para R$2.900 em dois meses. Sem obra, sem dor de cabeça. Assine e esqueça.",
    stars: 5,
    initials: "CM",
  },
  {
    name: "Fernanda Oliveira",
    role: "Proprietária de Comércio · Ponta Porã/MS",
    text: "Achei que fosse complicado, mas foi mais fácil do que contratar um plano de internet. Recomendo muito.",
    stars: 5,
    initials: "FO",
  },
  {
    name: "Ricardo Alves",
    role: "Gestor Industrial · Campo Grande/MS",
    text: "Estamos economizando R$12 mil por mês na planta. O retorno justificou a assinatura já no primeiro mês.",
    stars: 5,
    initials: "RA",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-[6%] bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#00C972] text-xs font-bold uppercase
            tracking-[3px] block mb-3">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1F3C]
            leading-tight mb-4">
            Quem já está economizando
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto">
            Clientes reais, economia real — na conta todo mês.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`flex flex-col bg-[#F4F7F9] rounded-2xl p-6 sm:p-7 transition-shadow duration-200 h-full ${
                i === 1
                  ? "border border-green-500/40 shadow-lg md:scale-105 scale-100"
                  : "border border-black/6 hover:shadow-md md:scale-100 scale-100"
              }`}
            >
              {/* Estrelas */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="text-[#00C972] fill-[#00C972]"
                  />
                ))}
              </div>

              {/* Texto do depoimento */}
              <p className="text-[#0D1F3C]/80 text-sm leading-relaxed
                italic flex-1 mb-6">
                "{t.text}"
              </p>

              {/* Avatar + Nome */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00C972]/15
                  flex items-center justify-center flex-shrink-0">
                  <span className="text-[#00C972] font-bold text-sm">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-[#0D1F3C] text-sm">
                    {t.name}
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
