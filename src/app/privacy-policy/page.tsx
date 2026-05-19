"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, easeInOut } from "framer-motion";
import {
  Shield,
  Eye,
  FileText,
  Share2,
  Cookie,
  CheckCircle2,
  Clock,
  Lock,
  Mail,
  Menu,
  X,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("quem-somos");
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: "quem-somos", label: "Quem Somos" },
    { id: "dados-coletados", label: "Coleta de Dados" },
    { id: "uso-dados", label: "Uso das Informações" },
    { id: "compartilhamento", label: "Compartilhamento" },
    { id: "cookies", label: "Cookies" },
    { id: "direitos-lgpd", label: "Seus Direitos (LGPD)" },
    { id: "retencao", label: "Retenção de Dados" },
    { id: "seguranca", label: "Segurança" },
    { id: "contato", label: "Contato" },
  ];

  const lgpdRights = [
    {
      title: "Acesso aos seus dados",
      desc: "Solicite uma cópia de todos os dados pessoais que coletamos sobre você.",
    },
    {
      title: "Correção de dados",
      desc: "Corrija ou atualize dados inexatos ou incompletos.",
    },
    {
      title: "Exclusão de dados",
      desc: "Solicite a exclusão de seus dados pessoais em certas circunstâncias.",
    },
    {
      title: "Portabilidade de dados",
      desc: "Receba seus dados em um formato estruturado e transferível.",
    },
    {
      title: "Revogação de consentimento",
      desc: "Revogue seu consentimento para coleta e processamento de dados.",
    },
    {
      title: "Oposição ao tratamento",
      desc: "Opor-se ao processamento de seus dados em certos contextos.",
    },
  ];

  const animationVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeInOut },
    },
  };

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
              Transparência & Privacidade
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Política de Privacidade
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#e0f2f1] mb-4 leading-relaxed"
          >
            Sua privacidade é levada a sério pela RS Energy. Saiba como coletamos, usamos e protegemos seus dados.
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
        {/* 1. QUEM SOMOS */}
        <motion.section
          id="quem-somos"
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 bg-[#132533] rounded-2xl border border-[#00c853]/20 p-8 sm:p-10 overflow-hidden min-w-0"
        >
          <div className="flex items-start gap-4 mb-6">
            <Shield className="w-8 h-8 text-[#00c853] flex-shrink-0 mt-1" />
            <h2 className="text-3xl font-bold text-white break-words overflow-hidden min-w-0 w-full">Quem Somos</h2>
          </div>

          <p className="text-[#e0f2f1] leading-relaxed">
            RS Energy é uma empresa brasileira de energia solar por assinatura que permite que residências, empresas
            e propriedades rurais economizem na conta de luz sem investimento inicial, por meio de fazendas solares
            distribuídas pelas melhores regiões do Brasil. Nossa missão é tornar a energia renovável acessível a todos.
          </p>
        </motion.section>

        {/* 2. QUAIS DADOS COLETAMOS */}
        <motion.section
          id="dados-coletados"
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 bg-[#1a2e3d] rounded-2xl border border-[#00c853]/20 p-8 sm:p-10 overflow-hidden min-w-0"
        >
          <div className="flex items-start gap-4 mb-6">
            <Eye className="w-8 h-8 text-[#00c853] flex-shrink-0 mt-1" />
            <h2 className="text-3xl font-bold text-white break-words overflow-hidden min-w-0 w-full">Quais Dados Coletamos</h2>
          </div>

          <div className="space-y-6 text-[#e0f2f1]">
            {[
              {
                title: "Dados de Identificação",
                items: ["Nome completo", "CPF ou CNPJ", "E-mail", "Telefone", "Endereço completo"],
              },
              {
                title: "Dados de Consumo",
                items: ["Histórico de conta de luz", "Estimativa de consumo mensal", "Dados de medição"],
              },
              {
                title: "Dados de Navegação",
                items: ["Cookies", "Endereço IP", "Tipo de dispositivo", "Páginas visitadas", "Hora de acesso"],
              },
              {
                title: "Dados de Comunicação",
                items: ["Mensagens via formulário de contato", "Mensagens via WhatsApp", "Histórico de e-mails"],
              },
            ].map((category, idx) => (
              <div key={idx}>
                <p className="font-semibold text-white mb-3">{category.title}:</p>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00c853] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 3. COMO USAMOS OS DADOS */}
        <motion.section
          id="uso-dados"
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 bg-[#132533] rounded-2xl border border-[#00c853]/20 p-8 sm:p-10 overflow-hidden min-w-0"
        >
          <div className="flex items-start gap-4 mb-6">
            <FileText className="w-8 h-8 text-[#00c853] flex-shrink-0 mt-1" />
            <h2 className="text-3xl font-bold text-white break-words overflow-hidden min-w-0 w-full">Como Usamos os Dados</h2>
          </div>

          <ul className="space-y-4 text-[#e0f2f1]">
            {[
              "Processar sua adesão ao plano de assinatura solar",
              "Calcular sua economia mensal e emitir faturas",
              "Enviar comunicações sobre seu contrato e atualizações",
              "Melhorar nossos serviços e experiência digital",
              "Cumprir obrigações legais e regulatórias (ANEEL)",
              "Enviar conteúdo relevante (com seu consentimento)",
            ].map((use, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#00c853] rounded-full mt-2"></span>
                <span>{use}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* 4. COMPARTILHAMENTO DE DADOS */}
        <motion.section
          id="compartilhamento"
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 bg-[#1a2e3d] rounded-2xl border border-[#00c853]/20 p-8 sm:p-10 overflow-hidden min-w-0"
        >
          <div className="flex items-start gap-4 mb-6">
            <Share2 className="w-8 h-8 text-[#00c853] flex-shrink-0 mt-1" />
            <h2 className="text-3xl font-bold text-white break-words overflow-hidden min-w-0 w-full">Compartilhamento de Dados</h2>
          </div>

          <div className="space-y-6 text-[#e0f2f1]">
            <p>Seus dados podem ser compartilhados com as seguintes entidades, exclusivamente para fins operacionais:</p>

            {[
              {
                title: "Distribuidoras de Energia",
                desc: "CPFL, Enel, Energisa e outras para compensação de créditos solares",
              },
              {
                title: "Parceiros de Processamento de Pagamento",
                desc: "Provedores de gateway de pagamento certificados",
              },
              {
                title: "Autoridades Governamentais",
                desc: "Quando exigido por lei ou ordem judicial",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#00c853] rounded-full mt-2"></span>
                <div>
                  <p className="font-semibold text-white">{item.title}:</p>
                  <p className="text-sm text-[#e0f2f1]/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 5. COOKIES E RASTREAMENTO */}
        <motion.section
          id="cookies"
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 bg-[#132533] rounded-2xl border border-[#00c853]/20 p-8 sm:p-10 overflow-hidden min-w-0"
        >
          <div className="flex items-start gap-4 mb-6">
            <Cookie className="w-8 h-8 text-[#00c853] flex-shrink-0 mt-1" />
            <h2 className="text-3xl font-bold text-white break-words overflow-hidden min-w-0 w-full">Cookies e Rastreamento</h2>
          </div>

          <div className="space-y-6 text-[#e0f2f1]">
            <p>Utilizamos cookies para melhorar sua experiência no site. Existem três tipos principais:</p>

            {[
              {
                title: "Cookies Essenciais",
                desc: "Necessários para o funcionamento básico do site",
              },
              {
                title: "Cookies de Desempenho",
                desc: "Ajudam-nos a entender como você usa o site",
              },
              {
                title: "Cookies de Marketing",
                desc: "Utilizados para rastrear atividades de marketing (com seu consentimento)",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#0d1f2d] rounded-lg p-4 border-l-2 border-[#00c853]">
                <p className="font-semibold text-white mb-1">{item.title}</p>
                <p className="text-sm text-[#e0f2f1]/80">{item.desc}</p>
              </div>
            ))}

            <p className="text-sm italic text-[#e0f2f1]/70">
              💡 Você pode desabilitar cookies nas configurações do seu navegador a qualquer momento.
            </p>
          </div>
        </motion.section>

        {/* 6. SEUS DIREITOS LGPD */}
        <motion.section
          id="direitos-lgpd"
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 bg-[#1a2e3d] rounded-2xl border border-[#00c853]/20 p-8 sm:p-10 overflow-hidden min-w-0"
        >
          <div className="flex items-start gap-4 mb-6">
            <Shield className="w-8 h-8 text-[#00c853] flex-shrink-0 mt-1" />
            <h2 className="text-3xl font-bold text-white break-words overflow-hidden min-w-0 w-full">Seus Direitos LGPD</h2>
          </div>

          <p className="text-[#e0f2f1] mb-6">
            De acordo com a Lei Geral de Proteção de Dados, você tem os seguintes direitos:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lgpdRights.map((right, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-[#0d1f2d] rounded-lg p-5 border border-[#00c853]/20"
              >
                <p className="font-semibold text-[#00c853] mb-2">{right.title}</p>
                <p className="text-sm text-[#e0f2f1]/80">{right.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 7. RETENÇÃO DE DADOS */}
        <motion.section
          id="retencao"
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 bg-[#132533] rounded-2xl border border-[#00c853]/20 p-8 sm:p-10 overflow-hidden min-w-0"
        >
          <div className="flex items-start gap-4 mb-6">
            <Clock className="w-8 h-8 text-[#00c853] flex-shrink-0 mt-1" />
            <h2 className="text-3xl font-bold text-white break-words overflow-hidden min-w-0 w-full">Retenção de Dados</h2>
          </div>

          <div className="space-y-4 text-[#e0f2f1]">
            {[
              {
                title: "Durante o Contrato",
                desc: "Mantemos seus dados enquanto você for um cliente ativo da RS Energy",
              },
              {
                title: "Após Rescisão",
                desc: "Dados são mantidos por 5 anos conforme exigência legal (ANEEL, LGPD)",
              },
              {
                title: "Excluídos Mediante Solicitação",
                desc: "Você pode solicitar a exclusão a qualquer momento dentro dos prazos legais",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#00c853] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-sm text-[#e0f2f1]/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 8. SEGURANÇA */}
        <motion.section
          id="seguranca"
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 bg-[#1a2e3d] rounded-2xl border border-[#00c853]/20 p-8 sm:p-10 overflow-hidden min-w-0"
        >
          <div className="flex items-start gap-4 mb-6">
            <Lock className="w-8 h-8 text-[#00c853] flex-shrink-0 mt-1" />
            <h2 className="text-3xl font-bold text-white break-words overflow-hidden min-w-0 w-full">Segurança</h2>
          </div>

          <div className="space-y-4 text-[#e0f2f1]">
            <p>Implementamos as seguintes medidas de segurança:</p>
            <ul className="space-y-3">
              {[
                "Criptografia SSL/TLS em toda a comunicação",
                "Firewalls e sistemas de detecção de intrusão",
                "Autenticação multi-fator para acesso administrativo",
                "Backups automáticos dos dados",
                "Auditorias de segurança periódicas",
                "Treinamento de segurança para funcionários",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00c853] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* 9. CONTATO */}
        <motion.section
          id="contato"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 bg-gradient-to-r from-[#132533] to-[#1a2e3d] rounded-2xl border border-[#00c853]/40 p-8 sm:p-10 overflow-hidden min-w-0"
        >
          <div className="flex items-start gap-4 mb-8">
            <Mail className="w-8 h-8 text-[#00c853] flex-shrink-0 mt-1" />
            <h2 className="text-3xl font-bold text-white break-words overflow-hidden min-w-0 w-full">Encarregado de Dados (DPO)</h2>
          </div>

          <div className="space-y-6 text-[#e0f2f1]">
            <p className="text-lg">
              Para exercer seus direitos ou tirar dúvidas sobre privacidade:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#0d1f2d] rounded-lg p-6 border border-[#00c853]/20 min-w-0 overflow-hidden">
                <p className="font-semibold text-white mb-2 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#00c853]" /> E-mail
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
                  <Mail className="w-5 h-5 text-[#00c853]" /> Endereço
                </p>
                <p className="text-sm text-[#e0f2f1]/80">
                  RS Energy<br />
                  Ponta Porã, Mato Grosso do Sul<br />
                  Brasil
                </p>
              </div>
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
            <strong className="text-[#00c853]">Alterações nesta Política:</strong> Podemos atualizar esta Política
            de Privacidade periodicamente. Mudanças significativas serão notificadas por e-mail com 30 dias de
            antecedência. O uso continuado do site após a notificação implica aceitação das alterações.
          </p>
        </motion.div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
