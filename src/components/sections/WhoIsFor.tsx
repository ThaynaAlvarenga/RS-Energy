"use client";
import { motion } from "framer-motion";
import { Home, Building2, Tractor, Factory } from "lucide-react";

const segments = [
  {
    icon: Home,
    title: "Residências",
    desc: "Famílias com conta acima de R$500/mês encontram a melhor solução em energia renovável.",
  },
  {
    icon: Building2,
    title: "Empresas",
    desc: "Comerciários e pequenos negócios reduzem custos operacionais sem investimento inicial.",
  },
  {
    icon: Tractor,
    title: "Propriedades rurais",
    desc: "Fazendeiros economizam nos custos de produção com energia sustentável e renovável.",
  },
  {
    icon: Factory,
    title: "Indústrias",
    desc: "Grandes consumidoras podem escalar a geração conforme sua demanda energética.",
  },
];

export default function WhoIsFor() {
  return (
    <section id="quem-pode" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-[6%] overflow-hidden w-full">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#00C972] text-xs font-bold uppercase 
            tracking-[3px] block mb-3">
            Para quem é 
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D1F3C] 
            leading-tight mb-4">
            RS Energia é para você
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto">
            Residências, empresas, propriedades rurais e indústrias —
            temos uma solução para cada um.
          </p>
        </div>

        {/* Linha 1 — 3 cards verticais iguais */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {segments.slice(0, 3).map((seg, i) => {
            const Icon = seg.icon;
            return (
              <motion.div
                key={seg.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col bg-white rounded-2xl p-6 border border-black/8 shadow-sm hover:border-[#00C972] hover:shadow-md transition-all duration-200 min-h-[200px]"
              >
                {/* Ícone */}
                <div className="flex-shrink-0 mb-3 w-8 h-8 flex items-center justify-center">
                  <Icon 
                    size={32} 
                    strokeWidth={1.5} 
                    className="text-[#00C972]" 
                  />
                </div>

                {/* Título */}
                <h3 className="font-semibold text-[#0D1F3C] text-base mb-2">
                  {seg.title}
                </h3>

                {/* Descrição */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {seg.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Linha 2 — Card Indústrias em destaque horizontal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 bg-white rounded-2xl p-5 sm:p-7 border border-[#00C972]/30 shadow-sm hover:shadow-md transition-all duration-200 w-full"
        >
          {/* Ícone à esquerda */}
          <div className="flex-shrink-0 mt-1">
            <Factory 
              size={44} 
              strokeWidth={1.5} 
              className="text-[#00C972]" 
            />
          </div>

          {/* Texto no centro */}
          <div className="flex-1">
            <p className="text-xs font-bold tracking-widest text-[#00C972] uppercase mb-1">
              Grandes Consumidores
            </p>
            <h3 className="font-bold text-[#0D1F3C] text-base sm:text-lg mb-1">
              Indústrias
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Grandes consumidores podem escalar a solução com múltiplas usinas e reduzir drasticamente o custo da energia elétrica com previsibilidade total.
            </p>
          </div>

          {/* Badge à direita */}
          <div className="flex-shrink-0 self-start sm:self-center mt-2 sm:mt-0">
            <span className="px-4 py-2 rounded-full border border-[#00C972] text-[#00C972] text-xs sm:text-sm font-medium whitespace-nowrap">
              Maior economia
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
