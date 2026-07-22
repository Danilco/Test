"use client";

import { useState } from "react";
import type { FormEvent } from "react";

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits === "" || digits === "7") {
    return digits === "7" ? "+7 " : "";
  }

  let local = digits;
  if (local.startsWith("7")) {
    local = local.slice(1);
  }
  if (local.startsWith("8")) {
    local = local.slice(1);
  }
  local = local.slice(0, 10);

  if (!local) {
    return "+7 ";
  }

  if (local.length <= 3) {
    return `+7 ${local}`;
  }

  if (local.length <= 6) {
    return `+7 (${local.slice(0, 3)}) ${local.slice(3)}`;
  }

  if (local.length <= 8) {
    return `+7 (${local.slice(0, 3)}) ${local.slice(3, 6)}-${local.slice(6)}`;
  }

  return `+7 (${local.slice(0, 3)}) ${local.slice(3, 6)}-${local.slice(6, 8)}-${local.slice(8)}`;
}

function stripName(value: string) {
  return value.replace(/[0-9]/g, "");
}

export function ContactSection() {
  const [showPhoneForm, setShowPhoneForm] = useState(false);
  const [wantsEmail, setWantsEmail] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cleanName = name.trim();
    const phoneDigits = phone.replace(/\D/g, "");
    const normalizedPhone = phoneDigits.length === 11 && phoneDigits.startsWith("7") ? phoneDigits.slice(1) : phoneDigits;

    let valid = true;
    if (!cleanName || /\d/.test(cleanName)) {
      setNameError("Имя не должно содержать цифр");
      valid = false;
    }

    if (normalizedPhone.length !== 10) {
      setPhoneError("Введите корректный номер телефона");
      valid = false;
    }

    if (!valid) {
      setSubmitted(false);
      return;
    }

    setNameError("");
    setPhoneError("");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-teal-900 py-20 text-white">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-sky-400/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-teal-900/20 backdrop-blur-xl sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-teal-200">Готовы начать?</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Оставьте заявку — свяжемся с вами в течение дня
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-teal-200">
                Мы предложим удобное расписание и программу занятий, которая подходит именно вашему ребёнку.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a
                  href="https://t.me/ARTNOT_A"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-3xl border border-white/15 bg-slate-950/90 px-6 py-5 text-center text-sm font-semibold text-white transition hover:bg-slate-900"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-teal-300" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 4L11 13" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 4L15 22L11 13L2 10L22 4Z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Telegram
                </a>
                <a
                  href="https://wa.me/79991234567"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-3xl border border-white/15 bg-slate-950/90 px-6 py-5 text-center text-sm font-semibold text-white transition hover:bg-slate-900"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-teal-300" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18.36 5.64a9 9 0 1 1-12.73 12.73L2 22l3.64-3.64A9 9 0 0 1 18.36 5.64Z" />
                    <path d="M15.59 8.41a6.5 6.5 0 0 1-5.83 10.23l-.76.12-.55-.56a4.5 4.5 0 0 1 .97-7.45" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/20 p-6 shadow-lg shadow-slate-950/10 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-teal-200">По телефону</p>
                  <p className="mt-2 text-lg font-semibold text-white">+7 (999) 123-45-67</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setShowPhoneForm((current) => !current);
                    setSubmitted(false);
                  }}
                  className="rounded-full bg-teal-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-300"
                >
                  {showPhoneForm ? "Скрыть" : "Оставить заявку"}
                </button>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  showPhoneForm ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
                }`}
                aria-hidden={!showPhoneForm}
              >
                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                  <label className="block text-sm text-teal-100">
                    <span className="block text-sm font-medium text-white">Имя</span>
                    <input
                      type="text"
                      value={name}
                      onChange={(event) => {
                        setName(stripName(event.target.value));
                        if (nameError) {
                          setNameError("");
                        }
                      }}
                      placeholder="Ваше имя"
                      required
                      className="mt-2 w-full rounded-3xl border border-white/15 bg-slate-950/90 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-teal-300 focus:ring-2 focus:ring-teal-300/30"
                    />
                    {nameError && <p className="mt-2 text-sm text-rose-300">{nameError}</p>}
                  </label>

                  <label className="block text-sm text-teal-100">
                    <span className="block text-sm font-medium text-white">Телефон</span>
                    <input
                      type="tel"
                      value={phone}
                      onFocus={() => {
                        if (!phone) {
                          setPhone("+7 ");
                        }
                      }}
                      onChange={(event) => {
                        const formatted = formatPhone(event.target.value);
                        setPhone(formatted);
                        if (phoneError) {
                          setPhoneError("");
                        }
                      }}
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="mt-2 w-full rounded-3xl border border-white/15 bg-slate-950/90 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-teal-300 focus:ring-2 focus:ring-teal-300/30"
                    />
                    {phoneError && <p className="mt-2 text-sm text-rose-300">{phoneError}</p>}
                  </label>

                  <div className="flex items-center gap-3">
                    <input
                      id="emailToggle"
                      type="checkbox"
                      checked={wantsEmail}
                      onChange={() => setWantsEmail((current) => !current)}
                      className="h-4 w-4 rounded border-white/30 bg-slate-950 text-teal-400 focus:ring-teal-300"
                    />
                    <label htmlFor="emailToggle" className="text-sm text-teal-100">
                      Указать email
                    </label>
                  </div>

                  {wantsEmail && (
                    <label className="block text-sm text-teal-100">
                      <span className="block text-sm font-medium text-white">Email</span>
                      <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="example@mail.ru"
                        className="mt-2 w-full rounded-3xl border border-white/15 bg-slate-950/90 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-teal-300 focus:ring-2 focus:ring-teal-300/30"
                      />
                    </label>
                  )}

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-3xl bg-teal-400 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-teal-300"
                  >
                    Отправить заявку
                  </button>

                  {submitted && (
                    <p className="rounded-3xl bg-teal-950/40 p-4 text-sm text-teal-100">
                      Заявка отправлена! Мы свяжемся с вами по телефону в ближайшее время.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
