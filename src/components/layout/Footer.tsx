import SolarIcon from "@/components/ui/SolarIcon";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-brand text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Logo e Tagline */}
          <Link href="/" className="flex flex-col hover:opacity-80 transition-opacity">
            <Image
              src="/logo/logo-light.png"
              alt="RS Energy"
              width={120}
              height={36}
              style={{ height: "auto" }}
              className="object-contain"
            />
            <p className="text-white/50 text-sm mt-2">Energia Renovável</p>
          </Link>

          {/* Links */}
          <div>
            <p className="font-semibold mb-4">Links</p>
            <div className="space-y-2">
              <a href="/privacy-policy" className="text-gray-300 hover:text-green-brand transition">
                Política de Privacidade
              </a>
              <br />
              <a href="/terms-of-use" className="text-gray-300 hover:text-green-brand transition">
                Termos de Uso
              </a>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <p className="font-semibold mb-4">Redes Sociais</p>
            <a
              href="https://instagram.com/rsenergy.ms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-brand transition"
            >
              @rsenergy.ms
            </a>
          </div>
        </div>

        {/* Divider e Footer Info */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:justify-between sm:text-left gap-1 text-white/35 text-xs pt-6 border-t border-white/10 mt-8">
          <span>
            © 2026 RS Energy – Todos os direitos reservados.
          </span>
          <span>
            Consórcio Geração Distribuída Sunrise Energy · CNPJ: 50.562.978/0001-15 · Ponta Porã/MS
          </span>
        </div>
      </div>
    </footer>
  );
}
