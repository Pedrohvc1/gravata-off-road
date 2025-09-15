'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface Props {
  selectedDate: string;
}

export default function DatePicker({ selectedDate }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [date, setDate] = useState(selectedDate);

  const handleDateChange = (newDate: string) => {
    setDate(newDate);
    const params = new URLSearchParams(searchParams);
    params.set('data', newDate);
    router.push(`/servicos?${params.toString()}`);
  };

  return (
    <div className="max-w-sm mx-auto">
      <label htmlFor="date" className="block text-sm font-medium text-slate-300 mb-2">
        Selecione uma data:
      </label>
      <input
        id="date"
        type="date"
        value={date}
        onChange={(e) => handleDateChange(e.target.value)}
        className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        min={new Date().toISOString().split('T')[0]}
      />
    </div>
  );
}