import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white border border-[#0B2545]/15 text-[#0B2545] px-5 py-4 rounded-xl shadow-2xl animate-in slide-in-from-bottom duration-300 max-w-md">
      <CheckCircle2 className="w-5 h-5 text-[#1D4ED8] flex-shrink-0" />
      <p className="text-sm font-semibold text-slate-800">{message}</p>
      <button 
        onClick={onClose}
        className="text-slate-400 hover:text-slate-700 p-1 rounded transition-colors ml-auto cursor-pointer"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
