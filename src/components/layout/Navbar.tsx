"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("como-funciona");

  const navLinks = [
    { label: "Como Funciona", href: "#como-funciona", id: "como-funciona" },
    { label: "Para Quem", href: "#quem-pode", id: "quem-pode" },
    { label: "Benefícios", href: "#beneficios", id: "beneficios" },
    { label: "PYA'E", href: "#pyae", id: "pyae" },
    { label: "Contato", href: "#contato", id: "contato" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      navLinks.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [navLinks]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-navy-brand text-white z-40 shadow-lg relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image
            src="/logo/logo-light.png"
            alt="RS Energy"
            width={160}
            height={48}
            priority
            style={{ height: "auto" }}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeSection === link.id
                  ? "text-[#00C972] font-semibold"
                  : "text-white/80 hover:text-[#00C972]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="#contato"
            className="bg-green-brand text-navy-brand px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition"
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Abrir menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0D1F3C]/98 backdrop-blur-md border-t border-white/10 py-4 px-6 flex flex-col gap-1 z-50">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`py-3 text-base border-b border-white/8 last:border-0 transition-colors duration-200 ${
                activeSection === link.id
                  ? "text-[#00C972] font-semibold"
                  : "text-white/80 hover:text-[#00C972]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}

          {/* CTA mobile */}
          <a
            href="#contato"
            className="mt-3 bg-[#00C972] text-[#0D1F3C] font-bold py-3 px-6 rounded-full text-center transition-colors hover:bg-green-600"
            onClick={() => setIsOpen(false)}
          >
            Fale Conosco
          </a>
        </div>
      )}
    </nav>
  );
}
