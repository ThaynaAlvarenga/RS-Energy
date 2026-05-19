import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CtaBanner() {
  return (
    <section className="bg-green-brand py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection delay={0.1}>
          <h2 className="text-5xl font-bold text-navy-brand mb-6">
            Pronto para economizar de verdade?
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-xl text-navy-brand/75 mb-8 max-w-2xl mx-auto">
            Deixe seu e-mail ou WhatsApp que nossa equipe entra em contato com uma
            simulação gratuita e sem compromisso.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <a
            href="#contato"
            className="inline-block bg-white text-[#0D1F3C] px-10 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition transform hover:scale-105"
          >
            Quero economizar agora
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
