"use client";

import { useState } from "react";

export function HeaderSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative overflow-hidden border-b border-slate-200 bg-teal-900 text-white">
      <div className="pointer-events-none absolute -left-16 top-10 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <div className="text-lg font-semibold">Логопед онлайн</div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white transition hover:bg-white/10 lg:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className="sr-only">Меню</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              {menuOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        <nav
          className={`flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-950/10 p-4 text-sm font-medium text-white transition-all lg:flex-row lg:items-center lg:gap-6 lg:border-0 lg:bg-transparent lg:p-0 ${
            menuOpen ? "block" : "hidden"
          } lg:flex`}
          aria-label="Главное меню"
        >
          <a href="#services" onClick={() => setMenuOpen(false)} className="transition hover:text-slate-200">
            Услуги
          </a>
          <a href="#team" onClick={() => setMenuOpen(false)} className="transition hover:text-slate-200">
            Специалисты
          </a>
          <a href="#reviews" onClick={() => setMenuOpen(false)} className="transition hover:text-slate-200">
            Отзывы
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-center transition hover:bg-white/20"
          >
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}
