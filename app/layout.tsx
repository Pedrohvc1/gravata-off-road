import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gravata off Road",
  description: "Passeios de quadriciclo com disponibilidade por data",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="grid min-h-screen grid-rows-[auto,1fr,auto] text-slate-100 bg-slate-950">
        <header className="sticky top-0 z-20 border-b border-slate-800/80 backdrop-blur bg-slate-950/60">
          <nav className="container flex items-center gap-4 py-3">
            <Link href="/" className="font-semibold">Gravata off Road</Link>
            <div className="flex gap-3 text-slate-300">
              <Link href="/" className="hover:text-white">Início</Link>
              <Link href="/sobre" className="hover:text-white">Sobre</Link>
              <Link href="/servicos" className="hover:text-white">Passeios</Link>
              <Link href="/precos" className="hover:text-white">Preços</Link>
              <Link href="/contato" className="hover:text-white">Contato</Link>
              <Link href="/admin" className="hover:text-white">Admin</Link>
            </div>
          </nav>
        </header>
        <main className="container py-6">{children}</main>
        <footer className="border-t border-slate-800 py-4 text-center text-slate-400">
          © {new Date().getFullYear()} Gravata off Road — Todos os direitos reservados
        </footer>
      </body>
    </html>
  );
}
