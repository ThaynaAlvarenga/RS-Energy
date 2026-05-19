import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] sm:min-h-[680px] lg:min-h-screen flex items-center bg-navy-brand overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/fazendas/hero-bg.jpg"
          alt="Fazenda Solar RS Energy"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        {/* Overlay gradient para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-b 
          from-[#0D1F3C]/75 via-[#0D1F3C]/60 to-[#0D1F3C]/80" />
      </div>

      {/* Radial Glow Background */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-15"
        style={{
          background: "#00C972",
          transform: "translate(100px, -100px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto z-10 w-full px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16 sm:pt-28">
        {/* Badge */}
        <AnimatedSection delay={0.1}>
          <div className="flex justify-center mb-6 sm:mb-8">
            <span className="inline-block bg-white/10 text-green-brand px-4 py-2 rounded-full text-sm font-semibold border border-green-brand/30">
              Assinatura Solar – Sem investimento inicial
            </span>
          </div>
        </AnimatedSection>

        {/* Main Headline */}
        <AnimatedSection delay={0.2} className="text-center mb-5 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
            Chega de pagar contas de energia{" "}
            <span className="text-green-brand">abusivas</span>
          </h1>
        </AnimatedSection>

        {/* Subtitle */}
        <AnimatedSection delay={0.3} className="text-center mb-6 sm:mb-10 max-w-3xl mx-auto">
          <p className="text-sm sm:text-lg lg:text-xl text-gray-300">
            Reduza sua conta em até <span className="text-green-brand font-semibold">35%</span> com
            energia solar. Sem investimento inicial, sem burocracia. Só economia real.
          </p>
        </AnimatedSection>

        {/* Social Proof Pills */}
        <AnimatedSection delay={0.4}>
          <div className="hidden sm:flex flex-wrap gap-2 justify-center mt-4">
            {[
              "Garantia de geração",
              "Valor descontado na fatura",
              "Empresa brasileira",
            ].map((proof, idx) => (
              <div key={idx} className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-green-brand text-lg">✓</span>
                <p className="text-white text-xs sm:text-sm font-medium">{proof}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTAs */}
        <AnimatedSection delay={0.5} className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center mt-6 sm:mt-8">
          <a
            href="#contato"
            className="w-full sm:w-auto bg-green-brand text-navy-brand px-5 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg hover:bg-green-600 transition transform hover:scale-105 text-center"
          >
            <span className="hidden lg:inline">EU QUERO ECONOMIZAR</span>
            <span className="lg:hidden">Simular minha economia</span>
          </a>
          <a
            href="#como-funciona"
            className="w-full sm:w-auto border-2 border-white text-white px-5 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg hover:border-green-brand hover:text-green-brand transition text-center"
          >
            Como funciona →
          </a>
        </AnimatedSection>

        {/* Regional Info */}
        <AnimatedSection delay={0.6}>
          <p className="text-white/45 text-xs sm:text-sm mt-4 text-center">
            Atendemos Ponta Porã, Dourados e região de fronteira MS/PY
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
