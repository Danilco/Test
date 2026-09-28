"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Heart, Mail, MapPin, MessageCircle, Send, Star } from "lucide-react";

const footerLinks = [
  { label: "Обо мне", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Как проходят занятия", href: "#team" },
  { label: "Почему выбирают", href: "#reviews" },
  { label: "Отзывы", href: "#testimonials" },
  { label: "Контакты", href: "#contact" },
];

const contactItems = [
  { label: "Telegram", value: "t.me/online_logoped", href: "https://t.me/online_logoped", icon: Send },
  { label: "WhatsApp", value: "+7 (999) 000-00-00", href: "https://wa.me/79990000000", icon: MessageCircle },
  { label: "E-mail", value: "hello@online-logoped.ru", href: "mailto:hello@online-logoped.ru", icon: Mail },
];

export function ContactSection() {
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const contactSection = document.getElementById("contact");

      if (!heroSection || !contactSection) {
        return;
      }

      const heroBottom = heroSection.getBoundingClientRect().bottom;
      const contactTop = contactSection.getBoundingClientRect().top;

      setShowFloatingCta(heroBottom <= 120 && contactTop > 140);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="contact" className="relative overflow-hidden bg-[linear-gradient(135deg,#0f3e43_0%,#123a42_35%,#0a2c34_100%)] py-20 text-white sm:py-24">
      <div className="float-orb pointer-events-none absolute -left-10 top-0 h-72 w-72 rounded-full bg-[rgba(102,219,204,0.14)] blur-3xl" />
      <div className="float-orb delay-1 pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[rgba(63,177,169,0.12)] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <div className="glass-cta relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(5,27,32,0.38)] backdrop-blur-xl sm:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),transparent_40%)]" />
          <div className="relative">
            <p className="flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-[0.28em] text-[rgba(255,255,255,0.85)]">
              <Star className="h-4 w-4" />
              <span>Запишитесь на первое занятие</span>
            </p>
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Если вы хотите помочь ребёнку развивать речь, начните с консультации.
            </h2>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="mailto:hello@online-logoped.ru" className="btn-primary cta-pulse px-7 py-3.5 text-base shadow-[0_18px_36px_rgba(28,167,160,0.35)]">
                Записаться
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="https://t.me/online_logoped" className="btn-glass px-7 py-3.5 text-base text-white hover:text-white">
                Задать вопрос
              </a>
            </div>

            <p className="mt-8 flex items-center justify-center gap-2 text-lg font-medium text-[rgba(255,255,255,0.85)]">
              <Heart className="h-5 w-5" />
              <span>Ваш ребёнок заслуживает говорить уверенно</span>
            </p>
          </div>
        </div>

        <footer className="mt-10 border-t border-white/10 pt-8 text-left">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xs">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(136,243,232,0.18)] text-[rgba(189,246,239,0.95)] ring-1 ring-white/10">
                  <span className="text-sm font-bold">Л</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">Онлайн-логопед</p>
                  <p className="text-sm text-[rgba(230,246,245,0.7)]">Развитие речи и уверенность</p>
                </div>
              </div>
            </div>

            <nav aria-label="Подвал" className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[rgba(230,246,245,0.82)]">
              {footerLinks.map(({ label, href }) => (
                <a key={label} href={href} className="transition hover:text-white">
                  {label}
                </a>
              ))}
            </nav>

            <div className="space-y-3 text-sm text-[rgba(230,246,245,0.82)]">
              {contactItems.map(({ label, value, href, icon: Icon }) => (
                <a key={label} href={href} className="flex items-center gap-3 transition hover:text-white">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-[rgba(189,246,239,0.9)] ring-1 ring-white/10">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.18em] text-[rgba(230,246,245,0.62)]">{label}</span>
                    <span className="block text-sm text-[rgba(230,246,245,0.82)]">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-sm text-[rgba(230,246,245,0.72)] sm:flex-row sm:items-center sm:justify-between">
            <span>© Онлайн-логопед</span>
            <div className="flex items-center gap-2 text-[rgba(230,246,245,0.66)]">
              <MapPin className="h-4 w-4" />
              <span>Онлайн-консультации по всей России</span>
            </div>
          </div>
        </footer>
      </div>

      <div
        className={`fixed inset-x-4 bottom-4 z-50 transition-all duration-300 sm:hidden ${
          showFloatingCta ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"
        }`}
      >
        <a
          href="mailto:hello@online-logoped.ru"
          className="btn-primary cta-pulse mx-auto flex w-full max-w-sm items-center justify-center gap-2 px-5 py-3.5 text-sm shadow-[0_20px_40px_rgba(28,167,160,0.28)]"
        >
          Записаться
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
