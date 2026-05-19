"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5567998710082"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enviar mensagem via WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-brand hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 animate-pulse-glow"
    >
      <MessageCircle size={24} />
    </a>
  );
}
