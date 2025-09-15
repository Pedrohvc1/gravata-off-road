"use client";

import { useState, useEffect } from "react";

export default function ContatoPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [passeio, setPasseio] = useState<string>("");

  useEffect(() => {
    const url = new URL(window.location.href);
    const p = url.searchParams.get("passeio");
    if (p) setPasseio(p);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setStatus(res.ok ? "ok" : "error");
    if (res.ok) form.reset();
  }

  return (
    <section className="space-y-2">
      <h1 className="text-2xl font-semibold">Contato</h1>
      <form className="mt-2 grid max-w-lg gap-3" onSubmit={onSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          required
          className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100"
        />
        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          required
          className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100"
        />
        <input
          type="text"
          name="passeio"
          placeholder="Passeio (opcional)"
          value={passeio}
          onChange={(e) => setPasseio(e.target.value)}
          className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100"
        />
        <textarea
          name="mensagem"
          placeholder="Sua mensagem"
          rows={5}
          required
          className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100"
        />
        <button
          className="rounded-md bg-emerald-500 px-4 py-2 font-medium text-slate-900 hover:bg-emerald-400 disabled:opacity-60"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Enviando..." : "Enviar"}
        </button>
        {status === "ok" && <p className="text-emerald-400">Recebido! Obrigado.</p>}
        {status === "error" && <p className="text-red-400">Ops, tente novamente.</p>}
      </form>
    </section>
  );
}
