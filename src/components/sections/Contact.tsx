"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Share2, Clock } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const schema = z.object({
  name: z.string().min(2, "Nome obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(10, "Telefone obrigatório"),
  bill: z.string().min(1, "Informe o valor da conta"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSending(true);
    
    try {
      // Enviar e-mail via API
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (e) {
      console.error(e);
    }

    // Abrir WhatsApp (mantém o comportamento atual)
    const msg = encodeURIComponent(
      `Olá! Me chamo ${data.name}, meu e-mail é ${data.email}, meu telefone é ${data.phone} e minha conta de energia é R$${data.bill}. ${data.message || ""}`
    );
    window.open(`https://wa.me/5567998710082?text=${msg}`, "_blank");

    setSending(false);
    setSent(true);
    reset();
    
    // Resetar mensagem de sucesso após 5 segundos
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contato" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <AnimatedSection delay={0.1}>
            <div>
              <h2 className="text-5xl font-bold text-navy-brand mb-12">
                Fale com nosso time
              </h2>

              {/* Contact Info */}
              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <MapPin className="text-green-brand flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-navy-brand">Endereço</p>
                    <p className="text-gray-secondary">
                      Rua Tupã, Nº637 – Ponta Porã/MS<br />
                      CEP: 79901-266
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <Phone className="text-green-brand flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-navy-brand">Telefone</p>
                    <a
                      href="tel:+5567998710082"
                      className="text-green-brand hover:underline"
                    >
                      +55 67 9 9871-0082
                    </a>
                  </div>
                </div>

                {/* Horário de Atendimento */}
                <div className="flex items-start gap-3">
                  <Clock size={18} strokeWidth={1.5} className="text-[#00C972] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#0D1F3C] text-sm">
                      Horário de Atendimento
                    </p>
                    <p className="text-gray-500 text-sm">
                      Segunda a Sexta, das 7h às 17h
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <Mail className="text-green-brand flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-navy-brand">E-mail</p>
                    <a
                      href="mailto:contato@sunriseenergiasolar.com.br"
                      className="text-green-brand hover:underline"
                    >
                      contato@sunriseenergiasolar.com.br
                    </a>
                  </div>
                </div>

                {/* Social */}
                <div className="flex gap-4">
                  <Share2 className="text-green-brand flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-navy-brand">Instagram</p>
                    <a
                      href="https://instagram.com/rsenergy.ms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-brand hover:underline"
                    >
                      @rsenergy.ms
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Badge */}
              <div className="mt-6 p-4 bg-gray-light rounded-xl flex items-start gap-3">
                <MapPin size={20} className="text-green-brand mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-navy-brand">Atuação Regional</p>
                  <p className="text-sm text-gray-secondary mt-1">
                    Atendemos toda a região de fronteira Brasil–Paraguai, 
                    com foco em Ponta Porã/MS e cidades do entorno.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column - Form */}
          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-navy-brand mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  {...register("name")}
                  className="border border-gray-300 rounded-xl px-4 py-3 w-full 
                    text-gray-800 shadow-sm outline-none transition-all duration-150
                    focus:border-[#00C972] focus:ring-2 focus:ring-[#00C972]/15"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-navy-brand mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  {...register("email")}
                  className="border border-gray-300 rounded-xl px-4 py-3 w-full 
                    text-gray-800 shadow-sm outline-none transition-all duration-150
                    focus:border-[#00C972] focus:ring-2 focus:ring-[#00C972]/15"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-navy-brand mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  placeholder="(67) 9 9999-9999"
                  {...register("phone")}
                  className="border border-gray-300 rounded-xl px-4 py-3 w-full 
                    text-gray-800 shadow-sm outline-none transition-all duration-150
                    focus:border-[#00C972] focus:ring-2 focus:ring-[#00C972]/15"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Bill */}
              <div>
                <label className="block text-sm font-semibold text-navy-brand mb-2">
                  Valor da conta de energia (R$)
                </label>
                <input
                  type="number"
                  placeholder="200"
                  {...register("bill")}
                  className="border border-gray-300 rounded-xl px-4 py-3 w-full 
                    text-gray-800 shadow-sm outline-none transition-all duration-150
                    focus:border-[#00C972] focus:ring-2 focus:ring-[#00C972]/15"
                />
                {errors.bill && (
                  <p className="text-red-500 text-sm mt-1">{errors.bill.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-navy-brand mb-2">
                  Mensagem (opcional)
                </label>
                <textarea
                  placeholder="Deixe sua mensagem..."
                  rows={4}
                  {...register("message")}
                  className="border border-gray-300 rounded-xl px-4 py-3 w-full 
                    text-gray-800 shadow-sm outline-none transition-all duration-150
                    focus:border-[#00C972] focus:ring-2 focus:ring-[#00C972]/15 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-navy-brand text-white px-6 py-3 rounded-lg font-bold hover:bg-green-brand transition transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Enviando..." : "Enviar Mensagem"}
              </button>

              {sent && (
                <p className="text-[#00C972] text-sm font-medium mt-3 text-center">
                  ✅ Mensagem enviada! Entraremos em contato em breve.
                </p>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
