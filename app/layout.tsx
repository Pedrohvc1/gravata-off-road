import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gravata off Road",
  description: "Passeios de quadriciclo e aventuras off-road em Gravataí",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container py-4">
            <nav className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold text-slate-100">
                Gravata off Road
              </Link>
              <div className="flex gap-6">
                <Link href="/" className="hover:text-slate-300 transition-colors">
                  Home
                </Link>
                <Link href="/sobre" className="hover:text-slate-300 transition-colors">
                  Sobre
                </Link>
                <Link href="/servicos" className="hover:text-slate-300 transition-colors">
                  Serviços
                </Link>
                <Link href="/precos" className="hover:text-slate-300 transition-colors">
                  Preços
                </Link>
                <Link href="/contato" className="hover:text-slate-300 transition-colors">
                  Contato
                </Link>
              </div>
            </nav>
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="border-t border-slate-800 bg-slate-900/50 mt-16">
          <div className="container py-8 text-center text-slate-400">
            <p>&copy; 2024 Gravata off Road. Todos os direitos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}