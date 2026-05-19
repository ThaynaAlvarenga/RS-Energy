"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  FileText,
  DollarSign,
  LogOut,
  Copyright,
  Share2,
  Gavel,
  MessageSquare,
  Menu,
  X,
  CheckCircle2,
  AlertCircle,
  Clock,
  Lock,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsOfUsePage() {
  const [activeSection, setActiveSection] = useState("aceitacao");
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const sections = [
    { id: "aceitacao", label: "Aceitação" },
    { id: "servicos", label: "Serviços" },
    { id: "assinatura", label: "Assinatura & Planos" },
    { id: "obrigacoes-cliente", label: "Obrigações do Cliente" },
    { id: "obrigacoes-rs", label: "Obrigações RS Energy" },
    { id: "pagamentos", label: "Pagamentos" },
    { id: "rescisao", label: "Rescisão" },
    { id: "propriedade", label: "Propriedade Intelectual" },
    { id: "legislacao", label: "Legislação" },
  ];

  const animationVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-[#0d1f2d]">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0d1f2d] to-[#132533]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#00c853]/10 border border-[#00c853]/30 rounded-full px-4 py-2 mb-6"
          >
            <Shield className="w-4 h-4 text-[#00c853]" />
            <span className="text-sm font-medium text-[#00c853]">
              Legal & Transparência
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Termos de Uso
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#e0f2f1] mb-4 leading-relaxed"
          >
            Ao utilizar os serviços da RS Energy, você concorda com os termos
            descritos abaixo. Leia com atenção antes de assinar seu plano.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-[#e0f2f1]/60"
          >
            Última atualização: maio de 2026
          </motion.p>
        </div>
      </section>

      {/* STICKY NAVIGATION */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={`${
          isSticky
            ? "fixed top-[72px] left-0 right-0 bg-[#132533] border-b border-[#00c853]/20 shadow-lg z-40"
            : "relative bg-[#132533] border-b border-[#00c853]/20"
        } transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center gap-1 py-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  activeSection === section.id
                    ? "text-[#00c853] bg-[#00c853]/10 border border-[#00c853]/30"
                    : "text-[#e0f2f1] hover:text-[#00c853]"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden flex items-center justify-between py-4">
            <span className="text-sm font-medium text-[#e0f2f1]">Seções</span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#00c853] p-2 rounded-lg hover:bg-[#00c853]/10 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden grid grid-cols-2 gap-2 pb-4"
            >
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={`px-3 py-2 text-xs font-medium rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? "text-[#00c853] bg-[#00c853]/10 border border-[#00c853]/30"
                      : "text-[#e0f2f1] hover:text-[#00c853]"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* MAIN CONTENT */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* 1. ACEITAÇÃO DOS TERMOS */}
        <motion.section
          id="aceitacao"
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 bg-[#132533] rounded-2xl border border-[#00c853]/20 p-8 sm:p-10"
        >
          <div className="flex items-start gap-4 mb-6">
            <Shield className="w-8 h-8 text-[#00c853] flex-shrink-0 mt-1" />
            <h2 className="text-3xl font-bold text-white">Aceitação dos Termos</h2>
          </div>

          <div className="space-y-6 text-[#e0f2f1]">
            <p>
              Ao acessar o site{" "}
              <span className="font-semibold text-[#00c853]">rsenergy.com.br</span> ou
              contratar qualquer serviço da RS Energy, o usuário declara ter
              lido, compreendido e concordado integralmente com estes Termos de
              Uso. Caso não concorde, não utilize nossos serviços.
            </p>

            <div>
              <p className="font-semibold text-white mb-4">
                Estes termos se aplicam a:
              </p>
              <ul className="space-y-3">
                {[
                  "Visitantes do site",
                  "Clientes que assinaram um plano solar",
                  "Parceiros e indicadores cadastrados",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00c853] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* 2. DESCRIÇÃO DOS SERVIÇOS */}
        <motion.section
          id="servicos"
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 bg-[#1a2e3d] rounded-2xl border border-[#00c853]/20 p-8 sm:p-10"
        >
          <div className="flex items-start gap-4 mb-6">
            <Zap className="w-8 h-8 text-[#00c853] flex-shrink-0 mt-1" />
            <h2 className="text-3xl font-bold text-white">
              Descrição dos Serviços
            </h2>
          </div>

          <div className="space-y-6 text-[#e0f2f1]">
            <p>
              A RS Energy oferece o serviço de assinatura solar por meio do qual
              o cliente recebe créditos de energia gerados em fazendas
              fotovoltaicas, descontados diretamente na conta de luz pela
              distribuidora local.
            </p>

            <div>
              <p className="font-semibold text-white mb-4 text-lg">
                Serviço Solar Principal:
              </p>
              <ul className="space-y-3">
                {[
                  "Sem instalação de painéis no imóvel do cliente",
                  "Sem investimento inicial",
                  "Economia garantida em contrato",
                  "Energia 100% renovável e certificada",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00c853] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0d1f2d] rounded-lg p-6 border border-[#00c853]/20">
              <p className="font-semibold text-white mb-3">
                Serviço em Fase de Lançamento:
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00c853] rounded-full"></span>
                <span>
                  <strong className="text-[#00c853]">PYA'E Energia</strong> —
                  eletropostos inteligentes para recarga de veículos elétricos
                </span>
              </p>
            </div>
          </div>
        </motion.section>

        {/* 3. ASSINATURA E PLANOS */}
        <motion.section
          id="assinatura"
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 bg-[#132533] rounded-2xl border border-[#00c853]/20 p-8 sm:p-10"
        >
          <div className="flex items-start gap-4 mb-6">
            <FileText className="w-8 h-8 text-[#00c853] flex-shrink-0 mt-1" />
            <h2 className="text-3xl font-bold text-white">Assinatura & Planos</h2>
          </div>

          <ul className="space-y-4 text-[#e0f2f1]">
            {[
              "O cliente assina um plano com prazo mínimo definido em contrato (geralmente 12, 24 ou 60 meses)",
              "A economia é calculada com base no histórico de consumo da conta de luz apresentado no cadastro",
              "O desconto é aplicado diretamente pela distribuidora de energia na fatura mensal",
              "A RS Energy emite uma fatura complementar pelo serviço de gestão de créditos solares",
              "Valores e percentuais de desconto estão definidos no contrato de assinatura individual",
              "O plano está sujeito à disponibilidade de capacidade nas fazendas solares da região",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#00c853]/20 border border-[#00c853]/40 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold text-[#00c853]">
                  {idx + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* 4. OBRIGAÇÕES DO CLIENTE */}
        <motion.section
          id="obrigacoes-cliente"
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 bg-[#1a2e3d] rounded-2xl border border-[#00c853]/20 p-8 sm:p-10"
        >
          <div className="flex items-start gap-4 mb-6">
            <AlertCircle className="w-8 h-8 text-[#00c853] flex-shrink-0 mt-1" />
            <h2 className="text-3xl font-bold text-white">
              Obrigações do Cliente
            </h2>
          </div>

          <p className="text-[#e0f2f1] mb-6">
            Para manter o plano ativo, o cliente deve:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Manter os dados cadastrais atualizados",
              "Efetuar o pagamento da fatura RS Energy em dia",
              "Não alterar a titularidade da conta de luz sem comunicar previamente",
              "Permitir acesso ao histórico de consumo junto à distribuidora",
              "Informar mudança de endereço",
              "Comunicar encerramento da unidade consumidora",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0d1f2d] rounded-lg p-4 border-l-2 border-[#00c853]"
              >
                <p className="text-[#e0f2f1] text-sm">{item}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 5. OBRIGAÇÕES DA RS ENERGY */}
        <motion.section
          id="obrigacoes-rs"
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 bg-[#132533] rounded-2xl border border-[#00c853]/20 p-8 sm:p-10"
        >
          <div className="flex items-start gap-4 mb-6">
            <CheckCircle2 className="w-8 h-8 text-[#00c853] flex-shrink-0 mt-1" />
            <h2 className="text-3xl font-bold text-white">
              Obrigações da RS Energy
            </h2>
          </div>

          <p className="text-[#e0f2f1] mb-6">
            A RS Energy se compromete a:
          </p>

          <ul className="space-y-4 text-[#e0f2f1]">
            {[
              "Garantir o desconto contratado na conta de luz",
              "Emitir faturas claras e detalhadas",
              "Fornecer suporte ao cliente em horário comercial",
              "Comunicar qualquer alteração contratual com antecedência mínima de 30 dias",
              "Manter as fazendas solares em operação e devidamente certificadas junto à ANEEL",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#00c853] rounded-full"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* 6. PAGAMENTOS E INADIMPLÊNCIA */}
        <motion.section
          id="pagamentos"
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 bg-[#1a2e3d] rounded-2xl border border-[#00c853]/20 p-8 sm:p-10"
        >
          <div className="flex items-start gap-4 mb-6">
            <DollarSign className="w-8 h-8 text-[#00c853] flex-shrink-0 mt-1" />
            <h2 className="text-3xl font-bold text-white">
              Pagamentos & Inadimplência
            </h2>
          </div>

          <div className="space-y-6">
            <div className="space-y-3 text-[#e0f2f1]">
              {[
                "As faturas vencem conforme data definida em contrato",
                "Atraso superior a 30 dias pode resultar em suspensão dos créditos solares",
                "Atraso superior a 60 dias pode resultar em rescisão contratual com multa proporcional",
                "Aceitamos pagamento via boleto, PIX e débito automático",
                "Contestações de cobrança devem ser feitas em até 15 dias após o vencimento",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 list-none">
                  <Clock className="w-5 h-5 text-[#00c853] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </div>

            <div className="bg-[#0d1f2d] border border-[#00c853]/30 rounded-lg p-6 mt-6">
              <p className="text-sm text-[#e0f2f1]/70 italic">
                💡 Dica: Configurar débito automático garante que seu plano nunca
                sofra interrupção por atraso de pagamento.
              </p>
            </div>
          </div>
        </motion.section>

        {/* 7. RESCISÃO CONTRATUAL */}
        <motion.section
          id="rescisao"
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16"
        >
          <div className="flex items-start gap-4 mb-8">
            <LogOut className="w-8 h-8 text-[#00c853] flex-shrink-0 mt-1" />
            <h2 className="text-3xl font-bold text-white">Rescisão Contratual</h2>
          </div>

          {/* TWO-COLUMN CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* RESCISÃO PELO CLIENTE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#132533] rounded-2xl border-2 border-[#00c853] p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-6 h-6 text-[#00c853]" />
                <h3 className="text-xl font-bold text-white">
                  Rescisão Pelo Cliente
                </h3>
              </div>

              <div className="space-y-4 text-[#e0f2f1]">
                {/* CDC 7-DAY HIGHLIGHT */}
                <div className="bg-[#00c853]/10 border border-[#00c853] rounded-lg p-4">
                  <p className="font-bold text-[#00c853] mb-2">
                    ✓ Dentro de 7 dias (CDC):
                  </p>
                  <p className="text-sm">
                    Rescisão sem custo — direito do consumidor garantido por lei
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-white mb-1">
                      Após carência e antes do prazo mínimo:
                    </p>
                    <p className="text-sm">
                      Multa proporcional ao período restante conforme contrato
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-white mb-1">
                      Após cumprimento do prazo mínimo:
                    </p>
                    <p className="text-sm">
                      Rescisão sem multa com aviso prévio de 30 dias
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RESCISÃO PELA RS ENERGY */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#1a2e3d] rounded-2xl border-2 border-amber-500/60 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-amber-500" />
                <h3 className="text-xl font-bold text-white">
                  Rescisão Pela RS Energy
                </h3>
              </div>

              <ul className="space-y-4 text-[#e0f2f1]">
                {[
                  "Inadimplência superior a 60 dias",
                  "Fornecimento de informações falsas no cadastro",
                  "Uso indevido dos créditos solares",
                  "Encerramento da unidade consumidora sem comunicação",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <p className="text-sm text-[#e0f2f1]/60 mt-6">
            📋 Todos os processos de rescisão devem ser formalizados por escrito
            e comunicados via e-mail ou correspondência para contato@sunriseenergiasolar.com.br
          </p>
        </motion.section>

        {/* 8. PROPRIEDADE INTELECTUAL */}
        <motion.section
          id="propriedade"
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 bg-[#132533] rounded-2xl border border-[#00c853]/20 p-8 sm:p-10"
        >
          <div className="flex items-start gap-4 mb-6">
            <Copyright className="w-8 h-8 text-[#00c853] flex-shrink-0 mt-1" />
            <h2 className="text-3xl font-bold text-white">
              Propriedade Intelectual
            </h2>
          </div>

          <ul className="space-y-4 text-[#e0f2f1]">
            {[
              "Todo o conteúdo do site (textos, imagens, logotipo, marca RS Energy) é de propriedade exclusiva da empresa",
              "É proibida a reprodução, cópia ou distribuição sem autorização prévia por escrito",
              "O uso do nome RS Energy ou de sua marca para fins comerciais não autorizados constitui infração",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-[#00c853] flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* 9. LEGISLAÇÃO APLICÁVEL */}
        <motion.section
          id="legislacao"
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 bg-[#1a2e3d] rounded-2xl border border-[#00c853]/20 p-8 sm:p-10"
        >
          <div className="flex items-start gap-4 mb-6">
            <Gavel className="w-8 h-8 text-[#00c853] flex-shrink-0 mt-1" />
            <h2 className="text-3xl font-bold text-white">
              Legislação Aplicável
            </h2>
          </div>

          <div className="space-y-4 text-[#e0f2f1]">
            <p className="mb-6">
              Estes termos são regidos pela legislação brasileira:
            </p>

            <ul className="space-y-4">
              {[
                {
                  law: "Lei nº 13.709/2018",
                  desc: "LGPD — Proteção de Dados Pessoais",
                },
                {
                  law: "Lei nº 8.078/1990",
                  desc: "CDC — Código de Defesa do Consumidor",
                },
                {
                  law: "Resoluções da ANEEL",
                  desc: "Regulação de Energia Distribuída",
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 bg-[#0d1f2d] p-4 rounded-lg border-l-2 border-[#00c853]"
                >
                  <Shield className="w-5 h-5 text-[#00c853] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">{item.law}</p>
                    <p className="text-sm text-[#e0f2f1]/80">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="bg-[#00c853]/10 border border-[#00c853]/30 rounded-lg p-4 mt-6">
              <p className="text-sm text-[#e0f2f1]">
                <strong>Foro Eleito:</strong> Comarca da sede da RS Energy,
                salvo disposição legal em contrário.
              </p>
            </div>
          </div>
        </motion.section>

        {/* 10. CONTATO */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 bg-gradient-to-r from-[#132533] to-[#1a2e3d] rounded-2xl border border-[#00c853]/40 p-8 sm:p-10"
        >
          <div className="flex items-start gap-4 mb-8">
            <MessageSquare className="w-8 h-8 text-[#00c853] flex-shrink-0 mt-1" />
            <h2 className="text-3xl font-bold text-white">Entre em Contato</h2>
          </div>

          <div className="space-y-6 text-[#e0f2f1]">
            <p className="text-lg">
              Tem dúvidas sobre estes termos ou precisa de esclarecimentos?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#0d1f2d] rounded-lg p-6 border border-[#00c853]/20 min-w-0 overflow-hidden">
                <p className="font-semibold text-white mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#00c853]" /> E-mail
                </p>
                <a
                  href="mailto:contato@sunriseenergiasolar.com.br"
                  className="text-[#00c853] hover:text-[#00c853]/80 transition-colors font-medium break-all"
                >
                  contato@sunriseenergiasolar.com.br
                </a>
              </div>

              <div className="bg-[#0d1f2d] rounded-lg p-6 border border-[#00c853]/20">
                <p className="font-semibold text-white mb-2 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#00c853]" /> WhatsApp
                </p>
                <a
                  href="https://wa.me/55"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00c853] hover:text-[#00c853]/80 transition-colors font-medium"
                >
                  Conversar com Suporte
                </a>
              </div>
            </div>

            <div className="bg-[#0d1f2d] rounded-lg p-6 border border-[#00c853]/20 mt-4">
              <p className="font-semibold text-white mb-2 flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#00c853]" /> Endereço
              </p>
              <p className="text-sm text-[#e0f2f1]/80">
                RS Energy
                <br />
                Ponta Porã, Mato Grosso do Sul – Brasil
              </p>
            </div>

            <button className="w-full bg-[#00c853] hover:bg-[#00c853]/90 text-[#0d1f2d] font-bold py-3 sm:py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#00c853]/30 text-base sm:text-lg">
              Fale Conosco
            </button>
          </div>
        </motion.section>

        {/* ADDITIONAL INFO */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-60px" }}
          className="bg-[#132533] rounded-xl border border-[#00c853]/20 p-6 sm:p-8"
        >
          <p className="text-sm text-[#e0f2f1] leading-relaxed">
            <strong className="text-[#00c853]">Alterações nos Termos:</strong> A
            RS Energy pode atualizar estes termos a qualquer momento. Mudanças
            significativas serão comunicadas por e-mail com 30 dias de
            antecedência. O uso continuado dos serviços após a notificação
            implica aceitação dos novos termos.
          </p>
        </motion.div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
