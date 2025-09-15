'use client';

import { useState } from 'react';

interface Props {
  selectedPasseio?: string;
}

export default function ContactForm({ selectedPasseio }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      nome: formData.get('nome') as string,
      email: formData.get('email') as string,
      telefone: formData.get('telefone') as string,
      mensagem: formData.get('mensagem') as string,
      passeio: selectedPasseio || null,
    };

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Erro ao enviar mensagem. Tente novamente.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {message && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            message.type === 'success'
              ? 'bg-green-600/20 border border-green-600 text-green-400'
              : 'bg-red-600/20 border border-red-600 text-red-400'
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-slate-300 mb-2">
            Nome completo *
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-slate-300 mb-2">
            Telefone/WhatsApp
          </label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {selectedPasseio && (
          <div>
            <label htmlFor="passeio" className="block text-sm font-medium text-slate-300 mb-2">
              Passeio de interesse
            </label>
            <input
              type="text"
              id="passeio"
              name="passeio"
              value={selectedPasseio}
              disabled
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-300"
            />
          </div>
        )}

        <div>
          <label htmlFor="mensagem" className="block text-sm font-medium text-slate-300 mb-2">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={4}
            className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
            placeholder="Conte-nos mais sobre o que você procura..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition-colors"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
      </form>
    </div>
  );
}