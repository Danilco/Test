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
          ? "border-b border-white/10 bg-[#0b4f4a]/90 shadow-[0_10px_28px_rgba(5,27,32,0.12)] backdrop-blur-xl"
          : "border-b border-white/10 bg-[#0b4f4a] text-white backdrop-blur-xl"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(29,164,150,0.16),transparent_25%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-4 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <div className="text-lg font-semibold text-white">Онлайн логопед</div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 p-2 text-white transition hover:bg-white/10 lg:hidden"
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
              ? "border border-white/10 bg-[#0b4f4a]/80 text-white shadow-[0_12px_30px_rgba(5,27,32,0.08)]"
              : "border border-white/10 bg-[#0b4f4a]/60 text-white lg:border-0 lg:bg-transparent"
          }`}
          aria-label="Главное меню"
        >
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="transition text-white/90 hover:text-white"
          >
            Обо мне
          </a>
          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="transition text-white/90 hover:text-white"
          >
            Услуги
          </a>
          <a
            href="#team"
            onClick={() => setMenuOpen(false)}
            className="transition text-white/90 hover:text-white"
          >
            Как проходят занятия
          </a>
          <a
            href="#reviews"
            onClick={() => setMenuOpen(false)}
            className="transition text-white/90 hover:text-white"
          >
            Почему выбирают
          </a>
          <a
            href="#reviews"
            onClick={() => setMenuOpen(false)}
            className="transition text-white/90 hover:text-white"
          >
            Отзывы
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-4 py-2.5 text-center text-white transition hover:bg-white/10"
          >
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}
