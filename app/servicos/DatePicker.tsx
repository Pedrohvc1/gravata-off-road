"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

function toInputValue(d: Date) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export default function DatePicker() {
  const router = useRouter();
  const params = useSearchParams();
  const value = useMemo(() => {
    const p = params.get("data");
    return p || toInputValue(new Date());
  }, [params]);

  return (
    <div className="mt-3">
      <label className="text-slate-300">
        Data:&nbsp;
        <input
          type="date"
          value={value}
          className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100"
          onChange={(e) => {
            const v = e.target.value;
            const sp = new URLSearchParams(params.toString());
            if (v) sp.set("data", v);
            else sp.delete("data");
            router.push(`/servicos?${sp.toString()}`);
          }}
        />
      </label>
    </div>
  );
}
