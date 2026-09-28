"use client";

import { useEffect, useState } from "react";

export function HeaderSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[rgba(12,62,60,0.08)] bg-white/70 shadow-[0_10px_30px_rgba(18,97,90,0.08)] backdrop-blur-xl"
          : "border-b border-transparent bg-[rgba(15,53,56,0.18)] text-white backdrop-blur-sm"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(29,164,150,0.16),transparent_25%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-4 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <div className={`text-lg font-semibold ${scrolled ? "text-[var(--color-text)]" : "text-white"}`}>
            Онлайн-логопед
          </div>
          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-full border p-2 transition lg:hidden ${
              scrolled
                ? "border-[rgba(12,62,60,0.1)] bg-white/60 text-[var(--color-text)] hover:bg-white"
                : "border-white/20 bg-white/5 text-white hover:bg-white/10"
            }`}
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
          className={`flex flex-col gap-4 rounded-3xl p-4 text-sm font-medium transition-all lg:flex-row lg:items-center lg:gap-6 lg:p-0 ${
            menuOpen ? "block" : "hidden"
          } lg:flex ${
            scrolled
              ? "border border-[rgba(12,62,60,0.08)] bg-white/75 text-[var(--color-text)] shadow-[0_12px_30px_rgba(18,97,90,0.06)]"
              : "border border-white/10 bg-slate-950/15 text-white lg:border-0 lg:bg-transparent"
          }`}
          aria-label="Главное меню"
        >
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className={`transition hover:text-[var(--color-primary-strong)] ${scrolled ? "text-[var(--color-text)]" : "text-white"}`}
          >
            Обо мне
          </a>
          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className={`transition hover:text-[var(--color-primary-strong)] ${scrolled ? "text-[var(--color-text)]" : "text-white"}`}
          >
            Услуги
          </a>
          <a
            href="#team"
            onClick={() => setMenuOpen(false)}
            className={`transition hover:text-[var(--color-primary-strong)] ${scrolled ? "text-[var(--color-text)]" : "text-white"}`}
          >
            Как проходят занятия
          </a>
          <a
            href="#reviews"
            onClick={() => setMenuOpen(false)}
            className={`transition hover:text-[var(--color-primary-strong)] ${scrolled ? "text-[var(--color-text)]" : "text-white"}`}
          >
            Почему выбирают
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className={`inline-flex items-center justify-center rounded-full px-4 py-2.5 text-center transition ${
              scrolled
                ? "border border-[rgba(12,62,60,0.08)] bg-white/80 text-[var(--color-text)] hover:bg-white"
                : "border border-white/20 bg-white/10 text-white hover:bg-white/15"
            }`}
          >
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}
